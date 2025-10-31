import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-28 bg-black text-white px-4 sm:px-6 md:px-20 py-10 border-t border-gray-800 w-full overflow-x-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 text-center md:text-left">
        {/* Logo and Socials */}
        <div>
          <h2 className="text-2xl font-bold">Studiom</h2>
          <p className="text-gray-400 mt-3">Let's connect with our socials</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
            <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-500 transition cursor-pointer" />
            <FaDiscord className="hover:text-indigo-500 transition cursor-pointer" />
            <FaYoutube className="hover:text-red-500 transition cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 transition cursor-pointer" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to={"#"} className="hover:text-teal-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-teal-500 transition">
                Support
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-teal-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-teal-500 transition">
                T&C
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-teal-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold mb-3">COMMUNITY</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to={"#"} className="hover:text-teal-500 transition">
                Discord
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-teal-500 transition">
                Jobs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Get In Touch</h3>
          <div className="text-gray-400 space-y-2">
            <p>On Call : 11am - 8pm</p>
            <p className="font-semibold text-white hover:text-teal-500">
              +91 20000000777
            </p>
            <p>via mail : 11am - 8pm</p>
            <p className="mt-3 cursor-pointer">
              <span>Mail : </span>{" "}
              <Link
                className="  hover:text-teal-500 transition"
                to={"mailto:hello@studiom.com"}
              >
                hello@studiom.com
              </Link>{" "}
            </p>
            <p className=" hover:text-teal-500 transition">
              123,1st floor XYZ Sector C,
              <br />
              indore (MP), 48*****
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-5">
        Copyright © {new Date().getFullYear()} Studiom Pvt. Ltd. <br />
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
