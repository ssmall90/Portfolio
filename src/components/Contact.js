import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Row";
import contactImg from "../assests/img/contact-img.svg"

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
        ...formDetails,
        [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      
      setButtonText("Send");
      const result = await response.json();
      setFormDetails(formInitialDetails);
      
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ success: false, message: "Something went wrong, please try again" });
      setButtonText("Send");
    }
  };
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Col className="align-items-center">
          <Row md={6} className="form-imgbx">
            <img className="form-img" src={contactImg} alt="Contact us"/>
          </Row>
          <Row md={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col sm={12} className="px-1 mb-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                    </Col>
                    <Col sm={12} className="px-1 mb-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col sm={12} className="px-1 mb-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                    </Col>
                    <Col sm={12} className="px-1 mb-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col sm={12} className="px-1 justify-content-center">
                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}  />
                    <button className="form-btn" type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                        status.message && 
                        <Col>
                        <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                        </p>
                        </Col>
                    }
                </Row>
            </form>
          </Row>
        </Col>
      </Container>
    </section>
  );
};
