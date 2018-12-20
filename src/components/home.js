import React, { Component } from 'react';
import CarouselPage from './carousel/CarouselPage';
import Animation from './animcss/Animation'; 

class Home extends Component {
    render() {
        return(
            <div>
                <CarouselPage />
                <br></br>
                <Animation />
                
            </div>
        )
    }
}

export default Home;