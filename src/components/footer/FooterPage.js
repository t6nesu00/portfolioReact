import React, { Component } from 'react';
import { Col, Container, Row, Footer } from "mdbreact";
import './footer.css'

class FooterPage extends Component {
  constructor() {
    super()
    this.state={time: new Date()}
  }

  currentTime(){
    this.setState({
      time: new Date()
    })
  }
  componentWillMount(){
    setInterval(()=>this.currentTime(), 1000)
  }
    render() {
        return(
            <Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Suman Nepali</h5>
      <p>
          Hello this is my portfolio. I created this using React Js. This footer part is from MDBootstrap.
      </p>
     
      <h6>
      {this.state.time.toLocaleTimeString()}
      </h6>
      </Col>
      <Col md="12">
              <div className="mb-5 flex-center">
                <a className="fb-ic" href="https://www.facebook.com/dallusuman"><i className="fa fa-facebook fa-lg white-text mr-md-4"  /></a>
                <a className="tw-ic" href="https://twitter.com/HlwZigri"><i className="fa fa-twitter fa-lg white-text mr-md-4" /></a>
                <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-4" /></a>
                <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-4" /></a>
                <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text" /></a>
              </div>
            </Col>
      
      


    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {(new Date().getFullYear())} Copyright: <a href=""> Suman Nepali</a>
    </Container>
  </div>
</Footer>
        )
    }
}

export default FooterPage;