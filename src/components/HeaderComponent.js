import React,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem, ModalHeader, FormGroup, Label, Input} from 'reactstrap';  //import the navigation bar component of reactstrap
import {Form,Modal,ModalBody,Button} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        };
        this.toggleNav = this.toggleNavbar.bind(this);//bind the function(toggleNavbar) to the variable(toggleNav). Variable name and function name can be same
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNavbar(){
        this.setState({
            isNavOpen : ! this.state.isNavOpen 
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleLogin(event){
        //first close the Modal
        this.toggleModal();
        //now retrive the parameters
        alert("Username : "+this.username.value+"\nPassword : "+this.password.value+"\nRemember : "+this.remember.checked);
        event.preventDefault();
    }

    render(){
        return(
            <>
            {/*
                <> </> is a react fragment.
                We can also define fragment as <React.Fragment> </React.Fragment>
                We can also use a <div> tag instead of fragment.
                div tag will add extra node to DOM tree but a fragment doesn't
            */}
                <Navbar dark expand="md">{/*expand="md" indicates that navigation bar will be completely shown for medium to extra large devices */} 
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>{/* Button to toggle the navbar in case of small devices */}
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" 
                            width="41" height="30" 
                            alt="Restaurant Con Fusion">
                            </img>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar> {/* In order to collapse the navbar enclose the entire navbar in Collapse */}
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg">Home</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg">About Us</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg">Menu</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg">Contact Us</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem> 
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span>Login
                                </Button>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            <h1>Restaurant Confusion</h1>
                            <p> We take inspiration from world's best chefs and make our foodie visitors happy  </p>
                            </div>
                            
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.state.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        {/* this is uncontrolled form */}
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                //make use of innerRef to retrieve values
                                innerRef={(input)=>this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input)=>this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input)=>this.remember = input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
            
        );
    }
}


export default Header;