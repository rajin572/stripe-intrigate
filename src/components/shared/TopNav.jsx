"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdMail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Container from "../ui/Container";
import { BsFillTelephoneFill } from "react-icons/bs";

import { FaLinkedin, FaMobile, FaXTwitter } from "react-icons/fa6";

export default function TopNav() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="hidden sm:block sticky top-0 left-0 w-full z-50 bg-secondary-color text-primary-color shadow"
    >
      <Container>
        <div className=" flex items-center justify-between h-8">
          {" "}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <BsFillTelephoneFill size={16} />
              <p>01730 859 583</p>
            </div>
            <div className="flex items-center gap-1">
              <FaMobile size={16} />
              <p>07853132204</p>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-5">
            <div>
              <Link href="/">
                <FaInstagram />
              </Link>
            </div>

            <div>
              <Link href="/">
                <FaLinkedin />
              </Link>
            </div>

            <div>
              <Link href="/">
                <FaFacebookF />
              </Link>
            </div>

            <div>
              <Link href="/">
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
