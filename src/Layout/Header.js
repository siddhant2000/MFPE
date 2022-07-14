import React from 'react'
import {
 Container,  
  Navbar, 
  Nav,
  Button,
  
} from 'react-bootstrap'


export default function Header() {
  return (
    
    <div className="sticky-top">
    <Navbar bg="primary"  className="text-light" expand="lg">
  <Container  className="text-light">
    <Navbar.Brand href="#"  className="text-light">Sports Event Management System</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-light float-right">
        <Nav.Link href="/" className="text-light">{(localStorage.getItem("isLoggedIn")?"":"Login")}</Nav.Link>
        <Nav.Link href="/Home" className="text-light" >Home</Nav.Link>
      </Nav>
      <Nav>
<Button onClick={()=>{
  localStorage.removeItem("username")
   localStorage.clear();
 // localStorage.setItem("username","")

  localStorage.removeItem("Authorization")
  window.location="/"
  
}} style={{marginLeft:20}}>{(localStorage.getItem("isLoggedIn")?"Logout":"")}</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    
  )
}