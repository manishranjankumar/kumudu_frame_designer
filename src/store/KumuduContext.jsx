import React, { createContext, useState } from "react";

export const kumuduContext = createContext({
  frameDimensions: {},
  noOfGods: "",
  setFrameDimension: () => {},
  setNoOfGods: () => {},
  setGodList: () => {},
  godList: [],
  lamp: "",
  setLamp: () => {},
  godDimensions: {},
  setGodDimension: () => {},
});

const KumuduContextProvider = ({ children }) => {
  const [frameDimensions, setFrameDimension] = useState({
    width: "",
    height: "",
  });

  const [godDimensions, setGodDimension] = useState({
    width: "",
    height: "",
  });

  const [noOfGods, setNoOfGods] = useState(0);

  const [godList, setGodList] = useState([]);

  const [lamp, setLamp] = useState("");

  return (
    <kumuduContext.Provider
      value={{
        frameDimensions,
        setFrameDimension,
        noOfGods,
        setNoOfGods,
        godList,
        setGodList,
        lamp,
        setLamp,
        godDimensions,
        setGodDimension,
      }}
    >
      {children}
    </kumuduContext.Provider>
  );
};

export default KumuduContextProvider;
