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
import Memo from "./components/Memo";
import Callback from "./components/Callback";
import EffectvsLayoutEffect from "./components/EffectvsLayoutEffect";
import LazyLoad from "./components/LazyLoad";
import { createContext, useState } from "react";

export const themeContext = createContext();

export const dataContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState([1, 2, 3, 4]);

  return (
    <>
      <dataContext.Provider value={{ data, setData }}>
        <themeContext.Provider value={{ theme, setTheme }}>
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
              <Route path="/memo" element={<Memo />} />
              <Route path="/callback" element={<Callback />} />
              <Route
                path="/effectvslayout"
                element={<EffectvsLayoutEffect />}
              />
              <Route path="/lazy" element={<LazyLoad />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </themeContext.Provider>
      </dataContext.Provider>
    </>
  );
}

export default App;
