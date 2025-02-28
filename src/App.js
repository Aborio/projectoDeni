import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Certif from "./components/Certif/Certif";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Acupuntura from "./components/Servicios/Acupuntura/Acupuntura";
import DepilacionLaser from "./components/Servicios/depilacionlaser/DepilacionLaser";
import ManipulacionCorporal from "./components/Servicios/ManipulacionCorporal/ManipiCorpoal";
import RehabVestibular from "./components/Servicios/Rehabilitacionvestivular/RehabVestivular";
import RitualesSensoriales from "./components/Servicios/RitualesSensoriales/RitualesSensoriales";
import TerapiaManual from "./components/Servicios/TerapiaManual/TerapiaManual";
import TerapiaMovimientos from "./components/Servicios/Terapiademovimiento/TerapiaMovimientos";
import TratamPielCorpo from "./components/Servicios/Tratamientodelapielcorporal/TratamPielCorpo";
import TratamPielFacial from "./components/Servicios/Tratamientosdecuidadodepiel/TratamPielFacial";



function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/certif" element={<Certif />} />
          <Route path="/acupuntura" element={<Acupuntura />} />
          <Route path="/depilacionlaser" element={<DepilacionLaser />} />
          <Route path="/manipulacioncorporal" element={<ManipulacionCorporal />} />
          <Route path="/rehabilitacionvestibular" element={<RehabVestibular />} />
          <Route path="/ritualesensoriales" element={<RitualesSensoriales />} />
          <Route path="/terapiamanual" element={<TerapiaManual />} />
          <Route path="/terapiademovimiento" element={<TerapiaMovimientos />} />
          <Route path="/tratamientodelapielcorporal" element={<TratamPielCorpo />} />
          <Route path="/tratamientodelapielfacial" element={<TratamPielFacial />}
          />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
