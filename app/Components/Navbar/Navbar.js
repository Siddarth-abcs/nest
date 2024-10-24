"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  // On component mount, set the default active link to "Home"
  useEffect(() => {
    setActiveLink("Home");
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="lg:w-5/6 m-auto">
      <div className=" navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Order Details</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hidden md:flex">daisyUI</a>
        </div>

        <div className="navbar-center md:hidden">
          <a className="btn btn-ghost text-xl ">daisyUI</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="flex space-x-6 text-gray-500 text-lg font-normal">
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Home")}
                className={`${
                  activeLink === "Home" ? "text-black" : "hover:text-black"
                } transition duration-300 ease-in-out`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Shop")}
                className={`${
                  activeLink === "Shop" ? "text-black" : "hover:text-black"
                } transition duration-300 ease-in-out`}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Order Details")}
                className={`${
                  activeLink === "Order Details"
                    ? "text-black"
                    : "hover:text-black"
                } transition duration-300 ease-in-out`}
              >
                Order Details
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("About Us")}
                className={`${
                  activeLink === "About Us" ? "text-black" : "hover:text-black"
                } transition duration-300 ease-in-out`}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {/* Login profile */}
          <div className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              className="h-6 w-6"
              viewBox="0 0 242 268"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0,268) scale(0.1,-0.1)"
                fill="#000000"
                stroke="none"
              >
                <path d="M1046 2604 c-129 -31 -263 -120 -343 -227 -100 -135 -144 -276 -145 -462 0 -218 66 -389 201 -525 124 -124 261 -180 442 -180 188 0 325 55 450 181 137 137 201 305 201 529 0 343 -196 615 -494 685 -78 18 -234 18 -312 -1zm299 -59c105 -27 184 -72 260 -149 128 -129 187 -281 186 -486 0 -136 -15 -202 -72 -318 -78 -160 -226 -279 -386 -312 -83 -18 -243 -8 -322 19 -165 57 -296 194 -356 374 -37 107 -46 282 -21 403 46 229 213 412 426 468 73 19 211 20 285 1z" />
                <path d="M770 1257 c-14 -6 -45 -20 -70 -31 -207 -91 -375 -246 -469 -433 -58 -116 -105 -393 -81 -481 30 -115 162 -183 419 -218 273 -37 987 -37 1267 0 261 34 393 102 425 218 13 49 6 175 -17 280 -61 292 -267 527 -570 650 -72 30 -77 31 -90 14 -20 -28 -8 -41 64 -70 340 -139 525 -387 557 -748 11 -124 -16 -172 -128 -223 -139 -64 -356 -85 -878 -85 -513 0 -727 21 -866 85 -110 50 -133 88 -127 210 19 349 205 612 532 750 76 32 92 43 92 61 0 17 -21 38 -33 33 -1 0 -13 -5 -27 -12z" />
              </g>
            </svg>
          </div>
          {/* CART */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
