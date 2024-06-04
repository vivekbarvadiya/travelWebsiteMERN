import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
// import Hotel from "../../pages/hotel/Hotel";
import City from "../../pages/city/City";
// import State from "../../pages/state/State";
import Profile from "../../pages/profile/Profile";
import Landingpage from "../home/Landingpage/Landingpage";
import About from "../../pages/about/About";
// import Landingpage from '../home/Landingpage/Landingpage';
import Explore from "../home/Explore/Explore";
import Lakshadweep from "../home/Lakshadweep/Lakshadweep";
import PopularDestination from "../popularDest/PopularDestination";
// import Testimonial from '../home/Testimonial/Testimonial';
// import Footer from '../home/Footer/Footer';
// import OfferComponent from '../home/OfferComponent/OfferComponent';
// import Navbar from "./components/navbar/Navbar";

const Navbar = () => {
  const pages = [
    { name: "Home", value: "home" },
    { name: "Popular Destination", value: "popDestination" },
    { name: "Profile", value: "profile" },
    { name: "About Us", value: "about" },
  ];

  const [currentPage, setCurrentPage] = useState("home");

  const onrender = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Landingpage />
            <Explore />
            <Lakshadweep />
          </>
        );
      case "popDestination":
        return <PopularDestination />;
      case "profile":
        return <Profile />;
      case "about":
        return <About />;
      default:
        return (
          <>
            <Landingpage />
            <Explore />
            <Lakshadweep />
          </>
        );
    }

    // if (currentPage == "home") {
    //   return (
    //     <>
    //       <Landingpage />
    //       <Explore />
    //       <Lakshadweep />
    //     </>
    //   );
    // } else if (currentPage == "popDestination") {
    //   return <City />;
    // } else if (currentPage == "profile") {
    //   return <Profile />;
    // } else if (currentPage == "about") {
    //   return <About />;
    // } else {
    //   return (
    //     <>
    //       <Landingpage />
    //       <Explore />
    //       <Lakshadweep />
    //     </>
    //   );
    // }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">ChaloKahiChale</div>
        <div className="navbar-links">
          <div className="navbar-menu">
            {pages.map((page) => (
              <p
                key={page.value}
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentPage(page.value)}
              >
                {page.name}
              </p>
            ))}
          </div>
          <p className="navbar-signin">Sign In</p>
        </div>
      </nav>

      <div>{onrender()}</div>
    </>
  );
};

export default Navbar;
