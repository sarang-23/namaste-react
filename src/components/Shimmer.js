const Shimmer = () => {
  const arr = Array.from("A SIMPLE STRING FOR SHIMMER UI ");
  return (
    <div className="shimmer-container">
      {arr.map((v, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  );
};
const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="res-image-shimmer"></div>
      <div className="res-name-shimmer"></div>
      <div className="res-name-shimmer"></div>
      <div className="res-name-shimmer"></div>
      <div className="res-name-shimmer"></div>
    </div>
  );
};

export default Shimmer;
