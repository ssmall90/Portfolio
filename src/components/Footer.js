import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Col";
import logo from "../assests/img/logo.png";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="sep-line"></div>
      <Container className="py-3">
        <Row sm={12} className="footer-container">
          <div className="imgbox" sm={4}>
            <img src={logo} alt="logo" />
          </div>
          <div sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sheldon-small-373003224/">
                <img src={navIcon1} alt="instagram" />
              </a>
              <a href="https://github.com/ssmall90">
                <img src={navIcon2} alt="instagram" />
              </a>
            </div>
          </div>
          <div sm={4}>
          <h6>Copyright 2024. All Right Reserved</h6>
          </div>
        </Row>
      </Container>
    </footer>
  );
};
