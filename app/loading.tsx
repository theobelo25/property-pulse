"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  marging: "100px auto",
};

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <ClipLoader
        color="#3B82F6"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loading;
