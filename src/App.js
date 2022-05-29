import { ThemeProvider } from "@emotion/react";

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Home from "./component/Home/Home";
import Revolutions from "./component/Revolutions/Revolutions";
import Services from "./component/Services/Services";
import Header from "./component/UI/Header";
import theme from "./component/UI/Theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resolutions" element={<Revolutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
