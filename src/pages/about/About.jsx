import React from "react";
import './About.css';
import Adventure from '../../images/adventureimage.png';
import ServiceImg from '../../images/Best Service.png';
import priceImg from '../../images/Price Guarantee.png';
import hotelImg from '../../images/Handpicked Hotels.png';
import clientImg from '../../images/SatisfiedClient.png';
import award from '../../images/award.png';
import destination from '../../images/Destination.png';
import traveller from '../../images/Traveller.png';



const About = () => {
  return (
    <div>
      <>
        <header>
          <div id="headerImage">
            <div className="header">
              <h2 className="heading">About Us</h2>
              <h5 className="subHeading">Home &gt; About US</h5>
            </div>
          </div>
        </header>
        <section>
          <div className="aboutUs">
            <div className="right">
              <h2 className="heading">About Us</h2>
              <p className="description">
                Discover the magic of travel with ChaloKahiChale! We're not just
                your average tour planners; we're dream weavers, memory makers,
                and adventure architects all rolled into one. From hidden gems
                to iconic landmarks, we'll whisk you away on a journey of a
                lifetime. Let's turn your wanderlust into wander-musts together!
              </p>
              <p></p>
            </div>
            <div className="left">
              <img id="image" src={Adventure}alt="image" />
            </div>
          </div>
          <div className="whyChooseUs">
            <div className="header">
              <h2 className="heading">Why choose Us?</h2>
              <h5 className="subHeading">
                our services have been trusted by world travelers.
              </h5>
            </div>
            <div id="cards">
              <div className="card">
                <img
                  src={ServiceImg}
                  alt="Best Service"
                  className="cardIcon"
                />
                <h1 className="cardHeading">Best Service</h1>
                <p className="cardcontent">
                  our service is reliable and convenient, our service is
                  quality.
                </p>
              </div>
              <div className="card">
                <img
                  src={priceImg}
                  alt="Price Guarantee"
                  className="cardIcon"
                />
                <h1 className="cardHeading">Price Guarantee</h1>
                <p className="cardcontent">
                  our service is reliable and convenient, our service is
                  quality.
                </p>
              </div>
              <div className="card">
                <img
                  src={hotelImg}
                  alt="Handpicked Hotels"
                  className="cardIcon"
                />
                <h1 className="cardHeading">Handpicked Hotels</h1>
                <p className="cardcontent">
                  our service is reliable and convenient, our service is
                  quality.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="achievement">
            <div className="header">
              <h2 className="heading">Our Achievement</h2>
              <h5 className="subHeading">
                These milestones inspire us to continue crafting exceptional
                travel experiences <br />
                for every adventurer who chooses to journey with us.
              </h5>
            </div>
            <div className="achievementicons">
              <div className="icons" id="satisfiedClient">
                <div className="img">
                  <img src={clientImg} alt="icon" />
                </div>
                <div className="text">
                  <h3>
                    1200 <sup>+</sup>
                  </h3>
                  <p className="des">Satisfied Client</p>
                </div>
              </div>
              <div className="icons" id="newTraveller">
                <div className="img">
                  <img src={traveller} alt="icon" />
                </div>
                <div className="text">
                  <h3>
                    500<sup>+</sup>
                  </h3>
                  <p className="des">New Traveller</p>
                </div>
              </div>
              <div className="icons" id="destination">
                <div className="img">
                  <img src={destination} alt="icon" />
                </div>
                <div className="text">
                  <h3>
                    200<sup>+</sup>
                  </h3>
                  <p className="des">Destination</p>
                </div>
              </div>
              <div className="icons" i="award">
                <div className="img">
                  <img src={award} alt="" />
                </div>
                <div className="text">
                  <h3>
                    50 <sup>+</sup>
                  </h3>
                  <p className="des">Award</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default About;
