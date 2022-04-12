function City(prop) {
  return (
    <div className="cityCard">
      <div className="location">
        <img className="cityImage" src={prop.images} />
        <div className="city">{prop.city}</div>
      </div>
      <div className="dates">
        Arrival: {prop.arrival}
        <br />
        Departure: {prop.departure}
      </div>
    </div>
  );
}

export default City;
