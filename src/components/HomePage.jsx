import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { timeActions } from "../store/time";
import TimeSpend from "./TimeSpend";
import PauseButton from "./PauseButton";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(timeActions.updateTime(0.5));
    }, 1000);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Welcome to Ucan</h1>

      <PauseButton />
      <br />

      <Link
        to="/DataDisplay"
        class="inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light"
      >
        Click here to go to the API page.
      </Link>
    </div>
  );
};

export default HomePage;
