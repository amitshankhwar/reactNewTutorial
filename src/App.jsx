//functional components

//class based components

import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Form from "./pages/Form";
import "./App.css";
import DataFetching from "./pages/DataFetching";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<DataFetching />} />
          <Route path="about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
