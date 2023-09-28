import React, { FunctionComponent } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./container/Home";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
