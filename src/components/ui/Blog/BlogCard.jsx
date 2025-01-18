"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoClock } from "react-icons/go";
import useScrollGrow from "../Animation/ScrollGrow";
import { motion } from "framer-motion";

const BlogCard = ({ item }) => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-white  rounded-lg shadow p-4  hover:shadow-lg transition-shadow duration-300 border border-[#E6E7E6"
    >
      <Image
        src={item.image.src}
        alt="blog_img"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full max-h-[350px] rounded-lg object-cover"
      />
      <Link href={`/blogs/${item?.id}`}>
        <div className="flex items-center text-base-color font-semibold text-xl mb-3 mt-6">
          {/* <GoClock className="mr-2 text-secondary-color size-5" /> */}
          <span>{item?.title}</span>
        </div>
      </Link>

      <p className="text-base-color text-base mb-4">
        {item?.description.slice(0, 150)}{" "}
        <Link href={`/blogs/${item?.id}`}>
          <span className="text-secondary-color font-semibold hover:underline">
            Read More...
          </span>
        </Link>
      </p>
    </motion.div>
  );
};

export default BlogCard;
