import React from "react";
import Form from "./Form";
import Info from "./Info";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Login form will be displayed if UserIsRegistered is true.
//Register form will be displayed if UserIsRegistered is false.
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/info" element={<Info />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
