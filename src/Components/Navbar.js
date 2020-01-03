import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import AuthModal from './AuthModal';
import { ToastSuccess } from './Toast'
import { LoggedInUser } from './Styled'

const MainNavbar = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt') !== null)

  const toggleNavbar = () => setCollapsed(!collapsed)

  const handleLogin = () => setLoggedIn(true)

  const handleLogout = () => {
    setLoggedIn(false)
    const localStorageKeys = ["jwt", "username"]
    localStorageKeys.forEach(key => localStorage.removeItem(key))
    // localStorage.removeItem("jwt")
    // localStorage.removeItem("username")
    ToastSuccess("You have successfully logged out")
  }

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand tag={Link} to="/" className="mr-auto">Benstagram</NavbarBrand>
        <LoggedInUser>{localStorage.getItem("username") !== null ? `Hi, ${localStorage.getItem("username")}` : null}</LoggedInUser>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" style={{outline: "none"}} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {loggedIn===false ?
            <NavItem>
              <AuthModal handleLogin={handleLogin}/>
            </NavItem>
            :
            <>
            <NavItem>
              <NavLink tag={Link} to="/profile">My Profile</NavLink>
            </NavItem>
            <NavLink tag={Link} to="/" onClick={handleLogout}>
              Logout
            </NavLink>
            </>}
          </Nav>
        </Collapse>
      </Navbar>
      <hr></hr>
    </div>
  );
}

export default MainNavbar;