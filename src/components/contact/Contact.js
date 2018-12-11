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
                                    <p>You can contact me at any time.</p>
                                    <h4>Contact: 000000000</h4>
                                    <h4>Email: suman.nepali@gmail.com</h4>
                                </CardText>
                                <Button href="#">Button</Button>
                            </CardBody>
                            </Card>
                        </div>
                    </div> 
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
            
    );
};
export default Contact;