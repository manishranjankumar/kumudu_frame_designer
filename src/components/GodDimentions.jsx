import React, { useContext, useState } from "react";
import { kumuduContext } from "../store/KumuduContext";

const GodDimentions = () => {
  const { setGodDimension } = useContext(kumuduContext);
  const [dimensions, setDimensions] = useState({ width: "", height: "" });

  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setDimensions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGodDimension(dimensions);
  };
  return (
    <>
      <div className=" pt-[120px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[20px] p-[20px]"
        >
          {/* Inputs row */}

          <div className=" bg-gray-200 p-2 text-black rounded">
            <label className="block mb-1">God's Dimensions</label>
            <input
              className="border w-full mb-2 p-1 text-black"
              placeholder="Width"
              type="text"
              name="width"
              value={dimensions.width}
              onChange={handleDimensionChange}
            />
            <input
              className="border w-full p-1 text-black"
              placeholder="Height"
              type="text"
              name="height"
              value={dimensions.height}
              onChange={handleDimensionChange}
            />
          </div>
          <button className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default GodDimentions;
