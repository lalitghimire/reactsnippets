import React from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';

const SimpleForm = () => {
    return (
        <div
            style={{
                margin: 'auto',
                padding: '50px',
                maxWidth: '650px',
                maxHeight: '650px',
                alignContent: 'center',
                marginTop: '120px',
                marginBottom: '50px',
            }}
        >
            <Paper
                style={{
                    padding: 20,
                }}
                elevation={6}
            >
                <Typography component='h1' variant='h4' align='center'>
                    Nice looking Form in middle of page
                </Typography>
                <Typography component='h5' variant='h6' align='center'>
                    Concept to learn: Material ui+ inline style form
                </Typography>

                <form>
                    <div>
                        <TextField
                            name='title'
                            label='Title'
                            variant='outlined'
                            sx={{ m: 1, width: '25ch' }}
                            required
                            style={{ width: '100%' }}
                            InputLabelProps={{ style: { fontSize: 23 } }}
                        />

                        <TextField
                            name='details'
                            label='Details'
                            variant='outlined'
                            required
                            sx={{ m: 1, width: '25ch' }}
                            multiline
                            rows={3}
                            style={{ width: '100%' }}
                            InputLabelProps={{ style: { fontSize: 23 } }}
                        />
                    </div>

                    <div>
                        <input
                            type='file'
                            name='picture'
                            variant='outlined'
                            required
                            accept='image/gif, image/jpeg, image/png, image/jpg'
                        />
                    </div>

                    <Button
                        style={{
                            padding: 8,
                            margin: '10px',
                        }}
                        variant='outlined'
                        type='submit'
                    >
                        {' '}
                        Submit
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default SimpleForm;
