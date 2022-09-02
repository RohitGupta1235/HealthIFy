import React from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/services";
import Last from "./components/last";
import Footer from "./components/footer";

function App() {


  return (
    <>
    

    <Navbar/>
    <Body/>
    <Services/>
    <Last/>
    <Footer/>
    </>
  );
};

export default App;
