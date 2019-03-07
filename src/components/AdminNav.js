
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
        <div  className={"container"}>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">OM Admin</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to="/admin" className={"nav-link"}>Dashboard</Link>
                </NavItem>
                <NavItem>
                    <Link to="/admin/addevent" className={"nav-link"}>Add event</Link>
                </NavItem>
                <NavItem>
                    <Link to="/admin/registeredtable" className={"nav-link"}>Registration overview</Link>
                </NavItem>
                <NavItem>
                    <Link to="/admin/editevent" className={"nav-link"}>Edit events</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

/* const AdminNav = () => (
    <header>
        <nav className={"navbar navbar-expand-l"}>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/addevent">Add Event</Link>
        <Link to="/admin/registeredtable">Poeple who are registered</Link>
        </nav>
    </header>
);

export default AdminNav */