import Header from './components/Header';
import AudioBoard from './components/AudioBoard';

const App = () => {

    return (
        <div>
            <Header />
            <div className='container'>
                <AudioBoard />
            </div>
        </div>
    );
};

// infinite scroll, logout, more customizations...

export default App;