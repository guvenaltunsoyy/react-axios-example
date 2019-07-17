import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
            <header>
            
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand><Nav.Link href={'/'}>STARWARS PAGE</Nav.Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href={'/home'}>Homepage</Nav.Link>
                        
                    </Nav>
                </Navbar>
            </header>
        );
    }
}

export default Header;