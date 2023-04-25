import { useState } from "react";
import apiUrl from "../api.js";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  console.log(apiUrl)
  console.log(process.env.NODE_ENV)

  return (
    <>
      <div className="min-h-screen xsm:hidden">
        <div className="h-[10vh] p-4  bg-white flex justify-between mb-8 mr-44 ml-44 xsm:hidden">
          <button className="bg-slate-800 text-gray-50">
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
          </button>
          <img src="/img/Logo.png" alt="logo" />
        </div>
        {/*carrousel*/}
        <div className="flex justify-center mb-8 xsm:hidden ">
          <div className="h-[25vh] bg-cover bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] w-4/5 flex  items-end justify-around rounded-lg">
            <div className="w-10 self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF80"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#333333"
                className="w-10 h-10 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex w-full justify-around">
              <img
                className="self-center mb-4 h-64 w-64"
                src="/img/8b8e139c764c05a681947b2d6855bd331.png"
              ></img>
              <img
                className="self-center h-60 w-68"
                src="/img/image3.png"
              ></img>
            </div>
            <div className=" flex flex-col mb-16 w-88 sm1: flex-wrap">
              <h3 className="text-white text-2xl sm1:text-m">Shonen</h3>
              <p className="text-white text-xl sm1:text-xs ">
                Is the manga tha is aimed at adolescent boys. They are series
                with large amounts of action, in wich humorous situations often
                occur. The camaraderie between members of a collective or combat
                team stands out.
              </p>
            </div>
            <div className="w-10 self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF80"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#333333"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          {/*main*/}
        </div>
        <div className="flex justify-center flex-column xsm:hidden">
          <div className=" h-[53vh] m-8 bg-fondo-main bg-cover w-4/5 flex flex-col justify-center items-center">
            <div className="flex-column justify-center items-center">
              <h1 className="text-white text-6xl m-2">
                {" "}
                Live the emotion of the manga
              </h1>
              <h4 className="text-white place-self-auto text-xl m-2">
                {" "}
                Find the perfect manga for you
              </h4>
              <p className="text-white m-2">#MingaForever 🔥</p>
              <button className="text-white bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] m-2 w-32 h-8 items-center justify-center">
                Sing in!
              </button>
            </div>
          </div>
        </div>
        {/*footer*/}
        <div className="flex flex-col xsm:hidden ">
          <img
            src="/img/Rectangle14.png"
            alt=""
            className="self-center w-4/5 rounded-[50%_50%_48%52%/_0%_0%_100%_100%]"
          />
          <div className="flex justify-around mt-8 mr-8 ml-8 p-8">
            <div className="flex gap-12 ">
              <button>Inicio</button>
              <button>Mangas</button>
            </div>
            <img className="h-20" src="/img/Logo.png" alt="logo" />
            <div className="w-40">
              <div className="flex justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-vimeo"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </div>
              <button className="bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] flex w-40 h-8 items-center justify-center">
                {" "}
                Donate{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
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
