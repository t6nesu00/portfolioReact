import React, { Component } from 'react';
import { Card, CardImage, CardTitle, CardText, CardBody, Button, Col, MDBInput, MDBBtn, MDBIcon, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCard } from 'mdbreact';
import './contact.css';


const Contact = () => {
    return (
        
            
            <div className="container">
                <div className="row">
                    <div className="column">
                    
                        <div className="contact-card">
                            <Card style={{ width: "25rem" }}>
                            <CardImage
                                className="img-fluid"
                                src="../images/me2.jpg"
                                waves
                            />
                            <CardBody>
                                <CardTitle>Suman Nepali</CardTitle>
                                <CardText>
                                    <p>Please feel free to contact me if you have any query about me.</p>
                                    <h4>Phone: +358-469545662</h4>
                                    <h4>Email: hlw.zigri@gmail.com</h4>
                                </CardText>
                                <a href="https://www.facebook.com/dallusuman"><MDBIcon icon="facebook-square" size="3x" /> </a>
                                <a href="https://www.linkedin.com/in/suman-nepali-9193309a/"><MDBIcon icon="linkedin-square" size="3x" /> </a>
                                <a href="https://github.com/t6nesu00"><MDBIcon icon="github-alt" size="3x" /> </a>
                            </CardBody>
                            </Card>
                        </div>
                    </div> 
                    <div className="column">
                    <div className="contact-form">
                        <form>
                        <p className="h5 text-center mb-4">Write to me</p>
                        <div className="grey-text">
                        <MDBInput
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                        />
                        <MDBInput
                            label="Your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                        />
                        <MDBInput
                            label="Subject"
                            icon="tag"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                        />
                        <MDBInput
                            type="textarea"
                            rows="2"
                            label="Your message"
                            icon="pencil"
                        />
                        </div>
                        <div className="text-center">
                        <MDBBtn outline color="secondary">
                            Send <MDBIcon icon="paper-plane-o" className="ml-1" />
                        </MDBBtn>
                        </div>
                    </form>
                    </div>
                    </div>

                    
                            
                </div>

                
            </div>
            
    );
};
export default Contact;