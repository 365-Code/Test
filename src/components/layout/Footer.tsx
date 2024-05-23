import Link from "next/link";
import React from "react";

const socialIcons = [
  {
    title: "twitter",
    url: "",
    icon: (
      <i className="fi fi-brands-twitter text-blue-600 hover:text-blue-700" />
    ),
  },
  {
    title: "Whatsapp",
    url: "",
    icon: (
      <i className="fi fi-brands-whatsapp text-green-500 hover:text-green-600" />
    ),
  },
  {
    title: "linkedin",
    url: "",
    icon: (
      <i className="fi fi-brands-linkedin text-blue-500 hover:text-blue-600" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="shadow-inner shadow-black/50 py-6">
      <div className="container flex-wrap flex flex-col-reverse sm:flex-col items-center gap-3 md:flex-row justify-between">
        <div>
          2024 &copy; <span className="tag-blue-text">Unfluke</span>. All rights
          reserved
        </div>
        <div className="flex text-2xl gap-8 items-center">
          {socialIcons.map((ic, i) => (
            <Link key={i} href={ic.url} className="transition-all">
              {ic.icon}
            </Link>
          ))}
        </div>
        <ul className="flex flex-col md:gap-4 sm:flex-row items-center text-nowrap">
          <li className="footer-link">
            <Link href="">Terms and Conditions</Link>
          </li>
          <li className="footer-link">
            <Link href="">Refund Policy</Link>
          </li>
          <li className="footer-link">
            <Link href="">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
