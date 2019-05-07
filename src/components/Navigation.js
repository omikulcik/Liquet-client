
import React from "react";
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import "../scss/nav.scss";
import logo from "../images/logov2.png"
  
  export default class Navigation extends React.Component {
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
        <div className="container-fluid nav-container">
          <div className="container" >
            <Navbar light expand="lg">
              <NavbarBrand href="/"><img src={logo} alt="vineon" /></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                      <Link to="/" className="nav-link">O nás</Link>
                  </NavItem>
                  <NavItem>
                      <Link to="/degustace" className="nav-link">Degustace</Link>
                  </NavItem>
                  <NavItem>
                      <Link to="/oslavy-a-teambuildingy" className="nav-link">Oslavy a teambuildingy</Link>
                  </NavItem>
                  <NavItem>
                      <Link to="/blog" className="nav-link">Blog</Link>
                  </NavItem>
                  <NavItem>
                      <Link to="/kontakt" className="nav-link">Kontakt</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
      );
    }
  }

