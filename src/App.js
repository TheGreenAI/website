import React from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/NavBar";

import { Div } from "atomize";

function App() {
  return (
    <Div>
      <Header />
      <HeroSection />
    </Div>
  );
}

export default App;
