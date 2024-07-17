"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminNavbar = () => {
  const router = useRouter();

  const [nav, setNav] = useState(false);
  const handleToggle = () => {
    setNav(!nav);
    // }
  };

  const links = [
    {
      id: 1,
      link: "/admin/addCourse",
      name: "Add Course",
    },
    {
      id: 3,
      link: "/admin/addBulkQuestion",
      name: "Add Bulk Questions",
    },
    {
      id: 5,
      link: "/admin/createquiz",
      name: "Create Quiz",
    },
    {
      id: 8,
      link: "/admin/addQuestion",
      name: "Add Question",
    },
  ];

  const handleLogout = async () => {
    try {
      await axios.post("/api/user/logout");
      router.push("/auth/signup");
      return;
    } catch (error) {
      console.error(error.response.data);
      return;
    }
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  return (
    <nav
      className={`transition-all duration-500 ease-in-out w-full z-[999] fixed`}
    >
      <div
        className={`mx-auto md:px-2 px-6 w-[92%] rounded-full lg:px-8 m-5 backdrop-blur-sm bg-[#a4a0a098] ${
          nav ? "hidden" : ""
        } `}
      >
        <div className="relative flex items-center justify-between h-16 w-full">
          <div
            onClick={handleToggle}
            className="cursor-pointer absolute inset-y-0 right-5 xl:flex items-center hidden "
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
              <div className="xl:hidden block mr-2 text-xl font-semibold text-center ">
                <div className="flex justify-around capitalize">
                  {links.map(({ link, id, name }) => (
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
                // onClick={handleLogout}
                className="openNavbarLinks bg-[#ffffff72] p-2 rounded-full text-center capitalize px-4 minLg:mx-5 mr-16 minMd:mr-0 xl:hidden text-xl font-semibold text-[#752e2e] hover:text-[#ff4a4a]"
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

        <div className="w-full text-2xl font-semibold text-center absolute top-14">
          <div className="flex flex-col justify-around text-center my-auto">
            {links.map(({ link, id, name }) => (
              <Link
                key={id}
                href={link}
                className="closeNavbarLinks text-[#2c4a4f] hover:text-[#4998a7]  my-11 mx-14 capitalize bg-[#ffffff72] p-2 rounded-full px-4"
                onClick={handleToggle}
              >
                {name}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="closeNavbarLinks bg-[#ffffff72] p-2 rounded-full text-center my-11 mx-14 capitalize px-4 text-2xl font-semibold text-[#752e2e] hover:text-[#ff4a4a]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
