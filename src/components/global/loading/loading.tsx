"use client";

import dynamic from "next/dynamic";
import loading from "../../../../public/loading.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
};

export default Loading;
