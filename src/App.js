import Header from './components/Header';
import AudioBoard from './components/AudioBoard';
import UserRecorder from './components/UserRecorder';
import { Container } from 'react-bootstrap'





const App = () => {

    return (
        <div>
            <Header />
            <Container fluid>
                <AudioBoard />
            </Container>
            <Container fluid>
                <UserRecorder />
            </Container>

        </div>
    );
};

// infinite scroll, logout, more customizations...

export default App;