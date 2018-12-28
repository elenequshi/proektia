import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../css/slider.css';

class Slider extends Component {

    render() {
        return (
            <div>
                <Carousel effect="scrollx" autoplay>

                    <div>
                        <img alt='' src={"http://pristinewatcheslondon.co.uk/img/omegabanner.jpg"} className="slider" />
                    </div>

                    <div>
                        <img alt='' src={"https://images.askmen.com/1080x540/2017/02/13-043441-how_your_watch_reflects_your_character.jpg"} className="slider" />
                    </div>

                    <div>
                        <img alt='' src={"https://i.pinimg.com/originals/c4/0b/52/c40b5293ae3b0fedf97d8c4e5888638d.jpg"} className="slider" />
                    </div>

                    <div>
                        <img alt='' src={"https://i.pinimg.com/originals/54/4c/ce/544ccecdfc7f1810cc6b5e1c6dc137ec.jpg"} className="slider" />
                    </div>

                    <div>
                        <img alt='' src={"https://moneyinc.com/wp-content/uploads/2016/04/Breitling-IWC_opener_LG.jpg"} className="slider" />
                    </div>

                </Carousel>

                <div className="watches">
                    <div className="wrapper">

                        <img alt='watch1' src={"https://5.imimg.com/data5/PC/KN/MY-40413477/ulysse-nardin-watch-for-men-500x500.jpg"} className="watch" />
                        <img alt='watch2' src={"http://cdn2.rsvponline.mx/files/rsvp/uploads/2017/meteoris_de_louis_monet.jpg"} className="watch" />
                        <img alt='watch3' src={"http://www.androidguys.com/wp-content/uploads/2016/07/ulysse-nardin-luxury-watch.jpg"} className="watch" />

                    </div>
                </div>


            </div>
        );
    }
}

export default Slider;