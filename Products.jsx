
import { useState } from "react";
import { Link } from "react-router-dom";

import shoe10 from "../assets/shoe10.jpg";
import shoe11 from "../assets/shoe11.jpg";
import shoe12 from "../assets/shoe12.jpg";
import shoe13 from "../assets/shoe13.jpg";
import shoe14 from "../assets/shoe14.jpg";
import shoe15 from "../assets/shoe15.jpg";
import shoe16 from "../assets/shoe16.jpg";
import shoe17 from "../assets/shoe17.jpg";
import shoe18 from "../assets/shoe18.jpg";
import shoe19 from "../assets/shoe19.jpg";
import shoe20 from "../assets/shoe20.jpg";
import shoe21 from "../assets/shoe21.jpg";
import shoe22 from "../assets/shoe22.jpg";
import s23 from "../assets/s23.jpg";
import s24 from "../assets/s24.jpg";
import s25 from "../assets/s25.jpg";
import s26 from "../assets/s26.jpg";
import s27 from "../assets/s27.jpg";
import s28 from "../assets/s28.jpg";
import s29 from "../assets/s29.jpg";
import s30 from "../assets/s30.jpg";
import s31 from "../assets/s31.jpg";
import s32 from "../assets/s32.jpg";
import s33 from "../assets/s33.jpg";
import s34 from "../assets/s34.jpg";
import s35 from "../assets/s35.jpg";
import s36 from "../assets/s36.jpg";
import s37 from "../assets/s37.jpg";


