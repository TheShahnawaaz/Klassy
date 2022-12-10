import React from "react";
import "../Styles/Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  let slides = document.querySelectorAll(".card");
  console.log(slides);
  let counter = 0;
  let gap = 0;
  let sl = 100;
  let no_of_slide = 0;
  if (window.innerWidth < 1080) {
    gap = 200;
    sl = 100;
    no_of_slide = slides.length - 1;
  } else {
    gap = 300;
    sl = 150;
    no_of_slide = slides.length - 3;
  }

  slides.forEach((card, index) => {
    card.style.left = `${index * gap}px`;
  });
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const moveSlide = (direction) => {
    console.log("done")
    console.log(gap, sl, no_of_slide,counter)
    if (direction === "right") {
      if (counter !== no_of_slide) {
        counter++;
      } else {
        console.log("hello");
        restricted(direction);
        return;
      }
    } else {
      if (counter !== 0) counter--;
      else {
        //   console.log("hello");
        restricted(direction);
        return;
      }
    }
    slides.forEach((card) => {
      card.style.transform = `translateX(-${counter * sl}%)`;
    });
  };

  const move_left = () => {
    moveSlide("left");
  };

  const move_right = () => {
    moveSlide("right");
  };

  const restricted = (direction) => {
    // let i = 0;
    if (direction === "right") {
      slides.forEach((card) => {
        card.style.transform = `translateX(-${counter * sl + 30}%)`;
      });
    } else {
      console.log("done");
      slides.forEach((card) => {
        card.style.transform = `translateX(30%)`;
      });
    }

    sleep(150).then(() => {
      // alert("You have reached the end of the list");

      slides.forEach((card) => {
        card.style.transform = `translateX(-${counter * sl}%)`;
      });
    });
  };

  return (
    <div>
      <section id="menu">
        <div className="menu-top">
          <h1>Our Menu</h1>
          <div className="heading">
            Our selection of cakes with quality taste
          </div>
        </div>
        <main>
          <div className="roller">
            <div className="card card1">
              <div className="price">
                <h3>$ 100</h3>
              </div>
              <div className="card-description">
                <h1>Chowmin</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <br />
                <Link to="/contact">
                  <p>Make Reservation</p>
                </Link>
              </div>
            </div>

            <div className="card card2">
              <div className="price">
                <h3>$ 100</h3>
              </div>
              <div className="card-description">
                <h1>Curry</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <br />
                <Link to="/contact">
                  <p>Make Reservation</p>
                </Link>
              </div>
            </div>

            <div className="card card3">
              <div className="price">
                <h3>$ 100</h3>
              </div>
              <div className="card-description">
                <h1>Noodles</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <br />
                <Link to="/contact">
                  <p>Make Reservation</p>
                </Link>
              </div>
            </div>
            <div className="card card4">
              <div className="price">
                <h3>$ 100</h3>
              </div>
              <div className="card-description">
                <h1>Pizza</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <br />
                <Link to="/contact">
                  <p>Make Reservation</p>
                </Link>
              </div>
            </div>

            <div className="card card5">
              <div className="price">
                <h3>$ 100</h3>
              </div>
              <div className="card-description">
                <h1>PaniPuri</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <br />
                <Link to="/contact">
                  <p>Make Reservation</p>
                </Link>
              </div>
            </div>

            <div className="card card6">
              <div className="price">
                <h3>$ 100</h3>
              </div>
              <div className="card-description">
                <h1>Rasgulla</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <br />
                <Link to="/contact">
                  <p>Make Reservation</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="left_scroll" onClick={move_left}></div>
          <div className="right_scroll" onClick={move_right}></div>
        </main>
      </section>
    </div>
  );
}
