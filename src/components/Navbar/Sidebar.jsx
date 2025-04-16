import { Link } from "react-router-dom";
import AnimatedLogo from "./AnimatedLogo";
import whatsApp from "../../assets/whatsapp.png";
import { FiMail } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub, AiOutlineMessage } from "react-icons/ai";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[150] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] transform transition-transform duration-300 ease-in-out md:hidden z-[150] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/20 blur-xl"></div>
          <div className="bg-black/40 backdrop-blur-md h-full border-l border-white/10 relative">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="p-5 pb-4">
                <div className="scale-75 origin-left">
                  <AnimatedLogo />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="px-6 flex flex-col gap-4">
                <button className="group">
                  <div className="flex items-center gap-3 bg-white/[0.08] px-4 py-3 rounded-xl hover:bg-white/[0.12] transition-all duration-300">
                    <img
                      src="/icons/about.png"
                      alt="About"
                      className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      About
                    </span>
                  </div>
                </button>
                <Link to="/projects" className="group" onClick={onClose}>
                  <div className="flex items-center gap-3 bg-white/[0.08] px-4 py-3 rounded-xl hover:bg-white/[0.12] transition-all duration-300">
                    <img
                      src="/icons/work.png"
                      alt="Work"
                      className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      Projects
                    </span>
                  </div>
                </Link>
              </nav>

              {/* Contact Button */}
              <div className="mt-8 px-6">
                <Link href="/contact" className="group" onClick={onClose}>
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-3 rounded-xl hover:opacity-90 transition-all flex items-center gap-3">
                    <FiMail className="w-5 h-5" />
                    <span>Contact</span>
                  </div>
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-auto p-6 border-t border-white/10">
                <div className="flex items-center mt-8 gap-4">
                  <a href="https:wa.me/+8801777051339" target="main">
                    <div className="bg-gray-700 h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                      <img src={whatsApp} />
                    </div>
                  </a>

                  <a
                    href="https:www.linkedin.com/in/sabbirshanto/"
                    target="main"
                  >
                    <div className=" bg-[#0e76a8] h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                      <BiLogoLinkedin color="white" size={20} />
                    </div>
                  </a>
                  <a
                    href="https:www.facebook.com/sabbirhossen.santo/"
                    target="main"
                  >
                    <div className=" bg-[#0e76a8] h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                      <FaFacebook color="white" size={20} />
                    </div>
                  </a>
                  <a href="https:github.com/sabbirhossainshanto" target="main">
                    <div className="bg-gray-700 h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                      <AiFillGithub color="white" size={20} />
                    </div>
                  </a>

                  <a href="mailto:sabbirshnt@gmail.com">
                    <div className=" bg-[#ea4335] h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                      <AiOutlineMessage color="white" size={20} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
