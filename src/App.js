import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Ai from "./components/Ai";
import MakeBolderChoice from "./components/MakeBolderChoice";
import InnovateWithSpeed from "./components/InnovateWithSpeed";
import CloudService from "./components/CloudService";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/ai" element={<Ai />} />
          <Route
            exact
            path="/makeBolderChoice"
            element={<MakeBolderChoice />}
          />
          <Route
            exact
            path="/innovateWithSpeed"
            element={<InnovateWithSpeed />}
          />
          <Route exact path="/cloudService" element={<CloudService />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
