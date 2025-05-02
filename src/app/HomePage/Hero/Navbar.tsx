"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaX } from "react-icons/fa6";
import { useState } from "react";
import { IconType } from "react-icons";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface props{
    icon: IconType;
  }

  return (
    <nav className="w-full bg shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="logo">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={75}
              className="img object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="/"
                className="relative text-white hover:text-blue-500 transition duration-300"
              >
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/AboutPage"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Services"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/ImmigrationPage"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                Immigration
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                Trainings
              </Link>
            </li>
          </ul>
        </div>

        {/* Get Started Button (Desktop Only) */}
        <div className="hidden md:block">
          <Link href="/Services" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full ml-4">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setDisplayMenu(!displayMenu)}
            aria-label="Toggle menu"
            aria-expanded={displayMenu ? "true" : "false"}
            className="text-gray-700 focus:outline-none"
          >
            {displayMenu ? (
              <FaX className="text-xl text-black" />
            ) : (
              <FaBars className="text-xl text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {displayMenu && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-4 z-50 md:hidden animate-slide-in">
            <div className="px-4 space-y-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="block text-gray-700 hover:text-blue-500 py-2"
                    onClick={() => setDisplayMenu(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/AboutPage"
                    className="block text-gray-700 hover:text-blue-500 py-2"
                    onClick={() => setDisplayMenu(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services"
                    className="block text-gray-700 hover:text-blue-500 py-2"
                    onClick={() => setDisplayMenu(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Blog"
                    className="block text-gray-700 hover:text-blue-500 py-2"
                    onClick={() => setDisplayMenu(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ImmigrationPage"
                    className="block text-gray-700 hover:text-blue-500 py-2"
                    onClick={() => setDisplayMenu(false)}
                  >
                    Immigration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trainings"
                    className="block text-gray-700 hover:text-blue-500 py-2"
                    onClick={() => setDisplayMenu(false)}
                  >
                    Trainings
                  </Link>
                </li>
              </ul>
              <Link href="/Services" passHref className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full" onClick={() => setDisplayMenu(false)}>
                Get Started
                </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;