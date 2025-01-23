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

import UserScreen from "./pages/UserScreen";
import DataScreen from "./components/DataScreen";
import Login from "./components/Login";
import Auth from "./Auth/Auth";

import OTPComponent from "./components/OTPComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<DataFetching />} />
            <Route path="about" element={<About />} />
            <Route path="/form" element={<Form />} />
          </Route>
          <Route
            path="/login"
            element={
              <Auth>
                <Login />
              </Auth>
            }
          />

          <Route path="/user/:id" element={<UserScreen />} />
          <Route path="/data" element={<DataScreen />} />
          <Route path="/ref" element={<OTPComponent />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
