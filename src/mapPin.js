function PinMap(prop) {
  return (
    <div className={prop.name}>
      <img src={prop.image} onClick={prop.click} data-region={prop.city} />
    </div>
  );
}

export default PinMap;
