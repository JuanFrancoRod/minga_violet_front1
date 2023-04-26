import React from 'react'

export default function Carousel() {
  return (
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
          <img className="self-center h-60 w-68" src="/img/image3.png"></img>
        </div>
        <div className=" flex flex-col mb-16 w-88 sm1: flex-wrap">
          <h3 className="text-white text-2xl sm1:text-m">Shonen</h3>
          <p className="text-white text-xl sm1:text-xs ">
            Is the manga tha is aimed at adolescent boys. They are series with
            large amounts of action, in wich humorous situations often occur.
            The camaraderie between members of a collective or combat team
            stands out.
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
    </div>
  );
}
