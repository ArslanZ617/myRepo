import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Text2Go() {
  let [mode, setMode] = useState("light");

  let removeBodyColor = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
  }

  let toggleMode = (cls) => {
    removeBodyColor();
    document.body.classList.add("bg-"+cls);
    console.log(cls);

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#144040";
      showAlert("success", "Dark Mode Applied");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Applied");
    }
  };

  let [alert, setAlert] = useState(null);

  let showAlert = (type, message) => {
setAlert(
  {
    type: type,
    msg: message
  });
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert} />
        
        <Routes>
           <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<Form name="Start Writing Here" mode={mode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Text2Go;
