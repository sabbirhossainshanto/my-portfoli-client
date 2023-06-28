import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import developerBg from "../../../assets/sabbir.png";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const MyDetails = () => {
  return (
    <div>
      <Link to="https://drive.google.com/file/d/1aGYq-fwvLg-bMTYWGjeSjsLQkalRTpnr/view?usp=sharing">
        <div className="flex justify-end cursor-pointer mb-10 mt-3">
          <div className="rounded-sm border-[1px] border-[#ca41ac] flex items-center justify-between space-x-3 p-1">
            <div className=" animate-pulse bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700 bg-clip-text text-transparent font-bold lg:leading-tight ">
              Download Resume
            </div>
            <div className="text-rose-500 animate-bounce">
              <FaDownload />
            </div>
          </div>
        </div>
      </Link>
      <div className="md:flex justify-center items-center ">
        <div
          
        
        
          className="md:w-1/2"
        >
          <h1 className="text-3xl text-white font-medium">
            Hi, i`m <br />
          </h1>
          <h1 className="animate-text bg-gradient-to-r from-[#7a48cd] via-[#ca41ac] to-[#f75051] bg-clip-text text-transparent font-bold text-2xl  lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl">
            Sabbir Hossain
          </h1>
          <TypeAnimation
            sequence={[
              "Specialized in React.js",
              1000,
              "MERN Stack Web Developer",
              1000,
              "Mern Stack Developer",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
            className="text-gray-200 font-bold"
          />

          <h1 className="text-gray-300 text-xl mt-8 font-medium">
            Self-taught programmer with proficiency in MERN stack, solid
            understanding of JavaScript, HTML and CSS. Committed to continuous
            learning and staying updated with industry trends. Skilled in
            creating responsive user interfaces and building RESTful APIs.
          </h1>
        </div>
        <div  className="md:w-1/2">
          <img src={developerBg} alt="Sabbir Developer" />
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
