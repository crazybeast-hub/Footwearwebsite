import Antigravity from '../components/Antigravity';

import { Link } from "react-router-dom";
import shoe5 from "../assets/shoe5.jpg";
import shoe6 from "../assets/shoe6.jpg";

function About() {
  return (
    <div className="min-h-screen bg-white text-black">

    
      <nav className="bg-black text-white px-6 md:px-12 py-5
                      flex flex-col md:flex-row items-center
                      justify-between gap-5 relative">

        <Link
          to="/home"
          className="text-3xl font-black italic text-orange-500
                     tracking-wide hover:scale-105
                     transition-transform duration-300"
        >
          SHOE SPOT<span className="text-white">.</span>
        </Link>

        <div className="flex flex-wrap justify-center items-center gap-6
                        md:gap-10 font-bold text-base
                        md:absolute md:left-1/2 md:-translate-x-1/2">

          <Link to="/home"
            className="hover:text-orange-500 hover:-translate-y-1
                       transition-all duration-300">
            Home
          </Link>

          <Link to="/about"
            className="text-orange-500 border-b-2 border-orange-500 pb-1">
            About
          </Link>

          <Link to="/products"
            className="hover:text-orange-500 hover:-translate-y-1
                       transition-all duration-300">
            Products
          </Link>

          <Link to="/contact"
            className="hover:text-orange-500 hover:-translate-y-1
                       transition-all duration-300">
            Contact
          </Link>
        </div>
      </nav>

    
      <div className="bg-lime-300 text-center text-lg md:text-2xl
                      font-bold p-4 hover:bg-orange-200
                      transition-colors duration-300">
        GET UP TO 30% OFF! BUY 4, GET EXTRA 40% OFF.
      </div>

     
<section className="relative bg-black text-white text-center
  px-5 sm:px-8 py-16 sm:py-20 md:py-28
  overflow-hidden min-h-[400px] flex items-center justify-center">

 
  <div className="absolute inset-0 z-0">
    <Antigravity />
  </div>
        <p className="font-bold tracking-widest
                      hover:tracking-[0.2em]
                      transition-all duration-500">
          WELCOME TO SHOE SPOT
        </p>

        <h1 className="text-4xl md:text-7xl font-black italic mt-4
                       tracking-tight hover:scale-105
                       transition-transform duration-500">
          GET TO KNOW US.
        </h1>

        <p className="text-lg md:text-xl font-semibold mt-5">
          Discover your style. Find your perfect pair.
        </p>

        
      </section>

    
      <section className="bg-red-900 text-white px-8 md:px-14 py-14">
        <p className="text-orange-400 font-black uppercase
                      tracking-widest text-sm">
          Our Story
        </p>

        <h2 className="text-3xl md:text-5xl font-black italic mt-3
                       hover:text-orange-400
                       transition-colors duration-300">
          BETTER IS ALWAYS POSSIBLE.
        </h2>

        <p className="text-lg mt-6 leading-8">
          We believe that better is always possible. At Shoe Spot,
          we bring together sporty designs, everyday comfort, and
          modern footwear styles for everyone.
        </p>

        <p className="text-lg mt-5 leading-8">
          Our passion goes beyond shoes. We want to help people
          express themselves, stay active, and feel confident in
          every step they take.
        </p>

        <p className="text-lg mt-5 leading-8">
          We continuously explore new styles and ideas to make
          finding your next favourite pair simple and enjoyable.
        </p>
      </section>

   
      <section className="px-8 md:px-14 py-14">

        <p className="text-orange-500 font-black uppercase
                      tracking-widest text-sm">
          What Drives Us
        </p>

        <h2 className="text-4xl md:text-5xl font-black italic mb-9 mt-2">
          WHAT WE <span className="text-orange-500">BELIEVE.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="group bg-orange-500 p-7 rounded-xl
                          hover:-translate-y-3 hover:shadow-2xl
                          hover:shadow-orange-500/30
                          transition-all duration-300">
            <h3 className="text-2xl font-black
                           group-hover:translate-x-2
                           transition-transform duration-300">
              COMFORT
            </h3>

            <p className="mt-3 font-medium leading-7">
              Everyday comfort for every step of your journey.
            </p>

            <p className="text-4xl font-black mt-6
                          group-hover:scale-110 origin-left
                          transition-transform duration-300">
              01
            </p>
          </div>

          <div className="group bg-lime-300 p-7 rounded-xl
                          hover:-translate-y-3 hover:shadow-2xl
                          hover:shadow-lime-500/30
                          transition-all duration-300">
            <h3 className="text-2xl font-black
                           group-hover:translate-x-2
                           transition-transform duration-300">
              STYLE
            </h3>

            <p className="mt-3 font-medium leading-7">
              Sporty designs that help you express your style.
            </p>

            <p className="text-4xl font-black mt-6
                          group-hover:scale-110 origin-left
                          transition-transform duration-300">
              02
            </p>
          </div>

          <div className="group bg-pink-300 p-7 rounded-xl
                          hover:-translate-y-3 hover:shadow-2xl
                          hover:shadow-pink-500/30
                          transition-all duration-300">
            <h3 className="text-2xl font-black
                           group-hover:translate-x-2
                           transition-transform duration-300">
              MOVEMENT
            </h3>

            <p className="mt-3 font-medium leading-7">
              Footwear for active days and everyday adventures.
            </p>

            <p className="text-4xl font-black mt-6
                          group-hover:scale-110 origin-left
                          transition-transform duration-300">
              03
            </p>
          </div>

        </div>
      </section>

      
      <section className="bg-gray-100 px-8 md:px-14 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10
                        items-center">

          <div className="group overflow-hidden bg-white rounded-2xl
                          hover:shadow-2xl hover:shadow-orange-500/20
                          transition-all duration-300">

            <img
              src={shoe5}
              alt="Shoe Spot footwear collection"
              className="w-full h-80 md:h-96 object-contain p-5
                         group-hover:scale-110
                         transition-transform duration-700 ease-out"
            />
          </div>

          <div className="flex flex-col justify-center">

            <p className="text-orange-500 font-black uppercase
                          tracking-widest text-sm">
              Find Your Fit
            </p>

            <h2 className="text-4xl md:text-6xl font-black italic mt-3
                           hover:text-orange-500
                           transition-colors duration-300">
              YOUR STYLE.
              <br />
              YOUR STEPS.
            </h2>

            <p className="text-lg mt-5 leading-8">
              Explore our collection and discover shoes that
              suit your everyday style.
            </p>

          </div>
        </div>

      
        <div className="group mt-12 overflow-hidden rounded-2xl
                        bg-white hover:shadow-2xl
                        hover:shadow-orange-500/20
                        transition-all duration-300">

          <img
            src={shoe6}
            alt="Shoe Spot collection"
            className="w-full max-h-96 object-contain p-4
                       group-hover:scale-105
                       transition-transform duration-700 ease-out"
          />
        </div>
      </section>

   
      <section className="bg-orange-500 px-8 md:px-14 py-14
                          flex flex-col md:flex-row items-center
                          justify-between gap-8">

        <div>
          <p className="font-black uppercase tracking-widest text-sm">
            Make Every Step Count
          </p>

          <h2 className="text-4xl md:text-6xl font-black italic
                         tracking-tight mt-3">
            FIND YOUR
            <br />
            NEXT FAVOURITE.
          </h2>
        </div>

      
      </section>

  
      <footer className="bg-black text-white text-center p-6">
        <h2 className="text-2xl font-black italic text-orange-500
                       hover:scale-110 inline-block
                       transition-transform duration-300">
          SHOE SPOT.
        </h2>

        <p className="mt-2">Find your style. Own every step.</p>

        <p className="text-gray-400 mt-2">
          © 2026 Shoe Spot. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default About;
