import { TypeAnimation } from "react-type-animation";
import developerBg from "../../../../public/animation_llrk2q3o.json";
import Lottie from "lottie-react";
import { AiFillGithub, AiOutlineMessage } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";


const MyDetails = () => {
  const handleDownload = () => {
    const url = "/public/resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "./resume.pdf";
    anchor.click();
  };
  return (
    <div className="mt-10 h-full">
      <div className="md:flex justify-center items-center">
        <div className="md:w-1/2">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#fff]">
            Sabbir Hossain Shanto
          </h1>
          <TypeAnimation
            sequence={[
              "Specialized in React.js",
              1000,
              "MERN Stack  Developer",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "30px", display: "inline-block" }}
            className="text-[#e3405f] font-bold"
          />

          <h1 className="text-gray-400 text-xl mt-8 font-medium leading-8">
            Self-taught programmer with proficiency in MERN stack, solid
            understanding of JavaScript, HTML and CSS. Committed to continuous
            learning and staying updated with industry trends. Skilled in
            creating responsive user interfaces and building RESTful APIs.
          </h1>
          <div className="flex items-center mt-8 gap-4">
            <a href="https://github.com/sabbirjiinat" target="main">
              <div className="bg-gray-700 h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                <AiFillGithub color="white" size={20} />
              </div>
            </a>

            <a
              href="https://www.facebook.com/sabbirhossen.santo/"
              target="main"
            >
              <div className=" bg-[#0e76a8] h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                <FaFacebook color="white" size={20} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sabbir-hosssain-shanto-bb0a55287/"
              target="main"
            >
              <div className=" bg-[#0e76a8] h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                <BiLogoLinkedin color="white" size={20} />
              </div>
            </a>

            <a href="mailto:sabbirshnt@gmail.com">
              <div className=" bg-[#ea4335] h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                <AiOutlineMessage color="white" size={20} />
              </div>
            </a>
          </div>

          <div
            onClick={handleDownload}
            className="bg-[#fc1056] w-[190px] py-3 rounded mt-8 text-center text-gray-100 font-semibold text-[18px] hover:shadow-xl shadow-red-700 cursor-pointer"
          >
            <button>Download Resume</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Lottie animationData={developerBg} size={100} loop={true} />;
        </div>
      </div>
    
    </div>
  );
};

export default MyDetails;
