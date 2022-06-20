import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    picture: yup
        .mixed()
        .test('required', 'You need to provide a file', (value) => {
            return value && value.length;
        })
        .test('fileSize', 'The file is too large, max size 2 MB', (value, context) => {
            return value && value[0] && value[0].size <= 2097152;
        }),
});

const errorStyle = {
    color: 'red',
};
const ImageToBase64 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(schema) });

    const [photo, setPhoto] = useState();

    const handleRegistration = async (data) => {
        const { picture } = data;
        console.log(picture);
        const picInBase64 = await convertBase64(picture[0]);
        const storyData = { ...data, picture: picInBase64 };
        setPhoto(picInBase64);
        console.log('story', storyData);
        reset();
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
        <div className='imagetobase'>
            <h2>Upload picture and other info </h2>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <div>
                    <label>Name</label>
                    <input name='name' {...register('name')} />
                    <div style={errorStyle}>{errors?.name && errors.name.message}</div>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email' {...register('email')} />
                    <div style={errorStyle}>{errors?.email && errors.email.message}</div>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' {...register('password')} />
                    <div style={errorStyle}>{errors?.password && errors.password.message}</div>
                </div>
                <div>
                    <input
                        type='file'
                        name='picture'
                        accept='image/gif, image/jpeg, image/png, image/jpg'
                        {...register('picture', { required: 'picture is required' })}
                    />
                    <div style={errorStyle}>{errors?.picture && errors.picture.message}</div>
                </div>
                <button>Submit</button>
            </form>
            <div>
                <h3> The image is displayed below</h3>
                <img src={photo} alt='' height='200px' />
            </div>
        </div>
    );
};

export default ImageToBase64;
