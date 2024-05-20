import './App.css'
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (

      <React.StrictMode>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<App />} />
              </Routes>
          </BrowserRouter>
      </React.StrictMode>
  );
}

export default App;
