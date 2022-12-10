import React from 'react'
import '../Styles/Chefs.css'
import chef1 from '../Images/chef/1.png'
import chef2 from '../Images/chef/2.png'
import chef3 from '../Images/chef/3.png'
import facebook from "../Images/icons/facebook.png";
import twitter from "../Images/icons/twitter.png";
import instagram from "../Images/icons/instagram.png";





export default function Chefs() {
  return (
    <div>
      
    <div id="chefs">
        <div className="chef-content">
            <div className="chef-top">

                <h1>
                    Our Chefs
                </h1>
                <div className="heading">
                    We offer the best ingredients for you
                </div>
            </div>

            <div className="chef-list">


                <div className="chef">
                    <div className="social">
                        {/* <!-- add icon of black colour --> */}
                        <div className="icon">
                            <a href="https://www.facebook.com/ShahnawazX786/">
                                <img src={facebook} alt="facebook"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/theshahnawaaz/">
                                <img src={twitter} alt="twitter"/>
                            </a>

                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/theshahnawaaz/">
                                <img src={instagram} alt="instagram"/>
                            </a>
                        </div>
                    </div>
                    <img src={chef1} alt="chef"/>
                    <div className="chef-name">
                        <h3>Randy Walker</h3>
                        <p>Pastry Chef</p>
                    </div>
                </div>


                <div className="chef">
                    {/* <!-- <div className="overlay">fgh</div> --> */}
                    <div className="social">
                        {/* <!-- add icon of black colour --> */}
                        <div className="icon">
                            <a href="https://www.facebook.com/ShahnawazX786/">
                                <img src={facebook} alt="facebook"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/theshahnawaaz/">
                                <img src={twitter} alt="twitter"/>
                            </a>

                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/theshahnawaaz/">
                                <img src={instagram} alt="instagram"/>
                            </a>
                        </div>
                    </div>
                    <img src={chef2} alt="chef"/>
                    <div className="chef-name">
                        <h3>David Martin</h3>
                        <p>Cookie Chef</p>
                    </div>
                </div>


                <div className="chef">
                    <div className="social">
                        {/* <!-- add icon of black colour --> */}
                        <div className="icon">
                            <a href="https://www.facebook.com/ShahnawazX786/">
                                <img src={facebook} alt="facebook"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/theshahnawaaz/">
                                <img src={twitter} alt="twitter"/>
                            </a>

                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/theshahnawaaz/">
                                <img src={instagram} alt="instagram"/>
                            </a>
                        </div>
                    </div>
                    <img src={chef3} alt="chef"/>
                    <div className="chef-name">
                        <h3>Peter Perkson</h3>
                        <p>Pancake Chef</p>
                    </div>
                </div>


            </div>

        </div>
    </div>
    </div>
  )
}
