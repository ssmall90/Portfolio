import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Col"
import Col from "react-bootstrap/Row"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter80 from "../assests/img/meter80.svg"
import meter90 from "../assests/img/meter90.svg"
import meter75 from "../assests/img/meter75.svg"
import meter60 from "../assests/img/meter60.svg"
import colourSharp from "../assests/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill;' id='skills'>
      <Container>
        <Col>
            <Row>
                <div className='skill-bx'>
                    <h2>
                        Skills
                    </h2>
                    <p>
                        put some form of description here
                    </p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={meter90} alt='' />
                            <h5>Web Development</h5>
                        </div>
                        <div className='item'>
                            <img src={meter75} alt='' />
                            <h5>Cloud Engineer</h5>
                        </div>
                        <div className='item'>
                            <img src={meter80} alt='' />
                            <h5>UI UX Design</h5>
                        </div>
                        <div className='item'>
                            <img src={meter80} alt='' />
                            <h5>Advanced Programming</h5>
                        </div>
                        <div className='item'>
                            <img src={meter60} alt='' />
                            <h5>SQL</h5>
                        </div>
                    </Carousel>

                </div>
            </Row>
        </Col>
      </Container>
      <img className='background-image-left' src={colourSharp} alt=''/>
    </section>
  )
}
