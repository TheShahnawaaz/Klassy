import React from 'react'
//import css
import "../Styles/About.css"
import Pic1 from "../Images/about-thumb-01.jpg";
import Pic2 from "../Images/about-thumb-02.jpg";
import Pic3 from "../Images/about-thumb-03.jpg";

import ab from "../Images/about-video-bg.jpg";


export default function About() {
  return (
    <div>
       <div id="about">
        <div id="about-left">
            <h1>About Us</h1>
            <div className="heading">
                We Leave A Delicious Memory For You
            </div>
            <p>
                Klassy Cafe is one of the best restaurant HTML templates with Bootstrap v4.5.2 CSS framework. You can
                download and feel
                free to use this website template layout for your restaurant business. You are allowed to use this
                template for
                commercial purposes.
            </p>
            <br/>
            <p>
                You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please
                contact us for more
                information.
            </p>
            <div className="thumb-box">
                <div className="thumb">
                    <img src={Pic1} alt="Pic1"/>
                </div>
                <div className="thumb">
                    <img src={Pic2} alt="Pic1"/>

                </div>
                <div className="thumb">
                    <img src={Pic3} alt="Pic1"/>

                </div>
            </div>


        </div>
        <div id="about-right">
            <img src={ab} alt="about"/>
        </div>







    </div>



    </div>
  )
}
