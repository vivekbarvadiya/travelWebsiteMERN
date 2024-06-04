// import { Route, Routes } from "react-router-dom";
// import State from "./pages/state/State";
// import Hotel from "./pages/hotel/Hotel";
import City from "./pages/city/City";
import Profile from "./pages/profile/Profile";
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import './components/navbar/Navbar.css';
import About from "./pages/about/About";
import Landingpage from './components/home/Landingpage/Landingpage';
import Explore from './components/home/Explore/Explore';
import Lakshadweep from './components/home/Lakshadweep/Lakshadweep';
import Testimonial from './components/home/Testimonial/Testimonial';
import Footer from './components/home/Footer/Footer';
import OfferComponent from './components/home/OfferComponent/OfferComponent';
import Navbar from "./components/navbar/Navbar";


function App() {


  return (
    <>
      <Navbar />
      <Testimonial />
      <OfferComponent />
      <Footer />

      {/* <Routes>
        <Route path="/" element={<State />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/city" element={<City />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}
    </>


  );
}

export default App;
