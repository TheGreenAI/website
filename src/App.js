import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

import { Div } from "atomize";

function App() {
  return (
    <Div>
      <NavBar />
      <HeroSection />
    </Div>
  );
}

export default App;
