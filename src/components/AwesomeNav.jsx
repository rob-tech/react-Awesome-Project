import React, {Component} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
  

//imr => import react
//cc => create class

class AwesomeNav extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return ( 
        <div>
        <Navbar dark expand="md" className="AwesomeNav">
          <NavbarBrand className = "brand" href="#">Awesome</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='#'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Browse</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}


export default AwesomeNav;

  	  	
 