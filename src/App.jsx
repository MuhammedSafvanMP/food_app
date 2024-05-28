import Countries from "./components/countries/Countries";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> 
        
       
        <Route path="/places/:id" element={<Countries />} />
      </Routes>
    </>
  );
}
