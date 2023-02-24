const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div className="h-40 w-40 bg-gray-400 m-3 justify-center" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;