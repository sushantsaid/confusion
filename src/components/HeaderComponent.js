import React,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';  //import the navigation bar component of reactstrap
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNavbar.bind(this);//bind the function(toggleNavbar) to the variable(toggleNav). Variable name and function name can be same
    }

    toggleNavbar(){
        this.setState({
            isNavOpen : ! this.state.isNavOpen 
        });
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
            </>
            
        );
    }
}


export default Header;