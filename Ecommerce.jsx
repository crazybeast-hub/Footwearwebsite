import Antigravity from '../components/Antigravity';
import './Ecommerce.css';
import { Link } from "react-router-dom";
import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";
import shoe5 from "../assets/shoe5.jpg";
import shoe6 from "../assets/shoe6.jpg";
import shoe7 from "../assets/shoe7.jpg";
import shoe8 from "../assets/shoe8.jpg";
import shoe9 from "../assets/shoe9.jpg";

function Ecommerce() {
  return (
    <>
     
      <nav className="bg-black text-white px-6 md:px-12 py-5
                      flex flex-col md:flex-row items-center
                      justify-between gap-5 relative nav-bar">


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
                        md:absolute md:left-1/2 md:-translate-x-1/2 link-bar">

          <Link to="/home"
            className="hover:text-orange-500 hover:-translate-y-1
                       transition-all duration-300">
            Home
          </Link>

          <Link to="/about"
            className="hover:text-orange-500 hover:-translate-y-1
                       transition-all duration-300">
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

     
      <div className="text-xl md:text-3xl font-bold bg-red-200
                      text-center p-3 hover:bg-yellow-500
                      transition-colors duration-300 off-banner">
        Get Up to 30% Off*. Buy 4, get extra 40% Off* with code STACK5.
        Ends 11 November.
      </div>

    
      <section className="relative bg-black text-white px-8 py-12 text-center overflow-hidden min-h-[420px] flex items-center justify-center">


  <div className="absolute inset-0 z-0">
    <Antigravity
      count={300}
      color="#f97316"
      autoAnimate={true}
    />
  </div>

  <div className="relative z-10 text-3xl">
    <p className="font-bold tracking-widest">
      SHOE SPOT COLLECTION
    </p>

    <h1 className="text-5xl md:text-6xl font-black italic mt-5">
      RUN YOUR
      <br />
      OWN GAME.
    </h1>

    <p className="text-lg font-semibold mt-5">
      Find your style. Make every step count.
    </p>
  </div>

</section>

      
      <section className="px-8 py-12">
        <h2 className="text-4xl font-black italic mb-8">
          OUR <span className="text-orange-500">SNEAKERS.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

         
          <div className="group bg-gray-100 p-5 overflow-hidden
                          rounded-xl border border-transparent
                          hover:border-orange-500 hover:-translate-y-3
                          hover:shadow-2xl hover:shadow-orange-500/20
                          transition-all duration-300">

            <div className="relative overflow-hidden bg-white rounded-lg">
              <div className="absolute inset-0 bg-orange-500/0
                              group-hover:bg-orange-500/10
                              transition-colors duration-500 z-10
                              pointer-events-none" />

              <img
                src={shoe5}
                alt="Air Runner shoe"
                className="w-full h-72 object-contain
                           transition-transform duration-500 ease-out
                           group-hover:scale-110"
              />
            </div>

            <h3 className="text-2xl font-black mt-4
                           group-hover:text-orange-500
                           transition-colors duration-300">
              AIR RUNNER
            </h3>

            <p className="text-lg mt-2 font-bold">₹4,999</p>

            <Link
              to="/products"
              className="inline-block bg-black text-white px-6 py-3 mt-4
                         font-bold hover:bg-orange-500 hover:text-black
                         hover:scale-105 transition-all duration-300"
            >
              VIEW PRODUCT
            </Link>
          </div>

  
          <div className="group bg-lime-200 p-5 overflow-hidden
                          rounded-xl border border-transparent
                          hover:border-orange-500 hover:-translate-y-3
                          hover:shadow-2xl hover:shadow-lime-500/30
                          transition-all duration-300">

            <div className="relative overflow-hidden bg-white rounded-lg">
              <div className="absolute inset-0 bg-orange-500/0
                              group-hover:bg-orange-500/10
                              transition-colors duration-500 z-10
                              pointer-events-none" />

              <img
                src={shoe2}
                alt="Street sneaker"
                className="w-full h-72 object-contain
                           transition-transform duration-500 ease-out
                           group-hover:scale-110"
              />
            </div>

            <h3 className="text-2xl font-black mt-4
                           group-hover:text-orange-600
                           transition-colors duration-300">
              STREET SNEAKER
            </h3>

            <p className="text-lg mt-2 font-bold">₹3,499</p>

            <Link
              to="/products"
              className="inline-block bg-black text-white px-6 py-3 mt-4
                         font-bold hover:bg-orange-500 hover:text-black
                         hover:scale-105 transition-all duration-300"
            >
              VIEW PRODUCT
            </Link>
          </div>

          
          <div className="group bg-pink-200 p-5 overflow-hidden
                          rounded-xl border border-transparent
                          hover:border-orange-500 hover:-translate-y-3
                          hover:shadow-2xl hover:shadow-pink-500/30
                          transition-all duration-300">

            <div className="relative overflow-hidden bg-white rounded-lg">
              <div className="absolute inset-0 bg-orange-500/0
                              group-hover:bg-orange-500/10
                              transition-colors duration-500 z-10
                              pointer-events-none" />

              <img
                src={shoe3}
                alt="Sport classic shoe"
                className="w-full h-72 object-contain
                           transition-transform duration-500 ease-out
                           group-hover:scale-110"
              />
            </div>

            <h3 className="text-2xl font-black mt-4
                           group-hover:text-orange-600
                           transition-colors duration-300">
              SPORT CLASSIC
            </h3>

            <p className="text-lg mt-2 font-bold">₹3,999</p>

            <Link
              to="/products"
              className="inline-block bg-black text-white px-6 py-3 mt-4
                         font-bold hover:bg-orange-500 hover:text-black
                         hover:scale-105 transition-all duration-300"
            >
              VIEW PRODUCT
            </Link>
          </div>
        </div>
      </section>

     
      <section className="px-8 py-12 bg-white">
        <h2 className="text-4xl font-black italic mb-8">
          SHOP BY <span className="text-orange-500">SPORT.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

         
          <div className="group bg-orange-500 p-6 rounded-xl
                          overflow-hidden hover:-translate-y-2
                          hover:shadow-2xl transition-all duration-300">

            <div className="overflow-hidden rounded-lg">
              <img
                src={shoe7}
                alt="Running shoes"
                className="w-full h-72 object-contain
                           transition-transform duration-700
                           group-hover:scale-110"
              />
            </div>

            <h3 className="text-3xl font-black italic mt-4
                           group-hover:translate-x-2
                           transition-transform duration-300">
              Football
            </h3>

            <p className="font-semibold mt-2">Feel The Ball.</p>

            <Link
              to="/products"
              className="inline-block bg-black text-white px-6 py-3 mt-4
                         font-bold hover:bg-white hover:text-black
                         hover:scale-105 transition-all duration-300"
            >
              EXPLORE
            </Link>
          </div>

         
          <div className="group bg-lime-300 p-6 rounded-xl
                          overflow-hidden hover:-translate-y-2
                          hover:shadow-2xl transition-all duration-300">

            <div className="overflow-hidden rounded-lg">
              <img
                src={shoe8}
                alt="Training shoes"
                className="w-full h-72 object-contain
                           transition-transform duration-700
                           group-hover:scale-110"
              />
            </div>

            <h3 className="text-3xl font-black italic mt-4
                           group-hover:translate-x-2
                           transition-transform duration-300">
              Running
            </h3>

            <p className="font-semibold mt-2">
              Push beyond your limits.
            </p>

            <Link
              to="/products"
              className="inline-block bg-black text-white px-6 py-3 mt-4
                         font-bold hover:bg-white hover:text-black
                         hover:scale-105 transition-all duration-300"
            >
              EXPLORE
            </Link>
          </div>

        
          <div className="group bg-pink-300 p-6 rounded-xl
                          overflow-hidden hover:-translate-y-2
                          hover:shadow-2xl transition-all duration-300">

            <div className="overflow-hidden rounded-lg">
              <img
                src={shoe9}
                alt="Lifestyle sneakers"
                className="w-full h-72 object-contain
                           transition-transform duration-700
                           group-hover:scale-110"
              />
            </div>

            <h3 className="text-3xl font-black italic mt-4
                           group-hover:translate-x-2
                           transition-transform duration-300">
              Basketball
            </h3>

            <p className="font-semibold mt-2">
              Jump High Towards the Goal
            </p>

            <Link
              to="/products"
              className="inline-block bg-black text-white px-6 py-3 mt-4
                         font-bold hover:bg-white hover:text-black
                         hover:scale-105 transition-all duration-300"
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </section>

     
      <section className="bg-orange-500 text-black px-6 md:px-12 py-14
                          overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row
                        items-center justify-between gap-8">

          <div>
            <p className="font-black uppercase tracking-widest text-sm">
              Your next pair is calling
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase
                           italic tracking-tighter mt-3
                           hover:translate-x-2 transition-transform duration-300">
              Don't Follow.
              <br />
              Set The Pace.
            </h2>
          </div>

         
        </div>
      </section>

      
      <section className="overflow-hidden">
        <img
          src={shoe6}
          alt="Shoe Spot offer"
          className="w-full transition-transform duration-700
                     hover:scale-105"
        />
      </section>

     
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <div className="overflow-hidden">
          <img
            src={shoe2}
            alt="Sneaker collection"
            className="w-full h-64 object-cover bg-gray-100
                       hover:scale-110
                       transition-transform duration-700"
          />
        </div>

        <div className="overflow-hidden">
          <img
            src={shoe5}
            alt="Streetwear sneakers"
            className="w-full h-64 object-cover bg-gray-200
                       hover:scale-110
                       transition-transform duration-700"
          />
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
    </>
  );
}

export default Ecommerce;
