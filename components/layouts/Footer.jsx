import Image from "next/image";
import logoLight from "../../public/images/logoSorany.png.jpg";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-blue-800 text-white/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
        <Link href={"/"}> 
          <Image src={logoLight} width={120} height={100} alt="logo"/>
        </Link>
          <p className="flex items-center text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            Gregorio cardona || all rights reserved
          </p>
        </div>
        <div className="flex flex-col">
          {/* <div className="flex flex-row gap-4">
            <Link href={"/cookies"}>
              <p className="flex items-center text-base font-titleFont ">
                  Cookies policy  /
              </p>
            </Link>
            <Link href={"/legalWarning"}>
              <p className="flex items-center text-base font-titleFont ">
                  Legal warning /
              </p>
            </Link>
            <Link href={"/privacyPolicy"}>
              <p className="flex items-center text-base font-titleFont ">
                  Privacy Policy
              </p>
            </Link>
          </div> */}
          <div>
            {/* <p className="flex items-center text-base font-titleFont ">
              Navigator
            </p> */}
            <hr className="max-w-lg my-5 mx-auto border[1px] border-secondaryColor" />
          </div>
        </div>
        <div className="flex gap-6 mr-10">
          <Link href={"https://www.youtube.com/@TechnologyArcade2023"}><BsYoutube className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" /></Link>
          <BsFacebook className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsGithub className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsLinkedin className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsTwitter className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
