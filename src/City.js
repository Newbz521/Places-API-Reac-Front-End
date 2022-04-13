function City(prop) {
  return (
    <div className="cityCard" onClick={prop.clicker} data-region={prop.city}>
      <div className="location" data-region={prop.city}>
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
