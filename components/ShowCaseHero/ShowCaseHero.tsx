"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {ScrollSmoother} from '@/components/gsapx/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import './ShowCaseHero.scss';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const images = {
  grid: {
    column1: [
      "https://images.pexels.com/photos/23191444/pexels-photo-23191444/free-photo-of-moody-trees-wallpaper.jpeg",
      "https://images.pexels.com/photos/23914309/pexels-photo-23914309/free-photo-of-weathered-wood-textures.jpeg",
      "https://images.pexels.com/photos/23990927/pexels-photo-23990927/free-photo-of-verdant-pine-needles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    column2: [
      "https://images.pexels.com/photos/23990915/pexels-photo-23990915/free-photo-of-mystical-forest-guardian.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      "https://images.pexels.com/photos/23990903/pexels-photo-23990903/free-photo-of-verdant-leaf-patterns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/23990895/pexels-photo-23990895/free-photo-of-mossy-embrace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    column3: [
      "https://images.pexels.com/photos/23990893/pexels-photo-23990893/free-photo-of-silhouette-of-solitude.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/23990884/pexels-photo-23990884/free-photo-of-marina-haven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/23437104/pexels-photo-23437104/free-photo-of-forest-mushroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  parallax: [
    "https://images.pexels.com/photos/23192794/pexels-photo-23192794/free-photo-of-macro-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ],
  pin: {
    pin1: [
      "https://images.pexels.com/photos/23990909/pexels-photo-23990909/free-photo-of-peeling-white-paint.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/23996038/pexels-photo-23996038/free-photo-of-rustic-relics.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/23996034/pexels-photo-23996034/free-photo-of-tropical-leaf-mosaic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    pin2: [
      "https://images.pexels.com/photos/23990927/pexels-photo-23990927/free-photo-of-verdant-pine-needles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/23996040/pexels-photo-23996040/free-photo-of-guardian-totem.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/23996036/pexels-photo-23996036/free-photo-of-whispering-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  }
};



const ShowCaseHero = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Ensure the ScrollSmoother is attached to a valid element
    if (containerRef.current) {
      const smoother = ScrollSmoother.create({
        smooth: 2, // Adjusted to match your settings
        speed: 1,
        effects: true,
        smoothTouch: 0.1,
        content: containerRef.current // Use the current value of the ref
      });

      // Logo and paths animations
      let paths = gsap.utils.toArray("#logo-scroll path, #logo-smoother path, #logo-mouse");
      let distPaths = gsap.utils.distribute({ base: -300, amount: 600 });

      let heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          scrub: 1,
          start: "bottom 95%",
          end: "bottom center"
        }
      });

      heroTl.to(paths, { x: distPaths })
            .to([...paths,], { opacity: 0 }, 0);

      // Grid animations
      let gridTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".grid-section",
          scrub: 1,
          start: "top center",
          end: "bottom+=10% bottom",
        },
        defaults: {
          ease: "power1.inOut"
        }
      });

      gridTl.add("start")
            .from(".grid-layout", { ease: "power1", scale: 3 }, "start")
            .from(".column-1 .grid-image", { duration: 0.6, xPercent: i => -((i + 1) * 40 + i * 100), yPercent: i => (i + 1) * 40 + i * 100 }, "start")
            .from(".column-3 .grid-image", { duration: 0.6, xPercent: i => (i + 1) * 40 + i * 100, yPercent: i => (i + 1) * 40 + i * 100 }, "start");

      // Parallax animation
      gsap.from(".parallax-section2", {
        scale: 1 / 3,
        scrollTrigger: {
          trigger: ".parallax-section2",
          scrub: 1
        }
      });

      // Pinning animations
      let pinSection = document.querySelector(".pin-section");
      let pinContent1 = document.querySelector(".pin-content-1");
      let pinContent2 = document.querySelector(".pin-content-2");

      let pinTl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          trigger: pinSection,
          scrub: true,
          start: "top top",
          end: () => `$+=${pinContent1.offsetWidth}`,
          invalidateOnRefresh: true
        }
      });

      pinTl.fromTo(".pin-content-1", { x: () => document.body.clientWidth * 0.9 }, { x: () => -(pinContent1.offsetWidth), ease: "none" }, 0)
           .fromTo(".pin-content-2", { x: () => -pinContent2.offsetWidth + document.body.clientWidth * 0.1 }, { x: () => document.body.clientWidth, ease: "none" }, 0);
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div id="smooth-content">

        <section className="hero-section">
          <img className="parallax-image" src={images.parallax[0]} data-speed="1" alt=""></img>
        </section>

        <div className="grid-section">
          <div className="grid-layout">
            <div className="column column-1" data-speed="1.5">
              <div className="column-content">
                <div className="grid-image">
                  <img src={images.grid.column1[0]} alt=""></img>
                </div>
                <div className="grid-image">
                  <img src={images.grid.column1[1]} alt=""></img>
                </div>
                <div className="grid-image">
                  <img src={images.grid.column1[2]} alt=""></img>
                </div>
              </div>
            </div>
            <div className="column column-2" data-speed="1.01">
              <div className="column-content">
                <div className="grid-image">
                  <img src={images.grid.column2[0]} alt=""></img>
                </div>
                <div className="grid-image">
                  <img src={images.grid.column2[1]} alt=""></img>
                </div>
                <div className="grid-image">
                  <img src={images.grid.column2[2]} alt=""></img>
                </div>
              </div>
            </div>
            <div className="column column-3" data-speed="1.1">
              <div className="column-content">
                <div className="grid-image">
                  <img src={images.grid.column3[0]} alt=""></img>
                </div>
                <div className="grid-image">
                  <img src={images.grid.column3[1]} alt=""></img>
                </div>
                <div className="grid-image">
                  <img src={images.grid.column3[2]} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer"></div>

        <section className="parallax-section2">
          <img className="parallax-image" src={images.parallax[0]} data-speed="1" alt=""></img>
        </section>

        <div className="spacer"></div>

        <div className="pin-section">
          <div className="pin-content pin-content-1">
            <div className="pin-box">
              <img className="pin-image" src={images.pin.pin1[0]} alt=""></img>
            </div>
            <div className="pin-box">
              <img className="pin-image" src={images.pin.pin1[1]} alt=""></img>
            </div>
            <div className="pin-box">
              <img className="pin-image" src={images.pin.pin1[2]} alt=""></img>
            </div>
          </div>
          <div className="pin-content pin-content-2">
            <div className="pin-box">
              <img className="pin-image" src={images.pin.pin2[0]} alt=""></img>
            </div>
            <div className="pin-box">
              <img className="pin-image" src={images.pin.pin2[1]} alt=""></img>
            </div>
            <div className="pin-box">
              <img className="pin-image" src={images.pin.pin2[2]} alt=""></img>
            </div>
          </div>
        </div>

        <div className="spacer">Always Ready To Create More</div>
      </div>
    </div>
  );
};

export default ShowCaseHero;