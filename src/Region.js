function Region(prop) {
  return (
    <div
      className="region"
      data-region={prop.region}
      onClick={prop.handleClick}
    ></div>
  );
}

export default Region;
