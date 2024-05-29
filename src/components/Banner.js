import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Container from "react-bootstrap/Container";
import headerimg1 from "../assests/img/headerimg.json";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Row";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Engineer", "Web Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Col className="align-items-center">
          <Row xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Sheldon `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I am Sheldon Small, a Full Stack Software Engineer with 2 years of
              experience, currently interning at Siemens Gamesa. Skilled in C#,
              C++, .NET, JavaScript, React, HTML, CSS, Azure, MySQL, and
              MongoDB, I specialize in both front-end and back-end development.
            </p>
            <button className="connect-button">
              <a href="#connect">Let's Connect</a>
              <ArrowRightCircle size={25} />{" "}
            </button>
          </Row>
          <Row xs={12} md={6} xl={5}>
            <Lottie className="animation"
              animationData ={headerimg1}
              loop={true}
              autoplay={true}
              style={{ width: 600, height: 600 }}
            />
          </Row>
        </Col>
      </Container>
    </section>
  );
};
