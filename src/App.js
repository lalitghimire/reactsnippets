import './App.css';
import CountryHook from './pages/CountryHook';
import ImageToBase64 from './pages/ImageToBase64';
import SimpleForm from './pages/SimpleForm';

const App = () => {
    return (
        <div>
            <div className='header'>
                <h2> Miniature Projects</h2>
            </div>
            <SimpleForm />
            <CountryHook />
            <ImageToBase64 />
        </div>
    );
};

export default App;
