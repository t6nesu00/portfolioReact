import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import FooterPage from './components/footer/FooterPage';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);


class App extends Component {
  render() {
    return (
        <div style={{height: '700px', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}><a href='/'><img src="images/sn.jpg" style={{height: '50px',width:'50px'}}/></a> </span></span>}>
                <Navigation>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/resume">Resume</a>
                    <a href="/contact">Contact</a>
                </Navigation>
            </Header>
            
            <Drawer title="Title" className="drawer-style">
            <div className= "drawer">
            <Navigation>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/resume">Resume</a>
                    <a href="/contact">Contact</a>
            </Navigation>
            </div>
               
            </Drawer>
            
            
            <Content>
              
                 <Main />
                 
                 <FooterPage />
            
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
