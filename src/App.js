import Header from './components/Header';
import AudioBoard from './components/AudioBoard';
import UserRecoder from './components/UserRecoder';
import { Container } from 'react-bootstrap'





const App = () => {

    return (
        <div>
            <Header />
            <Container fluid>
                <AudioBoard />
            </Container>
            <Container fluid>
                <UserRecoder />
            </Container>

        </div>
    );
};

// infinite scroll, logout, more customizations...

export default App;