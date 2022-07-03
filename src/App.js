import React from "react";
import Topbar from "./components/topbar/Topbar";
import CreateListing from "./pages/create-listing/CreateListing";
import Home from "./pages/homepage/Home";
import Detail from "./pages/listingdetail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <div>   
          <Topbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detail:id" element={<Detail/>}/>
            <Route path="/create" element={<CreateListing/>}/>
          </Routes>
          </div>
      </BrowserRouter>
    </>
  );
};

export default App;
