import React from "react";
import Carousel from "../components/Carousel.jsx";

import Mobile from "../components/Mobile.jsx";

export default function Index() {
    return (
      <>
        <Carousel />
        <div className="flex justify-center flex-column xsm:hidden">

          <div className=" h-[53vh] m-8 bg-fondo-main bg-cover w-11/12 flex flex-col justify-center items-center">

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
               

      </>
    );
}
