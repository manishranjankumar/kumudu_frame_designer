import "./App.css";
import Home from "./pages/Home";
import KumuduContextProvider from "./store/KumuduContext";

function App() {
  return (
    <>
      <KumuduContextProvider>
        <Home></Home>
      </KumuduContextProvider>
    </>
  );
}

export default App;
