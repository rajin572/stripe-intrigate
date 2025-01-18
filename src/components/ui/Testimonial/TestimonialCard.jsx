import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row justify-stretch items-center md:gap-5 xl:gap-10 bg-[#FFF4F3] md:bg-white p-7 md:p-0 ">
      <Image
        src={item.image}
        alt="Testimonial"
        width={0}
        height={0}
        sizes="100vw"
        className=" h-20 w-20 rounded-full md:rounded-none md:w-auto md:h-[400px] md:max-w-[250px] lg:h-[450px] lg:max-w-[300px] object-center"
      />
      <div className="flex flex-col items-center md:items-start md:px-5 xl:px-10 py-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-1 md:mb-4">
          {item.name}
        </h1>
        <p className="sm:text-lg lg:text-xl mb-1 md:mb-4">{item.role}</p>
        <div className="flex gap-2 items-center">
          <FaStar className="size-5 text-[#19363D]" />
          <FaStar className="size-5 text-[#19363D]" />
          <FaStar className="size-5 text-[#19363D]" />
          <FaStar className="size-5 text-[#19363D]" />
          <FaStar className="size-5 text-[#19363D]" />
        </div>
        <p className="mt-5 md:mt-10 font-medium text-center md:text-start">
          {item.message}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
