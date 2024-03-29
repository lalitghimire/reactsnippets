import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useField = (type) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return {
        type,
        value,
        onChange,
    };
};

const useCountry = (name) => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        if (name) {
            axios
                .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
                .then((response) => {
                    setCountry({ data: response.data[0], found: true });
                })
                .catch(() => {
                    setCountry({ found: false });
                });
        }
    }, [name]);

    return country;
};

const Country = ({ country }) => {
    if (!country) {
        return null;
    }

    if (!country.found) {
        return <div>not found...</div>;
    }

    return (
        <div>
            <h3>{country.data.name.common} </h3>
            <div>Capital: {country.data.capital} </div>
            <div>Population: {country.data.population}</div>
            <img
                src={country.data.flags.png}
                height='100'
                alt={`flag of ${country.data.name.common}`}
            />
        </div>
    );
};

const CountryHook = () => {
    const nameInput = useField('text');
    const [name, setName] = useState('');
    const country = useCountry(name);

    const fetch = (e) => {
        e.preventDefault();
        setName(nameInput.value);
    };

    return (
        <div className='country'>
            <h2> Country information </h2>
            <h4>
                {' '}
                A react application which fetch country data from Api and display the information
            </h4>
            <h6>Concept to learn: custom hooks in react </h6>
            <form onSubmit={fetch}>
                <input {...nameInput} placeholder='type a country name' />
                <button>find</button>
            </form>
            <div>
                <Country country={country} />
            </div>
        </div>
    );
};

export default CountryHook;
