import "./App.css";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar></Navbar>
    </div>
  );
}

export default App;
