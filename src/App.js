import './App.css';
import CountryHook from './pages/CountryHook';
import ImageToBase64 from './pages/ImageToBase64';

const App = () => {
    return (
        <div>
            <div className='header'>
                <h2> Miniature Projects</h2>
            </div>
            <CountryHook />
            <ImageToBase64 />
        </div>
    );
};

export default App;
