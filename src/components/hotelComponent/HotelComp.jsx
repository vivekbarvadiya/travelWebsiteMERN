import React from "react";

const HotelComp = () => {

  const Hotels = [
    {
      id: 1,
      hotelImg: "https://th.bing.com/th/id/OIP.fYi_w8xioeIIkLdXgA0qIAHaEu?rs=1&pid=ImgDetMain",
      reviews: 345,
      title: "Rajasi Palace",
      distance: "10 Km"
    },
    {
      id: 2,
      hotelImg: "https://th.bing.com/th/id/OIP.NnKhCwyc_TnwX0YJATc1ZwHaGR?rs=1&pid=ImgDetMain",
      reviews: 600,
      title: "Bhairavgarh Palace",
      distance: "2 Km"
    },
    {
      id: 3,
      hotelImg: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/99/08/d1/park-regis.jpg?w=900&h=-1&s=1",
      reviews: 500,
      title: "Club Mahindra",
      distance: "15 Km"
    },
    {
      id: 4,
      hotelImg: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/20070426084557454-6beaa8f7-4502-49a5-b3fb-2032c39fc979.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg",
      reviews: 200,
      title: "Gorbandh Palace",
      distance: "4 Km"
    },
    {
      id: 5,
      hotelImg: "https://i.travelapi.com/hotels/4000000/3520000/3513300/3513292/935d6db8_z.jpg",
      reviews: 450,
      title: "Suryagarh Palace",
      distance: "20 Km"
    },
    {
      id: 6,
      hotelImg: "https://th.bing.com/th/id/OIP.fYi_w8xioeIIkLdXgA0qIAHaEu?rs=1&pid=ImgDetMain",
      reviews: 345,
      title: "Rajasi Palace",
      distance: "10 Km"
    },
    {
      id: 7,
      hotelImg: "https://th.bing.com/th/id/OIP.NnKhCwyc_TnwX0YJATc1ZwHaGR?rs=1&pid=ImgDetMain",
      reviews: 600,
      title: "Bhairavgarh Palace",
      distance: "2 Km"
    },
    {
      id: 8,
      hotelImg: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/99/08/d1/park-regis.jpg?w=900&h=-1&s=1",
      reviews: 500,
      title: "Club Mahindra",
      distance: "15 Km"
    },
    {
      id: 9,
      hotelImg: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/20070426084557454-6beaa8f7-4502-49a5-b3fb-2032c39fc979.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg",
      reviews: 200,
      title: "Gorbandh Palace",
      distance: "4 Km"
    },
    {
      id: 10,
      hotelImg: "https://i.travelapi.com/hotels/4000000/3520000/3513300/3513292/935d6db8_z.jpg",
      reviews: 450,
      title: "Suryagarh Palace",
      distance: "20 Km"
    }
  ];
  

  return (
    <>
      {Hotels.map((hotel) => (
        <div className="hotel">
          <div className="left">
            <img
              src={hotel.hotelImg}
              alt="Hotels image"
            />
          </div>
          <div className="right">
            <div className="leftside">
              <div className="upper">
                <button className="tag">HOTEL</button>
                <span className="star">⭐⭐⭐⭐⭐({hotel.reviews} reviews)</span>
              </div>
              <div className="middle">
                <h2>{hotel.title}</h2>
              </div>
              <div className="lower">
                <span>{hotel.distance}</span>
                <span>Transport</span>
              </div>
            </div>
            <div className="rightside">
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HotelComp;
