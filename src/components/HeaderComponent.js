import React,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron} from 'reactstrap';  //import the navigation bar component of reactstrap


class Header extends Component{
    render(){
        return(
            <>
            {/*
                <> </> is a react fragment.
                We can also define fragment as <React.Fragment> </React.Fragment>
                We can also use a <div> tag instead of fragment.
                div tag will add extra node to DOM tree but a fragment doesn't
            */}
                <Navbar dark> 
                    <div className="container">
                        <NavbarBrand href="/">Restaurant Confusion</NavbarBrand>
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