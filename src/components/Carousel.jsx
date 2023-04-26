
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../api.js";


export default function Carousel() {
  useEffect(
    () => {
      axios(apiUrl + "categories")
        .then((res) => setCategories(res.data.categories))
        .catch((err) => console.log(err));
    },
    [] //Array de dependencia vacio porque ftecheamos una vez y esos datos luego no cambian
  );
  let [categories, setCategories] = useState([]);
  console.log(categories);
  let [counter, setCounter] = useState(0);
  let sumar = () => {
    setCounter(counter + 1);
    if (counter === categories.length - 1) {
      setCounter(0);
    }
  };
  let restar = () => {
    setCounter(counter - 1);
    if (counter === 0) {
      setCounter(categories.length - 1);
    }
  };
console.log(categories[counter]?.name);
  return (
    <div className="flex justify-center mb-8 xsm:hidden ">
      <div className="h-[25vh] bg-cover w-11/12 flex  items-end justify-around rounded-lg" style={{backgroundColor:categories[counter]?.color}}>
        <div className="w-10 self-center">
          <svg
            onClick={restar}

            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF80"
            viewBox="0 0 24 24"
            strokeWidth={1.5}

            stroke="currentColor"

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

            className="self-center mb-4 h-64 w-64 md:h-48 md:w-48"
            src={categories[counter]?.character_photo}
          ></img>
          <img
            className="self-center h-60 w-68 md:h-48 md:w-40"
            src={categories[counter]?.cover_photo}
          ></img>
        </div>
        <div className=" flex flex-col justify-center mb-12 w-3/4 md:pl-4 ">
          <h3 className="text-white text-xl">
            {`${categories[counter]?.name.charAt(0).toUpperCase()}${categories[counter]?.name.slice(1)}`}
            
          </h3>
          <p className="text-white text-l md:text-sm ">
            {categories[counter]?.description}

          </p>
        </div>
        <div className="w-10 self-center">
          <svg

            onClick={sumar}

            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF80"
            viewBox="0 0 24 24"
            strokeWidth={1.5}

            stroke="currentColor"

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
