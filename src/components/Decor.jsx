import React, { useContext } from "react";
import decor from "../decorData.json";
import { kumuduContext } from "../store/KumuduContext";
const Decor = () => {
  const { setLamp } = useContext(kumuduContext);
  return (
    <div className="decor-cont flex justify-center ">
      {decor.lamps.map((lamp, i) => {
        return (
          <div onClick={() => setLamp(lamp.image)} className="pt-[20px]">
            <img
              style={{ height: "170px", margin: "0 50px" }}
              src={lamp.image}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Decor;
