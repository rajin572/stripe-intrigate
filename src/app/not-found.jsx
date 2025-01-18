import Container from "@/components/ui/Container";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center min-h-screen m-auto text-base-color bg-[#FFF4F3]">
      <Container>
        <h1 className="text-secondary-color text-6xl md:text-7xl lg:text-9xl font-extrabold mb-10">
          404
        </h1>
        <h3 className="text-xl md:text-2xl lg:text-3xl mb-5 font-bold">
          <span className="text-secondary-color">OOPS!</span> NOTHING WAS FOUND
        </h3>
        <p className="text-base lg:text-xl ">
          <span>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.{" "}
          </span>
          <Link
            href="/"
            className="text-secondary-color font-bold underline decoration-secondary-color underline-offset-4"
          >
            Return to homepage
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default NotFoundPage;
