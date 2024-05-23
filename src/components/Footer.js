import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Row";
import logo from "../assests/img/logo.svg";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="sep-line"></div>
        <Container className="py-3">
            <Row sm={12} className="footer-container">
                <div sm={2}>
                    <img src={logo} alt="logo" />
                </div>
                <div sm={2} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={navIcon1}/></a>
                        <a href=""><img src={navIcon2}/></a>
                        <a href=""><img src={navIcon3}/></a>
                    </div>
                </div>
                <p>Copyright 2024. All Right Reserved</p>
            </Row>
        </Container>
    </footer>
  )
}


