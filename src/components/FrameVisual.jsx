import React, { useContext } from "react";
import { kumuduContext } from "../store/KumuduContext";

const FrameVisual = () => {
  const { godList, frameDimensions, noOfGods, lamp, godDimensions } =
    useContext(kumuduContext);

  return (
    <div className="ml-[130px] pt-[70px] min-h-[70vh] bg-gray-300 flex justify-center items-center">
      <div className="overflow-x-auto">
        <div
          style={{
            width: `${Number(frameDimensions.width) * 96 || 500}px`,
            height: `${Number(frameDimensions.height) * 96 || 250}px`,
            display: "grid",
            gridTemplateColumns: `repeat(${Math.max(
              1,
              Number(noOfGods)
            )}, 1fr)`,
          }}
          className="bg-black px-[30px] py-[30px] gap-[40px]"
        >
          {Array.from({ length: noOfGods }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 w-full h-full flex justify-center items-center text-white font-bold relative"
            >
              {godList[i] ? (
                <img
                  src={godList[i].image}
                  alt={`God ${i + 1}`}
                  style={{
                    width: `${Number(godDimensions.width) * 96}px`,
                    height: `${Number(godDimensions.height) * 96}px`,
                  }}
                />
              ) : (
                "Empty"
              )}
              {lamp && i < noOfGods - 1 && (
                <div className="absolute bottom-0 right-[-45px]">
                  <img style={{ height: "100px" }} src={lamp} alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameVisual;
