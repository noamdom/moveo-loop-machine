import { Navbar, Container } from 'react-bootstrap'

const Header = () => {

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    < img
                        src="/assets/moveo-logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top rounded-circle"
                        alt="React Bootstrap logo"
                    />
                    {' '}
                    <span className="my-0">
                        Moveo - Loop Machine
                        </span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;