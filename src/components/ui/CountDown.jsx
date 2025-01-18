"use client";
import React, { useState, useEffect } from "react";

function CountDown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    timeUp: "",
  });

  useEffect(() => {
    // Initialize deadline only once, equivalent to componentDidMount
    const deadline = new Date("Feb 26, 2025 00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const t = deadline - now;
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((t % (1000 * 60)) / 1000);

      if (t < 0) {
        clearInterval(timer);
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          timeUp: "TIME IS UP",
        });
      } else {
        setTime({
          days: days < 10 ? "0" + days : days,
          hours: hours < 10 ? "0" + hours : hours,
          minutes: minutes < 10 ? "0" + minutes : minutes,
          seconds: seconds < 10 ? "0" + seconds : seconds,
          timeUp: "",
        });
      }
    }, 1000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds, timeUp } = time;

  return (
    <div class="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-2 pt-3 md:p-7 md:pt-8 bg-black bg-opacity-10 rounded text-center mx-auto">
      <div class="flex">
        <div class="flex-1 p-2.5 border-r border-secondary-color border-opacity-20">
          <p
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            id="day"
          >
            {days}
          </p>
          <span class="text-sm sm:text-base md:text-lg lg:text-xl">Days</span>
        </div>
        <div class="flex-1 p-2.5 border-r border-secondary-color border-opacity-20">
          <p
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            id="hour"
          >
            {hours}
          </p>
          <span class="text-sm sm:text-base md:text-lg lg:text-xl">Hours</span>
        </div>
        <div class="flex-1 p-2.5 border-r border-secondary-color border-opacity-20">
          <p
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            id="minute"
          >
            {minutes}
          </p>
          <span class="text-sm sm:text-base md:text-lg lg:text-xl">
            Minutes
          </span>
        </div>
        <div class="flex-1 p-2.5 border-r border-transparent">
          <p
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            id="second"
          >
            {seconds}
          </p>
          <span class="text-sm sm:text-base md:text-lg lg:text-xl">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
