"use client";
import { useEffect, useState } from "react";
import { Button, Dropdown, ConfigProvider } from "antd";
import Image from "next/image";
import { IoChatbubbles, IoLogOut, IoMenu, IoPerson } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { AllImages } from "../../../public/assets/AllImages";
import Link from "next/link";
import Container from "../ui/Container";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

//* Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2, // Stagger when hiding
      when: "afterChildren", // Wait until children are hidden
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
};

const Navbar = () => {
  const path = usePathname();
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };

  const select = (index) => {
    setSelected(index);
    setMobileMenuVisible(false);
  };

  const menu = [
    {
      name: "Home",
      link: "/",
    },

    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Blog",
      link: "/blogs",
    },
  ];

  const dropdownItems = menu.map((item, index) => ({
    key: String(index),
    label: (
      <Link href={item.link} key={index}>
        <Button
          className={`capitalize font-medium  w-full ${
            item.link === path ? "text-[#f5382c]" : "text-[#000106]"
          }`}
          style={{
            backgroundColor: "transparent",
            color: item.link === path ? "text-[#f5382c]" : "text-[#000106]",
          }}
          onClick={() => select(index)}
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt={item.name}
              className="inline-block mr-1 h-6 w-6 text-[#F3F3F3]"
            />
          )}
          {item.name}
        </Button>
      </Link>
    ),
  }));

  dropdownItems.push({
    key: "contact-us",
    label: (
      <Link href="/contact-us">
        <Button
          className="py-5 w-full bg-secondary-color border-secondary-color text-primary-color font-semibold duration-200 delay-75 rounded-lg shadow-md  drop-shadow-md"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          Contact us
        </Button>
      </Link>
    ),
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="sticky top-0 sm:top-8 left-0 w-full z-50 bg-[#ffffff] shadow lg:overflow-hidden "
    >
      <Container>
        <div className="flex items-center justify-between py-2 ">
          <div className="flex justify-between w-full items-center">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Image
                  src={AllImages.logo}
                  alt="logo"
                  className="w-auto h-12"
                />
              </motion.div>
            </Link>
            <motion.div
              variants={containerVariants}
              initial={"hidden"}
              animate={"visible"}
              className="ml-8 hidden lg:flex lg:justify-center space-x-4 "
            >
              {menu.map((item, index) => (
                <Link href={item.link} key={index}>
                  <motion.button
                    variants={childVariants}
                    whileHover={{
                      scale: 1.1,
                      originZ: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                      },
                    }}
                    className={`flex flex-col items-center px-2 py-0 gap-0 cursor-pointer capitalize border-none font-medium xl:text-lg  shadow-none ${
                      item.link === path
                        ? "text-base-color rounded-none scale-105"
                        : "text-base-color "
                    }`}
                    style={{
                      backgroundColor: "transparent",
                      color: path === item.link ? "#ffe6b9" : "white",
                    }}
                    onClick={() => select(index)}
                  >
                    {/* {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.name}
                        className="inline-block h-6 w-6"
                      />
                    )} */}
                    <p className="">{item.name}</p>
                    {item.link === path ? (
                      <p className="h-[2px] w-3 rounded-full bg-secondary-color"></p>
                    ) : (
                      <p className="h-[2px] w-3 rounded-full bg-transparent"></p>
                    )}
                  </motion.button>
                </Link>
              ))}
            </motion.div>
            <div className="lg:flex items-center hidden">
              <Link href="/contact-us">
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="py-2 px-6 shadow-inner shadow-white  bg-secondary-color text-white border-none text-site-color font-semibold rounded-lg"
                >
                  Contact us
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex gap-2 items-center lg:hidden">
            <div className="lg:hidden">
              <ConfigProvider
                theme={{
                  components: {
                    Dropdown: {
                      colorBgElevated: "#F3F3F3",
                    },
                  },
                }}
              >
                <Dropdown
                  menu={{ items: dropdownItems }}
                  placement="bottomRight"
                >
                  <Button
                    shape="circle"
                    icon={
                      <IoMenu className="h-7 w-7 items-center justify-center -mt-1  hover:text-site-color text-site-color" />
                    }
                    onClick={handleMobileMenuClick}
                  />
                </Dropdown>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Navbar;
