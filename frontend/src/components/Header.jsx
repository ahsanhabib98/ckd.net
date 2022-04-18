import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


function Header() {

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
      <Navbar  expand="lg" className={navbar ? "active" : ""} fixed="top">
        <Container fluid>
          <Navbar.Brand href="/"><h4>CKD.Net</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#get-prediction">Get Predictions</Nav.Link>
              <Nav.Link href="#reports">Reports</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
