import React from "react";

const Card = (props) => {
  let value = props.place;

  const places = [
    {
      id: 1,
      imageUrl:
        "https://www.clubmahindra.com/blog/media/section_images/shuttersto-edcf9d450240f11.jpg",
      altText: "nearby Udaipur",
      title: "Kumbhalgarh",
      description: "Summer & Adventure",
      distance: "81 Km",
      travelTime: "2h 1m",
    },
    {
      id: 2,
      imageUrl:
        "https://th.bing.com/th?id=OSK.HERO1oGwnJuSV6vD-V6ymvPD0gxStFSR9wVSKUojm3d2xUw&w=472&h=280&c=1&rs=2&o=6&dpr=1.1&pid=SANGAM",
      altText: "nearby Udaipur",
      title: "Chittorgarh",
      description: "Art & Culture Family",
      distance: "113 Km",
      travelTime: "1h 49m",
    },
    {
      id: 3,
      imageUrl:
        "https://assets-news.housing.com/news/wp-content/uploads/2022/08/19183321/mount-abu-feature-compressed.jpg",
      altText: "nearby Udaipur",
      title: "Mount Abu",
      description: "Nature & Wildlife Relax",
      distance: "161 Km",
      travelTime: "2h 59m",
    },
  ];

  const outsidePlace = [
    {
      id: 1,
      imageUrl:
        "https://th.bing.com/th?id=OSK.HERO1oGwnJuSV6vD-V6ymvPD0gxStFSR9wVSKUojm3d2xUw&w=472&h=280&c=1&rs=2&o=6&dpr=1.1&pid=SANGAM",
      altText: "nearby Udaipur",
      title: "Chittorgarh",
      description: "Art & Culture Family",
      distance: "113 Km",
      travelTime: "1h 49m",
    },
    {
      id: 2,
      imageUrl:
        "https://assets-news.housing.com/news/wp-content/uploads/2022/08/19183321/mount-abu-feature-compressed.jpg",
      altText: "nearby Udaipur",
      title: "Mount Abu",
      description: "Nature & Wildlife Relax",
      distance: "161 Km",
      travelTime: "2h 59m",
    },
    {
      id: 3,
      imageUrl:
        "https://www.clubmahindra.com/blog/media/section_images/shuttersto-edcf9d450240f11.jpg",
      altText: "nearby Udaipur",
      title: "Kumbhalgarh",
      description: "Summer & Adventure",
      distance: "81 Km",
      travelTime: "2h 1m",
    },
  ];

  switch (value) {
    case (value = "nearby"):
      return places.map((place) => (
        <div className="card" key={place.id}>
          <img
            src={place.imageUrl}
            alt={place.altText}
            width="300px"
            height="200px"
            style={{ borderRadius: "20px 20px 0px 0px" }}
          />
          <div className="carddetails">
            <h2>{place.title}</h2>
            <p>{place.description}</p>
            <p>
              {place.distance} * {place.travelTime}
            </p>
          </div>
        </div>
      ));
      break;

    case (value = "outside"):
      return outsidePlace.map((place) => (
        <div className="card" key={place.id}>
          <img
            src={place.imageUrl}
            alt={place.altText}
            width="300px"
            height="200px"
            style={{ borderRadius: "20px 20px 0px 0px" }}
          />
          <div className="carddetails">
            <h2>{place.title}</h2>
            <p>{place.description}</p>
            <p>
              {place.distance} * {place.travelTime}
            </p>
          </div>
        </div>
      ));
      break;

    default:
      break;
  }
};

export default Card;
