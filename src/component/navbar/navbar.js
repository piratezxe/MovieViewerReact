import React from 'react';
import './navbar.module.scss';
import {Navbar, Nav, FormControl, Button, Form, NavDropdown} from 'react-bootstrap';

class AppNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        };

        this.handlerTextSearch = this.handlerTextSearch.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handlerTextSearch(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleButtonClick(e) {
        console.log("click");
        this.props.handleSearch(this.state.text);
    }

    render() {

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Movie Ibdb</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl onChange={this.handlerTextSearch} type="text" placeholder="Search"
                                     className="mr-sm-2"/>
                        <Button onClick={this.handleButtonClick} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default AppNavbar;
