import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
          <Card/>
      </div>
      <Footer/>
    </div>
  );
}
