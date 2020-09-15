import React from "react";

// Atomize Imports
import { StyleReset, ThemeProvider } from "atomize";
import { Text } from "atomize";

function App() {
  return (
    <ThemeProvider>
      <StyleReset />
      <Text tag="h1" textSize="display1" m={{ b: "4rem" }}>
        This is h1 of display1 size
      </Text>
    </ThemeProvider>
  );
}

export default App;
