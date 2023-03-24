import React from "react";
import "./App.css";
import RoomDetail from "./pages/RoomDetail/RoomDetail";
import Register from "./pages/register/Register";
import Detail from "./component/Detail/Detail";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
