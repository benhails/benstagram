import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import AuthModal from './AuthModal';
import { currentUserId } from './LoginForm'

const MainNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand tag={Link} to="/" className="mr-auto">Benstagram</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" style={{outline: "none"}} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              {/* <NavLink tag={Link} to={`/users/${currentUserId}`}>My Profile</NavLink> */}
              <NavLink tag={Link} to={`/users/900`}>My Profile</NavLink> {/* Should really only show this based on whether someone is logged in or not */}
            </NavItem>
            <NavItem>
              <AuthModal />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <hr></hr>
    </div>
  );
}

export default MainNavbar;