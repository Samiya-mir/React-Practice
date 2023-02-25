import React from "react";
import { Footer } from "./components/Footer";
import Headers from "./components/Header";
import logo from "./images/logo.png";
function App() {
  // const title = "this is a header";
  const img = logo;
  return (
    <>
      <Headers title={img} />
      <Footer title={img} />
    </>
  );
}
export default App;
