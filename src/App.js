import Header from "./components/Header"
import Footer from './components/Footer'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio";
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/projects" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
