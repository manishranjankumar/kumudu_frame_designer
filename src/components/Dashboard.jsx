import React from "react";
import SideBar from "./SideBar";
import FrameVisual from "./FrameVisual";
import Dimensions from "./Dimensions";
import GodDimentions from "./GodDimentions";

const Dashboard = ({ setTab, tab }) => {
  return (
    <>
      <div className="dash-box flex">
        <div>
          {" "}
          <SideBar setTab={setTab}></SideBar>{" "}
        </div>
        <div className="min-w-[80%]">
          <FrameVisual />
        </div>
        <div className="w-[20%] bg-white">
          {(tab === "" || tab === "frames") && <Dimensions></Dimensions>}
          {(tab === "gods" || tab === "decor") && <GodDimentions />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
