import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react"
import logo from "../assests/img/logo.svg";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='Logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggle-icon'></span>    
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={activeLink === "home" ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('home')} href="#home">Home</Nav.Link>
            <Nav.Link className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')} href="#skills">Skills</Nav.Link>
            <Nav.Link className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')} href="#projects">Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#contact'><img src={navIcon1} alt="instagram"/></a>
                <a href='#contact'><img src={navIcon2} alt="instagram"/></a>
                <a href='#contact'><img src={navIcon3} alt="instagram"/></a>
            </div>
            <button className='vvd' onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
