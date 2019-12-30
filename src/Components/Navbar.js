import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import MyModal from './LoginModal';


const MyNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const hideModal = () => setModalShow(false)

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand tag={Link} to="/" className="mr-auto">Benstagram</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" style={{outline: "none"}} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/users/1">My Profile</NavLink>
              <NavLink onClick={() => setModalShow(true)}>Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <MyModal
          show={modalShow}
          hideModal={hideModal}         
        />
      <hr></hr>
    </div>
  );
}

export default MyNavbar;