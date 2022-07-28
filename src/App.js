import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Shared/Login/Login";
import Home from './components/Home/Home';

function App() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <div  className="flex h-screen  bg-[#171C28] justify-center items-center">
          <ClimbingBoxLoader loading={loading} color={`#A07228`} size={20} />
        </div>
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
