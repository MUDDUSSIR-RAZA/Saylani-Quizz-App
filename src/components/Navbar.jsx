"use client";

import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter()

  const [nav, setNav] = useState(false);
  const handleToggle = () => {
    setNav(!nav);
    if (!nav) {
      tl2.pause();
      tl2.play();
    } else {
      tl2.pause();
      tl2.reverse();
    }
  };

  const [isSticky, setIsSticky] = useState(false);

  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".openNavbarLogo", {
      y: -30,
      duration: 0.7,
      delay: 0.5,
      scale: 0,
    });
    tl.from(".openNavbarLinks", {
      y: -30,
      duration: 1,
      scale: 0,
      stagger: 0.3,
    });
  });

  let tl2 = gsap.timeline();
  useGSAP(() => {
    tl2.from(".closeNavbar", {
      right: 0,
      duration: 0.5,
      delay: 0.4,
      opacity: 0,
    });
    tl2.from(".closeNavbarLinks", {
      x: 200,
      duration: 1,
      scale: 0,
      stagger: 0.3,
    });
    tl2.from(".closeNavbarCross", {
      x: 30,
      y: -30,
      duration: 0.6,
      scale: 0,
    });
  });
  tl2.pause();

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  //for scrolling Navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      id: 1,
      link: "/addQuiz",
      name: "Add Quiz",
    },
    {
      id: 2,
      link: "/addQuestion",
      name: "Add Question",
    },
    {
      id: 3,
      link: "/addBulkQuestion",
      name: "Add Bulk Questions",
    },
  ];

  const handleLogout = async () => {
    // try {
    //   await axios.post("/api/user/logout");
    //   router.push("/auth/signup")
    //   return;
    // } catch (error) {
    //   console.error(error.response.data);
    //   return;
    // }
  };

  return (
    <nav
      className={`transition-all duration-500 ease-in-out w-full  ${
        isSticky ? "fixed top-6 w-full" : "absolute"
      }`}
    >
      <div
        className={`mx-auto md:px-2 px-6 lg:px-8 backdrop-blur-sm bg-[#a4a0a098] ${
          nav ? "hidden" : ""
        } ${isSticky ? "w-[92%] rounded-full   " : ""}`}
      >
        <div className="relative flex items-center justify-between h-16 w-full">
          <div
            onClick={handleToggle}
            className="cursor-pointer absolute inset-y-0 right-5 md:flex items-center hidden "
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>


          <div className="flex items-center justify-between w-full">
            <div className="openNavbarLogo flex-shrink-0 flex items-center md:ml-7 ml-3">
              <a href="/" className="text-gray-900 text-lg font-bold ">
                Logo
              </a>
            </div>

            <div className="flex items-center justify-around">
              <div className="md:hidden block mr-2 text-xl font-semibold text-center ">
                <div className="flex justify-around capitalize">
                  {links.map(({ link, id ,name }) => (
                    <Link
                      key={id}
                      href={link}
                      className="openNavbarLinks text-[#2c4a4f] hover:text-gray-700 ml-3 minLg:ml-11 bg-[#ffffff72] p-2 rounded-full px-4"
                      id="openNavbarLinksRef"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="openNavbarLinks bg-[#ffffff72] p-2 rounded-full text-lg text-center minLg:mx-5 mr-16 minMd:mr-0 md:hidden px-4"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={` closeNavbar flex  w-dvh h-dvh relative backdrop-blur-sm bg-[#a4a0a098] z-999 ${
          nav ? "" : "hidden"
        }`}
      >
        {/* //Toggle Buttons */}
        <div className="closeNavbarCross cursor-pointer absolute right-7 top-7 flex items-center z-20">
          {nav ? (
            <FaTimes onClick={handleToggle} size={30} />
          ) : (
            <FaBars onClick={handleToggle} size={30} />
          )}
        </div>

        <div className="h-5/6 w-full text-3xl font-semibold text-center absolute top-10  mx-auto">
          <div className="flex flex-col justify-around text-center my-auto">
            {links.map(({ link, id ,name }) => (
              <a
                key={id}
                href={link}
                className="closeNavbarLinks text-[#2c4a4f] hover:text-gray-700  my-14 mx-14 capitalize"
                onClick={handleToggle}
              >
                {name}
              </a>
            ))}
            <button
              onClick={handleLogout}
              className="closeNavbarLinks bg-[#ffffff72] p-2 rounded-full text-lg text-center my-7 mx-14  minLg:mx-5 mr-16 minMd:mr-0  border-2 border-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
