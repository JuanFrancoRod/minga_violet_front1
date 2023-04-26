import { useState } from "react";
import apiUrl from "../api.js";
import "./App.css";
/* import Navbar from "./components/Navbar.jsx";

import Footer from "./components/Footer.jsx"; */
import Main from "./layouts/Main.jsx";

import Index from "./pages/Index.jsx";

function App() {
  const [count, setCount] = useState(0);

  console.log(apiUrl);
  console.log(process.env.NODE_ENV);

  return (
    <>
      <div className="min-h-screen xsm:hidden">
        <Main>
          <Index/>
        </Main>
      </div>

      {/*MOBILE*/}
      <div className=" flex justify-center xsm:h-screen sm:hidden">
        <div className="xsm:bg-fondo-mobile xsm:w-full xsm:h-full xsm:bg-cover">
          <div className=" flex justify-center items-center h-20">
            <div className="flex w-full mx-4 justify-between">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              <div>
                <img className="xsm:w-12" src="/img/Logo.png" alt="logo" />
              </div>
            </div>
          </div>
          <div>
            <div className="xsm:flex xsm:flex-col xsm:mt-72">
              <h1 className="text-white xsm:text-4xl xsm:text-center xsm:font-bold">
                Live the emotion of the manga
              </h1>
              <h4 className="text-white xsm:text-base xsm:self-center xsm:mb-2">
                Find the perfect manga for you
              </h4>
              <div className="xsm:self-center">
                <button className="rounded-3xl bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] h-10 w-60 text-white ">
                  Exolire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