function Products() {
  const [category, setCategory] = useState("ALL");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const men = [
    { name: "Air Runner", price: 4999, image: shoe10 },
    { name: "Customized", price: 4299, image: shoe14 },
    { name: "Quality Pro", price: 4599, image: shoe22 },
    { name: "Active Trainer", price: 3999, image: shoe11 },
    { name: "Casual", price: 4999, image: s23 },
    { name: "Power Sprint", price: 4299, image: s24 },
    { name: "Sporty", price: 4599, image: s25 },
    { name: "Daily wear", price: 3999, image: s26 },
    { name: "Classic", price: 3999, image: s27 },
  ];

  const women = [
    { name: "Street Sneaker", price: 3499, image: shoe18 },
    { name: "Urban Style", price: 3899, image: shoe16 },
    { name: "Flex Comfort", price: 3299, image: shoe17 },
    { name: "City Walk", price: 3699, image: shoe13 },
     { name: "Power Pro", price: 4299, image: s28 },
    { name: "Speed Pro", price: 4599, image: s29 },
    { name: "Shoe Heels", price: 3999, image: s30 },
    { name: "Casuals", price: 3999, image: s31 },
  ];

  const kids = [
    { name: "Sport Classic", price: 1999, image: shoe21 },
    { name: "Mini Runner", price: 1499, image: shoe19 },
    { name: "Junior Sport", price: 1799, image: shoe15 },
    { name: "Kids Dash", price: 1599, image: shoe20 },
     { name: "City Walk", price: 3699, image: s32 },
     { name: "Mini Pro", price: 4299, image: s33 },
    { name: "Speed Pro Mini", price: 4599, image: s34 },
    { name: "Kids Dash", price: 3999, image: s35 },
    { name: "Casual Kids", price: 3999, image: s36 },
     { name: "Mini Casuals", price: 3999, image: s37 },
  ];

  const allShoes = [
    ...men.map((shoe) => ({ ...shoe, category: "MEN" })),
    ...women.map((shoe) => ({ ...shoe, category: "WOMEN" })),
    ...kids.map((shoe) => ({ ...shoe, category: "KIDS" })),
  ];

  const filteredShoes = allShoes.filter((shoe) => {
    const matchesCategory =
      category === "ALL" || shoe.category === category;

    const matchesSearch = shoe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFavorites =
      !showFavorites || favorites.includes(shoe.name);

    return matchesCategory && matchesSearch && matchesFavorites;
  });

  function toggleFavorite(name) {
    setFavorites((previous) =>
      previous.includes(name)
        ? previous.filter((item) => item !== name)
        : [...previous, name]
    );
  }

  function addToCart(shoe) {
    setCart((previous) => [...previous, shoe]);
  }

  function showShoes(title, shoes, color) {
    if (shoes.length === 0) return null;

    return (
      <section className="px-6 md:px-10 py-8" key={title}>
        <h2 className="text-3xl md:text-4xl font-black italic mb-7">
          {title}
          <span className="text-orange-500">.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shoes.map((shoe) => {
            const isFavorite = favorites.includes(shoe.name);
            const cartCount = cart.filter(
              (item) => item.name === shoe.name
            ).length;

            return (
              <div
                key={shoe.name}
                className={`${color} group relative p-5 rounded-xl
                            overflow-hidden border border-transparent
                            hover:border-orange-500 hover:-translate-y-2
                            hover:shadow-2xl hover:shadow-orange-500/20
                            transition-all duration-300`}
              >
              
                <button
                  type="button"
                  onClick={() => toggleFavorite(shoe.name)}
                  aria-label={
                    isFavorite
                      ? `Remove ${shoe.name} from favourites`
                      : `Add ${shoe.name} to favourites`
                  }
                  aria-pressed={isFavorite}
                  className={`absolute top-4 right-4 z-20 rounded-full
                              w-11 h-11 flex items-center justify-center
                              text-2xl shadow-md transition-all duration-300
                              hover:scale-110 ${
                                isFavorite
                                  ? "bg-red-500 text-white"
                                  : "bg-white text-gray-700 hover:text-red-500"
                              }`}
                >
                  {isFavorite ? "♥" : "♡"}
                </button>

               
                <div className="overflow-hidden rounded-lg bg-white">
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full h-56 object-contain
                               transition-transform duration-500 ease-out
                               group-hover:scale-110"
                  />
                </div>

              
                <p className="text-xs font-bold text-gray-500 uppercase
                              tracking-widest mt-4">
                  {shoe.category}'S COLLECTION
                </p>

                <h3 className="text-xl font-black mt-2
                               group-hover:text-orange-600
                               transition-colors duration-300">
                  {shoe.name}
                </h3>

                <p className="font-black text-xl mt-2">
                  ₹{shoe.price.toLocaleString("en-IN")}
                </p>

              
                <button
                  type="button"
                  onClick={() => addToCart(shoe)}
                  className="w-full bg-black text-white py-3 mt-4
                             font-bold hover:bg-orange-500 hover:text-black
                             transition-all duration-300"
                >
                  {cartCount > 0
                    ? `ADD AGAIN (${cartCount} IN CART)`
                    : "ADD TO CART"}
                </button>

                {cartCount > 0 && (
                  <p className="text-green-700 font-bold text-sm mt-2">
                    ✓ Added to cart
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white min-h-screen text-black">

    
      <nav className="bg-black text-white px-6 md:px-12 py-5
                      flex flex-col md:flex-row items-center
                      justify-between gap-5 relative">

        <Link
          to="/home"
          className="text-3xl font-black italic text-orange-500
                     tracking-wide hover:scale-105
                     transition-transform duration-300"
        >
          PRODUCTS<span className="text-white">.</span>
        </Link>

        <div className="flex flex-wrap justify-center items-center gap-6
                        md:gap-10 font-bold text-base
                        md:absolute md:left-1/2 md:-translate-x-1/2">

          <Link to="/home"
            className="hover:text-orange-500 transition-colors duration-300">
            Home
          </Link>

          <Link to="/about"
            className="hover:text-orange-500 transition-colors duration-300">
            About
          </Link>

          <Link to="/products"
            className="text-orange-500 border-b-2 border-orange-500 pb-1">
            Products
          </Link>

          <Link to="/contact"
            className="hover:text-orange-500 transition-colors duration-300">
            Contact
          </Link>
        </div>

    
        <div className="bg-orange-500 text-black px-4 py-2
                        font-black rounded-lg">
          🛒 CART: {cart.length}
        </div>
      </nav>

   
      <div className="bg-lime-300 text-center text-lg md:text-2xl
                      font-bold p-4">
        GET UP TO 30% OFF! BUY 4, GET EXTRA 40% OFF.
      </div>

   
      <section className="bg-orange-500 px-8 py-12 text-center overflow-hidden">
        <p className="font-bold tracking-widest">
          SHOE SPOT COLLECTION
        </p>

        <h1 className="text-5xl md:text-7xl font-black italic mt-4
                       hover:scale-105 transition-transform duration-500">
          FIND YOUR
          <br />
          PERFECT PAIR.
        </h1>

        <p className="font-semibold text-lg mt-4">
          Sports. Style. Comfort.
        </p>
      </section>

    
      <section className="px-6 md:px-10 py-8 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <label
            htmlFor="shoe-search"
            className="block text-xl font-black mb-3"
          >
            FIND YOUR NEXT PAIR
          </label>

          <input
            id="shoe-search"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search shoes by name..."
            className="w-full p-4 bg-white border-2 border-gray-300
                       rounded-lg outline-none
                       focus:border-orange-500
                       transition-colors duration-300"
          />
        </div>
      </section>

     
      <section className="px-6 md:px-10 py-6">
        <div className="flex flex-wrap justify-center gap-3">

          {["ALL", "MEN", "WOMEN", "KIDS"].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => {
                setCategory(item);
                setShowFavorites(false);
              }}
              className={`px-6 py-3 font-black rounded-lg
                          transition-all duration-300 hover:-translate-y-1
                          ${
                            category === item && !showFavorites
                              ? "bg-orange-500 text-black shadow-lg"
                              : "bg-black text-white hover:bg-orange-500 hover:text-black"
                          }`}
            >
              {item === "ALL" ? "ALL SHOES" : item}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setShowFavorites((previous) => !previous)}
            className={`px-6 py-3 font-black rounded-lg
                        transition-all duration-300 hover:-translate-y-1
                        ${
                          showFavorites
                            ? "bg-red-500 text-white shadow-lg"
                            : "bg-gray-200 text-black hover:bg-red-100"
                        }`}
          >
            ♥ FAVOURITES ({favorites.length})
          </button>
        </div>
      </section>

      {/* ACTIVE FILTER MESSAGE */}
      <div className="px-6 md:px-10 pt-2">
        <p className="text-gray-600 font-semibold">
          Showing {filteredShoes.length} shoe
          {filteredShoes.length !== 1 ? "s" : ""}
          {showFavorites ? " in your favourites" : ""}
        </p>
      </div>

     
      {showFavorites ? (
        showShoes(
          "YOUR FAVOURITES",
          filteredShoes,
          "bg-red-50"
        )
      ) : category === "ALL" ? (
        <>
          {showShoes(
            "MEN'S SHOES",
            filteredShoes.filter((shoe) => shoe.category === "MEN"),
            "bg-gray-100"
          )}

          {showShoes(
            "WOMEN'S SHOES",
            filteredShoes.filter((shoe) => shoe.category === "WOMEN"),
            "bg-pink-100"
          )}

          {showShoes(
            "KIDS' SHOES",
            filteredShoes.filter((shoe) => shoe.category === "KIDS"),
            "bg-lime-100"
          )}
        </>
      ) : (
        showShoes(
          `${category}'S SHOES`,
          filteredShoes,
          category === "MEN"
            ? "bg-gray-100"
            : category === "WOMEN"
            ? "bg-pink-100"
            : "bg-lime-100"
        )
      )}

      {filteredShoes.length === 0 && (
        <div className="text-center px-6 py-16">
          <h2 className="text-3xl font-black">
            NO SHOES FOUND
          </h2>

          <p className="text-gray-500 mt-3">
            Try another search or explore a different category.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setCategory("ALL");
              setShowFavorites(false);
            }}
            className="bg-orange-500 text-black px-6 py-3 mt-6
                       font-black hover:bg-black hover:text-white
                       transition-colors duration-300"
          >
            SHOW ALL SHOES
          </button>
        </div>
      )}

      {/* CART SUMMARY */}
      <section className="bg-orange-500 px-6 md:px-10 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black italic">
            YOUR CART
          </h2>

          {cart.length === 0 ? (
            <p className="mt-4 font-semibold">
              Your cart is empty. Add your favourite shoes to get started!
            </p>
          ) : (
            <>
              <div className="mt-5 space-y-3">
                {allShoes
                  .filter((shoe) =>
                    cart.some((item) => item.name === shoe.name)
                  )
                  .map((shoe) => {
                    const quantity = cart.filter(
                      (item) => item.name === shoe.name
                    ).length;

                    return (
                      <div
                        key={shoe.name}
                        className="bg-white p-4 rounded-lg flex
                                   flex-wrap justify-between items-center gap-3"
                      >
                        <div>
                          <p className="font-black">{shoe.name}</p>
                          <p className="text-sm text-gray-600">
                            ₹{shoe.price.toLocaleString("en-IN")} × {quantity}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <p className="font-black">
                            ₹{(shoe.price * quantity).toLocaleString("en-IN")}
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              setCart((previous) => {
                                const index = previous.findIndex(
                                  (item) => item.name === shoe.name
                                );

                                if (index === -1) return previous;

                                return previous.filter(
                                  (_, i) => i !== index
                                );
                              })
                            }
                            className="bg-black text-white px-3 py-2
                                       font-bold hover:bg-red-500
                                       transition-colors duration-300"
                          >
                            − Remove 1
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="flex flex-wrap justify-between items-center
                              gap-4 mt-6 border-t-2 border-black pt-5">
                <p className="text-2xl font-black">
                  Total: ₹{cart.reduce(
                    (total, shoe) => total + shoe.price,
                    0
                  ).toLocaleString("en-IN")}
                </p>

                <button
                  type="button"
                  onClick={() => setCart([])}
                  className="bg-black text-white px-5 py-3 font-bold
                             hover:bg-white hover:text-black
                             transition-colors duration-300"
                >
                  CLEAR CART
                </button>
              </div>
            </>
          )}
        </div>
      </section>

    
      <footer className="bg-black text-white text-center p-6">
        <h2 className="text-2xl font-black italic text-orange-500
                       hover:scale-110 inline-block
                       transition-transform duration-300">
          SHOE SPOT.
        </h2>

        <p className="mt-2">
          Find your style. Own every step.
        </p>

        <p className="text-gray-400 mt-2">
          © 2026 Shoe Spot. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Products;
