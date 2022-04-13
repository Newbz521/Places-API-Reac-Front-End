import "./App.css";
import React, { useState, useEffect } from "react";
import City from "./City.js";
import Region from "./Region.js";
import Map from "./map.png";
import Pin from "./ping.png";
import PinMap from "./mapPin";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://travel-api-renew.herokuapp.com/api/itineraries")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const [region, setRegion] = useState("none");

  const selector = (e) => {
    console.log(e.target.dataset.region);
    setRegion(e.target.dataset.region);
  };

  const newSite = (e) => {
    const newWindow = window.open(
      `https://theplanetd.com/?s=${e.target.innerText}`,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="App">
      <div className="pageContainer">
        <div className="mainRow">
          <div className="msg1">
            Travel with <span>passion</span>.
          </div>
          <div className="mapContainer">
            <div className="clickable" onClick={selector} data-region="">
              {data.map((data) => (
                <PinMap
                  name={data.city}
                  image={Pin}
                  click={selector}
                  city={data.city}
                />
              ))}
            </div>
            <div className="displayMap">
              <img src={Map} />
            </div>
          </div>
          <div className="msg2">
            <span>Live</span> a better life.
          </div>
        </div>
        <div className="cardContainer">
          {data.map(
            (data, index) =>
              data.city.includes(region) && (
                <City
                  region={data.city}
                  city={data.city}
                  arrival={data.arrival}
                  departure={data.departure}
                  images={data.img}
                  key={index}
                  clicker={newSite}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
