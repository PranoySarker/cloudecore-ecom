import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-row gap-4 mt-8">
      <div className="animate-pulse w-1/2 h-96 bg-gray-300 rounded-md"></div>
      <div className="animate-pulse w-1/2 h-96 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default Skeleton;
