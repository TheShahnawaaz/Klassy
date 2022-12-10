import React from 'react'
import '../Styles/Contact.css'
import pic1 from '../Images/about-thumb-01.jpg'
import pic2 from '../Images/about-thumb-02.jpg'

export default function Contact() {
  return (
    <div>
      <div id="contact">
        <div className="contact-content">
            <div className="contact-left">
                <h1>CONTACT US</h1>
                <div className="heading">
                    Here You Can Make A Reservation Or Just walkin to our cafe
                </div>
                <p>
                    Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei sollicitudin
                    urna diam, sed
                    commodo purus porta ut.
                </p>

                <div className="thumb-box">
                    <div className="thumb">
                        <img src={pic1} alt="Pic1"/>
                    </div>
                    <div className="thumb">
                        <img src={pic2} alt="Pic2"/>

                    </div>

                </div>
            </div>
            <div className="contact-right">
                <div>
                    <h1>
                        Table Reservation
                    </h1>
                </div>

                <form className="reservation-form" action="" method="post">
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" placeholder="Phone"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="date" placeholder="Date"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="time" placeholder="Time"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="person" placeholder="Number of Guest"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="message" placeholder="Message"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="submit" value="Make A Reservation"/>
                    </div>
                </form>
            </div>


        </div>
    </div>
    </div>
  )
}
