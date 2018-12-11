import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './About';
import Projects from './Projects';
import Resume from './resume/Resume';
import Contact from './contact/Contact';


const Main = () => (
    
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
    </Switch>
)



export default Main;