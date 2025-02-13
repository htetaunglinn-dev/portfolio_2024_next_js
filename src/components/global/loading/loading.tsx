"use client";

import loading from "../../../../public/loading.json";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
};

export default Loading;
