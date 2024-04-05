import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/sidenav/sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import VideoDetails from "./pages/videoDetails/VideoDetails";
import ChannelDetails from "./pages/ChannelDetails/ChannelDetails";
import SearchPage from "./pages/search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
