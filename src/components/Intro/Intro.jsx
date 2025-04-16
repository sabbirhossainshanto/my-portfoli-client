import whatsApp from "../../assets/whatsapp.png";

import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiOutlineMessage } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiDownload, FiEye } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import WavingHand from "./WavingHand";
import TechSlider from "./TechSlider";
import { Link } from "react-router-dom";
AOS.init();

const Intro = () => {
  // const handleDownload = () => {
  //   const url = "/resume.pdf";
  //   const anchor = document.createElement("a");
  //   anchor.href = url;
  //   anchor.download = "./resume.pdf";
  //   anchor.click();
  // };
  return (
    <div className="pt-28 pb-12">
      <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
        {/* Left Card - Content */}
        <div className="lg:w-[60%] relative group order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/10 relative h-full hover:border-white/20 transition-colors duration-500">
            {/* Greeting Section */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <WavingHand />
                <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Hello, {"I'm"} Sabbir Hossain Shanto
                </h1>
              </div>
              <h2 className="text-xl sm:text-2xl text-white/80 font-medium">
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Specialized in React.js",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "25px", display: "inline-block" }}
                  className="text-[#e3405f] font-bold"
                />
              </h2>
              <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
                I’m a Passionate Full Stack Developer specializing in React and
                Node.js ecosystem. With 2 years of experience, always
                prioritizing clean code and exceptional user experience. My goal
                is to become a great full-stack web developer—someone who can
                design beautiful, user-friendly interfaces and handle the
                back-end effortlessly.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6 sm:mb-10">
              <TechSlider />
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10">
              <Link
                target="_Main"
                to="https://drive.google.com/file/d/1v6FL33fiOCtKkjNwRE3F_LaHE8qpPCe2/view?usp=sharing"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:opacity-90 transition-opacity font-medium inline-flex items-center justify-center gap-2"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </Link>
              <Link
                to="/projects"
                className="bg-white/[0.08] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:bg-white/[0.12] transition-colors border border-white/10 hover:border-white/20 inline-flex items-center justify-center gap-2"
              >
                <FiEye className="w-4 h-4" />
                View Work
              </Link>
            </div>
            {/* Social Links */}
            <div className="flex items-center mt-8 gap-4">
              <a href="https:wa.me/+8801777051339" target="main">
                <div className="bg-gray-700 h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                  <img src={whatsApp} />
                </div>
              </a>

              <a href="https:www.linkedin.com/in/sabbirshanto/" target="main">
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

        {/* Right Card - Image */}
        <div className="lg:w-[40%] relative group h-full order-1 lg:order-2">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
          <div className="bg-[#1a1a1a] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden relative hover:border-white/20 transition-colors duration-500 h-full">
            {/* Image with hover effects */}
            <div className="relative w-full h-full transition-all duration-500 group-hover:scale-105">
              <img
                src="https:res.cloudinary.com/daar91zv4/image/upload/v1735366042/Firefly%2020230917192807-1735366041867.png"
                alt="Kallol"
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                onError={(e) => {
                  console.error("Profile image failed to load");
                  const target = e.target;
                  target.style.display = "none";
                }}
              />

              {/* Gradient overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
