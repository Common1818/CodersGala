import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { HomeContext } from "../../contexts/homeContext";

const BottomSection = () => {
  const { home } = useContext(HomeContext);
  // const homeArray = home && home.home;

  // const left1 = homeArray && homeArray[0];
  // const left = left1 && left1.left;
  // const middle1 = homeArray && homeArray[0];
  // const middle = middle1 && middle1.middle;
  // const right1 = homeArray && homeArray[0];
  // const right = right1 && right1.right;

  useEffect(() => {
    // const navbarOpen = $(".navbar-toggler").attr("aria-expanded");
    if (typeof window !== "undefined") {
      if (window.innerWidth < 600) {
        $(window).scroll(() => {
          var scroll = window.scrollY;
          if (scroll < 150) {
            $(".hero-box__circle--blue").removeClass("one");
            $(".hero-box__circle--orange").removeClass("three");
            $(".hero-box__circle--green").removeClass("two");
          }
          if (scroll > 150 && scroll < 450) {
            $(".hero-box__circle--blue").addClass("one");
            $(".hero-box__circle--orange").removeClass("three");
            $(".hero-box__circle--green").removeClass("two");
          }
          if (scroll > 450 && scroll < 650) {
            $(".hero-box__circle--green").addClass("two");
            $(".hero-box__circle--blue").removeClass("one");
            $(".hero-box__circle--orange").removeClass("three");
          }
          if (scroll > 650) {
            $(".hero-box__circle--orange").addClass("three");
            $(".hero-box__circle--green").removeClass("two");
            $(".hero-box__circle--blue").removeClass("one");
          }
        });
      }
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-box-container">
        <NavLink to="/about" className="hero-box">
          <span className="hero-box__circle hero-box__circle--blue"></span>
          <h2 className="hero-box__title">What is Coders Gala?</h2>
          <p className="hero-box__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritat.
            Veritatis, fugit.is, fugit.
          </p>
        </NavLink>
        <NavLink to="/about/#aboutus" className="hero-box">
          <span className="hero-box__circle hero-box__circle--green"></span>
          <h2 className="hero-box__title">Who are We ?</h2>
          <p className="hero-box__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritat.
            Veritatis, fugit.is, fugit.
          </p>
        </NavLink>
        <NavLink to="/learn" className="hero-box">
          <span className="hero-box__circle hero-box__circle--orange"></span>
          <h2 className="hero-box__title">Start Learning ..</h2>
          <p className="hero-box__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritat.
            Veritatis, fugit.is, fugit.
          </p>
        </NavLink>
      </div>
    </section>
  );
};

export default BottomSection;
