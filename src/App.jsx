import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoute from "./routes/AppRoute";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header titulo = "PlayConnect"/>
        <AppRoute/>
      <Footer rodape = "&copy; Direitos reservados a PlayConnect"/>
    </BrowserRouter>
  );
}
