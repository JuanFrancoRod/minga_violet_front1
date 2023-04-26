import { useState } from "react"

/* export default function Navbar() { */
export default function Navbar() {
  const [hide, setHide] = useState(false)
  function show() {
    setHide(!hide)
  }

  return (
    <div className="w-screen h-[10vh]  flex items-center">
      {hide ? (
        <>
          <div className="absolute w-screen z-index:10 sm:w-[40%] h-[100vh] mt-[-10px]  self-start z-10 bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] flex flex-col justify-start items-center">
            <div className="w-full flex justify-around items-center h-[15vh]">
              <div className="mr-12 text-white">
                <p className="font-medium">Lucas Ezequiel Silva</p>
                <p>lucasezequielsilva@gmail.com</p>
              </div>
              <svg
                onClick={show}
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-start w-full items-center gap-y-4 h-[50vh] sm:text-center">
              <a
                className="bg-white rounded-md w-[15vw] h-[40px] flex justify-center items-center text-pink-500 font-medium"
                href="#"
              >
                Home
              </a>
              <a
                className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium"
                href="#"
              >
                Mangas
              </a>
              <a
                className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium"
                href="#"
              >
                My mangas
              </a>
              <a
                className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium"
                href="#"
              >
                Favorites
              </a>
              <a
                className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium"
                href="#"
              >
                Logout
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-[10vh] w-screen flex justify-between m-4 px-12 py-4 ">
            <button className=" text-slate-800">
              <svg
                onClick={show}
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
        </>
      )}
    </div>
  );
}
