import "./App.css";
import React, { useState, useEffect } from "react";
import City from "./City.js";
import Region from "./Region.js";
import Map from "./map.png";
import Pin from "./ping.png";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://joseph-travel-api.herokuapp.com/api/itineraries")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const [region, setRegion] = useState("");

  const selector = (e) => {
    console.log(e.target.dataset.region);
    setRegion(e.target.dataset.region);
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
              <div className="pin1">
                <img src={Pin} onClick={selector} data-region="Paris" />
              </div>
              <div className="pin2">
                <img src={Pin} onClick={selector} data-region="New York" />
              </div>
              <div className="pin3">
                <img src={Pin} onClick={selector} data-region="Miami" />
              </div>
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
                  city={data.city}
                  arrival={data.arrival}
                  departure={data.departure}
                  images={data.img}
                  key={index}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
