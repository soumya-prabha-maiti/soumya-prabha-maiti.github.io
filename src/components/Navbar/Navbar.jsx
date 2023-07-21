import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdClose, MdMenu } from "react-icons/md";
import {motion} from "framer-motion";
import "./Navbar.scss";

const sectionsList = [
  { name: "Education", link: "#education" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const socialsList = [
  { name: "Linkedin", link: "https://www.linkedin.com/in/soumya-prabha-maiti/", icon: <FaLinkedin />},
  { name: "Github", link: "https://github.com/soumya-prabha-maiti", icon: <FaGithub />},
  { name: "Email", link: "mailto:soumyaprabhamaiti2001@gmail.com", icon: <IoMdMail /> },
];

{/* <ul className="app__navbar-socials">
            {socialsList.map((item) => (
              <li key={`social-${item.name}`}>
                <a href={item.link}>{item.icon}</a>
              </li>
            ))}
          </ul> */}


const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <nav className="app__navbar">

      <div  className="app__navbar-logo">
        <a href="/">Soumya Prabha Maiti</a>
      </div>


      <ul className="app__navbar-links">
        {sectionsList.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {/* <div /> */}
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <MdMenu onClick={() => setOpen(true)} />

        {open && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <MdClose onClick={() => setOpen(false)} />
            <ul>
              {sectionsList.map((item) => (
                <li key={item}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );




  return (
    <nav className="bg-red-500 w-full px-20 py-8 mb-12 shadow-lg fixed top-0 left-0 lg:flex items-center justify-between">
      <a href="/" className="text-xl font-burtons">
        Soumya Prabha Maiti
      </a>

      <div
        className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <MdClose /> : <MdMenu />}
      </div>

      <ul
        className={`lg:flex lg:items-center lg:gap-3 absolute left-0 lg:static bg-inherit  lg:z-auto z-[-2] w-full lg:w-auto pl-20 lg:pl-0 pb-8 lg:pb-0 transition-all duration-200 ease-in ${
          open
            ? " top-20 opacity-100"
            : " top-[-490px] opacity-0 lg:opacity-100"
        }`}
      >
        {/*FIXME transition-all duration-200 ease-in : causing problem in animation */}
        {sectionsList.map((item) => (
          <li className="text-xl hover:text-gray-400 lg:my-0 my-5 ">
            {/* TODO fix color*/}
            <a href={item.link}>{item.name}</a>
          </li>
        ))}

        <li>
          <ul className="flex gap-3">
            <li>
              <a href={socials.Linkedin} target="_blank">
                <FaLinkedin size={25} className="cursor-pointer" />
              </a>
            </li>
            <li>
              <a href={socials.Github} target="_blank">
                <FaGithub size={25} className="cursor-pointer" />
              </a>
            </li>
            <li>
              <a href={socials.Email}>
                <IoMdMail size={27} className="cursor-pointer" />
              </a>
            </li>
            {/* <li>
            <BsFillMoonStarsFill size={22} className="cursor-pointer mx-1" />
          </li> */}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
