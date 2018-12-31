import React from 'react';
import '../css/about.css';


const About = () => {

    return (
        <div className="container-about">
            <div className="story">
                <h2>OUR STORY</h2>
                <hr className="style-eight" />
                <p>
                    In 2013, we started Luxury Watches to disrupt the overpriced and outdated models of the fashion industry.
                     Empowered by the people through crowdfunding, our original watch line set us apart by bringing you quality,
                      minimalist designs at radically fair prices.

                    We’re inspired by the go-getters, the innovators, the dreamers;
                        and our designs embody this very spirit.
                        They’re built for adventuring, creating, and daring to disrupt the norm.

                    Above all else, we create with the dream of enlivening our ultimate mission: to inspire you to live life on your own terms.
                </p>
            </div>

            <div className="mission">
                <h2>OUR MISSION</h2>
                <hr className="style-eight" />
                <p>
                    We were founded on the belief that style shouldn’t break the bank.
                    Our goal is to change the way you think about fashion by delivering premium designs at radically fair prices.
                </p>

            </div>

        </div>
    )
}


export default About;