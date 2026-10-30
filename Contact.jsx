import { Link } from "react-router-dom";
function Contact(){

      return(
        <>
     

<nav className="bg-black text-white px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-5 relative">

  <Link
    to="/home"
    className="text-3xl font-black italic text-orange-500 tracking-wide"
  >
   CONTACT
  </Link>

  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 font-bold text-base md:absolute md:left-1/2 md:-translate-x-1/2">
    <Link to="/home" className="hover:text-orange-500">
      Home
    </Link>

    <Link to="/about" className="hover:text-orange-500">
      About
    </Link>

    <Link to="/products" className="hover:text-orange-500">
      Products
    </Link>

    <Link to="/contact" className="hover:text-orange-500">
      Contact
    </Link>
  </div>

</nav>

        
        <div className="bg-lime-300 text-center text-2xl font-bold p-4 hover:bg-green-600
                      transition-colors duration-300">
        GET UP TO 30% OFF! BUY 4, GET EXTRA 40% OFF.
      </div>
        
    <section className="bg-orange-500 px-8 py-12 text-center">
        <p className="font-bold tracking-widest
                        hover:tracking-[0.2em]
                        transition-all duration-500 font-bold ">GET IN TOUCH</p>

        <h1 className="text-5xl md:text-7xl font-black italic mt-4  hover:scale-105 transition-transform duration-500">
          LET'S TALK.
          <br />
          WE'RE HERE.
        </h1>

        <p className="text-lg font-bold mt-5">
          Have a question about your favourite shoes? We'd love to hear from you.
        </p>
      </section>
        
            <section className="px-6 md:px-12 py-12   ">

       
        <div className="bg-gray-100 ml-100 mr-100">
          <h2 className="text-3xl font-black italic">
            SEND US A <span className="text-orange-500">MESSAGE.</span>
          </h2>

          <form className="mt-6">
            <label className="block font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-2 border-black p-3 mb-5"
              required
            />

            <label className="block font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-black p-3 mb-5"
              required
            />

            <label className="block font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="How can we help?"
              className="w-full border-2 border-black p-3 mb-5"
              required
            />

            <label className="block font-bold mb-2">
              Your Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border-2 border-black p-3 mb-5"
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white p-4 font-bold"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

         <div>
          <h2 className="text-3xl font-black italic">
            CONTACT <span className="text-orange-500">INFO.</span>
          </h2>

          <p className="text-gray-600 mt-4">
            Need help with a product, order, or size? Reach out to our team.
          </p>

          <div className="bg-lime-200 p-6 mt-6 text-center">
            <h3 className="text-xl font-black">EMAIL</h3>
            <p className="mt-2">support@shoespot.com</p>
          </div>

          <div className="bg-pink-200 p-6 mt-5 text-center">
            <h3 className="text-xl font-black">PHONE</h3>
            <p className="mt-2">+91 12345 67890</p>
          </div>

          <div className="bg-orange-200 p-6 mt-5 text-center">
            <h3 className="text-xl font-black">WORKING HOURS</h3>
            <p className="mt-2">Monday - Sunday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
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
    )
}
export default Contact;