// components/Footimport { Angry } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

import Link from "next/link";


export const Footer = () => {
  return (
    <footer className="bg-[#FDFDFD] w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between px-6 lg:px-[165px] py-8 gap-8">
        <div className="flex flex-col gap-6 w-full lg:w-[223px]">
          <h3 className="text-black-100 text-[20px] font-bold leading-[30px] tracking-[0.6px]">
            About Us
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="#" className="text-black-100 text-opacity-[80%] text-[16px] leading-[26px] tracking-[0.6px]">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black-100 text-opacity-[80%] text-[16px] leading-[26px] tracking-[0.6px]">
                Our mission
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black-100 text-opacity-[80%] text-[16px] leading-[26px] tracking-[0.6px]">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-[223px]">
          <h3 className="text-black-100 text-[20px] font-bold leading-[30px] tracking-[0.6px]">
            Product
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="#" className="text-black-100 text-opacity-[80%] text-[16px] leading-[26px] tracking-[0.6px]">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black-100 text-opacity-[80%] text-[16px] leading-[26px] tracking-[0.6px]">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black-100 text-opacity-[80%] text-[16px] leading-[26px] tracking-[0.6px]">
                Our products
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-[223px]">
          <h3 className="text-black-100 text-[20px] font-bold leading-[30px] tracking-[0.6px]">
            Follow Us
          </h3>
          <div className="flex gap-3">
            {[
              { icon: <FaFacebookF />, href: "#", label: "Facebook" },
              { icon: <FaInstagram />, href: "#", label: "Instagram" },
              { icon: <FaYoutube />, href: "#", label: "YouTube" },
              { icon: <FaTwitter />, href: "#", label: "Twitter" },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#8236C8] text-white hover:opacity-80"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-[350px]">
          <h3 className="text-black-100 text-[20px] font-bold leading-[30px] tracking-[0.6px]">
            Subscribe
          </h3>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 h-10 px-4 rounded-l-md border border-[#EEEEEE] placeholder:text-[rgba(30,39,47,0.4)] text-[16px]"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="w-10 h-10 flex items-center justify-center bg-[#8236C8] rounded-r-md text-white"
            >
              ➤
            </button>
          </form>
          <div className="flex gap-3">
            {[
              { icon: <FaFacebookF />, href: "#", label: "Facebook" },
              { icon: <FaInstagram />, href: "#", label: "Instagram" },
              { icon: <FaYoutube />, href: "#", label: "YouTube" },
              { icon: <FaTwitter />, href: "#", label: "Twitter" },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black-100 bg-opacity-10 text-[rgba(30,39,47,0.4)] hover:bg-opacity-20"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FDFDFD] border-t border-[#EEEEEE]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-[165px] py-4 gap-4">
          <p className="text-[14px] text-black-100 text-opacity-[80%] tracking-[0.6px]">
            © All Rights Reserved. LP Vitryna
          </p>
          <p className="text-[14px] text-black-100 text-opacity-[80%] tracking-[0.6px]">
            Designed by{" "}
            <Link
              href="#"
              className="text-[#8236C8] hover:underline"
            >
              Oleh Chabanov
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
