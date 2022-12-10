import React from 'react'
import s1 from '../Images/slide-01.jpg'
import s2 from '../Images/slide-02.jpg'
import s3 from '../Images/slide-03.jpg'
import '../Styles/Home.css'

export default function Home() {
  return (
    <div>
      <section id="home">

        <div id="home-left">
            <div className="content">

                <h1 className="com-name">KlassyCafe
                </h1>
                <p>THE BEST EXPERIENCE</p>
                {/* <!-- <a href="#" className="btn">Read More</a> --> */}
            </div>
        </div>


        <div id="home-right">
            <img className="slider" id="s1" src={s1} alt="slider"/>
            <img className="slider" id="s2" src={s2} alt="slider"/>
            <img className="slider" id="s3" src={s3} alt="slider"/>
        </div>
    </section>
    </div>
  )
}
