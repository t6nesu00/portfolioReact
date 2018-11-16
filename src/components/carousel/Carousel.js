var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="./images/image1.jpg" />
                    <p className="legend">hello line one</p>
                </div>
                <div>
                    <img src="./images/image2.jpg" />
                    <p className="legend">hello line two</p>
                </div>
                <div>
                    <img src="./images/image3.jpg" />
                    <p className="legend">hello line three</p>
                </div>
                
            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));