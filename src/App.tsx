import "./App.css";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";

import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
