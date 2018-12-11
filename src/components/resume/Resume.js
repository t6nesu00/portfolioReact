import React, { Component } from 'react';
import './resume.css';
import TableContent from './TableContent';
import Skill from './Skill';

class Resume extends Component {
    render() {
        return(
            <div className="container">

                <div className="top-section">
                 <h1 id="name">SUMAN NEPALI</h1>
                    <img src="./images/me2.jpg" style={{height: '200px',width:'auto'}}/>
                </div>
                <br /><br />
                <div className="content">
                    <h2>Academic Qualification:</h2>
                    <TableContent />
                    <button>Download CV</button>
                    <h2>Skills</h2>
                    <Skill />
                    
            
                </div>
                
            </div>
        )
    }
}

export default Resume;