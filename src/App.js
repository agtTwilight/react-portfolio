import Header from "./components/Header"
import Footer from './components/Footer'
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import React from "react"

function App() {
  return (
    <>
    <Header/>
    <About/>
    {/* <Portfolio/> */}
    <Footer/>
    </>
  );
}

export default App;
