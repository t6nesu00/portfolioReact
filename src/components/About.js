import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return(
            <div className="container">
                <h1>About me page</h1>
            
<div className="row">
    <div className="column">
        <img className="myImg" src="./images/me1.jpg" alt="First slide" />
    </div>
    <div className="column">
        <div className="intro">
            <p>Hello, I am <strong>Suman Nepali</strong>. I am an IT student in Oulu UAS, Oulu, Finland.</p>
            <p>I came to Finland in 2016. I already have completed my Bachelor's in Physics from Tribhuvan University, Kathmandu, Nepal.
            </p>
            <p>
            I was born and grown up in Nepal. I am willing to learn IT knowledge as well as all the required skills to grow in foriegn land. I am very serious in my study, I do I learn from heart.
I love sports specially, Football and Table Tennis. Beside that, reading books, travelling are my favourite hobbies.
            </p>
        </div>
                        
    </div>
</div>
                
                
                
                <br></br>
                <br></br>
            </div>
            
        )
    }
}

export default About;