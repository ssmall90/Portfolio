import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Col"
import Col from "react-bootstrap/Row"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assests/img/meter1.svg"
import meter2 from "../assests/img/meter2.svg"
import meter3 from "../assests/img/meter3.svg"
import colourSharp from "../assests/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
                            <img src={meter1} alt='' />
                            <h5>Web Development</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='' />
                            <h5>Cloud Engineer</h5>
                        </div>
                        <div className='item'>
                            <img src={meter3} alt='' />
                            <h5>UI UX Design</h5>
                        </div>
                        <div className='item'>
                            <img src={meter1} alt='' />
                            <h5>Advanced Programming</h5>
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
