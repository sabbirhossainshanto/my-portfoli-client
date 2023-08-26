import Container from "../../components/Container/Container";
import { Helmet } from "react-helmet-async";
import skillBg from "../../../public/animation_llrrs5iy.json";
import Lottie from "lottie-react";
import { useState } from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import JavaScript from "../../assets/java-script.png";
import react from "../../assets/react.png";
import MongoDb from "../../assets/mongodb.svg";
import Express from "../../assets/express-js.png";
import node from "../../assets/node.svg";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiFirebase,SiRedux } from "react-icons/si";  
import { ImNpm } from "react-icons/im";  
import BootStrap from '../../assets/bootstrap.png'
const Skills = () => {
  const [hover, setHover] = useState(0);
  return (
    <div className="w-full h-full mt-16">
      <Container>
        <Helmet>
          <title>Sabbir Portfolio - Skills</title>
        </Helmet>

        <div className="800px:flex justify-between items-start w-full gap-4 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-20">
          <div className="w-full 800px:w-[50vw] ">
            <Lottie animationData={skillBg} size={100} loop={true} />;
          </div>
          <div className="w-full 800px:w-[50vw] ">
            <div className="w-full text-center">
              <h1 className="text-3xl font-Roboto text-white font-semibold">
                Full Stack Development
              </h1>
            </div>

            <div className="grid grid-cols-5 mt-10 gap-5">
              <div className="relative" onMouseEnter={() => setHover(1)}>
                <img className="cursor-pointer" src={html} alt="" />
                {hover === 1 && (
                  <p className="absolute -top-5 left-4 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                    Html5
                  </p>
                )}
              </div>

              <div className="relative" onMouseEnter={() => setHover(2)}>
                <img className=" cursor-pointer" src={css} alt="" />
                {hover === 2 && (
                  <p className="absolute -top-5 left-5 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                    Css3
                  </p>
                )}
              </div>

              <div className="relative" onMouseEnter={() => setHover(3)}>
                <img className=" cursor-pointer" src={JavaScript} alt="" />
                {hover === 3 && (
                  <p className="absolute -top-5 left-1 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                    JavaScript
                  </p>
                )}
              </div>

              <div className="relative" onMouseEnter={() => setHover(4)}>
                <img className=" cursor-pointer" src={react} alt="" />
                {hover === 4 && (
                  <p className="absolute -top-5 left-5 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                    React
                  </p>
                )}
              </div>

              <div className="relative" onMouseEnter={() => setHover(5)}>
                <img className=" cursor-pointer" src={MongoDb} alt="" />
                {hover === 5 && (
                  <p className="absolute -top-7 left-1 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                    MongoDb
                  </p>
                )}
              </div>
              <div className="relative mt-2" onMouseEnter={() => setHover(6)}>
                <img className=" cursor-pointer" src={Express} alt="" />
                {hover === 6 && (
                  <p className="absolute -top-7 left-1 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                    Express
                  </p>
                )}
              </div>
              <div className="relative mt-2" onMouseEnter={() => setHover(7)}>
                <BiLogoTailwindCss
                  size={60}
                  color="#38bdf8"
                  className="cursor-pointer"
                />
                {hover === 7 && (
                  <p className="absolute -top-7 left-0 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                    Tailwind
                  </p>
                )}
              </div>
              <div className="relative mt-2" onMouseEnter={() => setHover(8)}>
                <img className=" cursor-pointer" src={node} alt="" />
                {hover === 8 && (
                  <p className="absolute -top-7 left-2 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                    Node.js
                  </p>
                )}
              </div>
              <div className="relative mt-2" onMouseEnter={() => setHover(9)}>
              <SiFirebase
              size={50}
              color="#ffcc2f"
              className="cursor-pointer"
              />
                {hover === 9 && (
                  <p className="absolute -top-7 -left-3 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                    Firebase
                  </p>
                )}
              </div>
              <div className="relative mt-2" onMouseEnter={() => setHover(10)}>
              <SiRedux
              size={50}
              color="#764abc"
              className="cursor-pointer"
              />
                {hover === 10 && (
                  <p className="absolute -top-7 -left-1 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                  Redux
                  </p>
                )}
              </div>
              <div className="relative mt-2" onMouseEnter={() => setHover(11)}>
              <img className=" cursor-pointer" src={BootStrap} alt="" />
                {hover === 11 && (
                  <p className="absolute -top-5 -left-1 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                  BootStrap
                  </p>
                )}
              </div>
              <div className="relative mt-2" onMouseEnter={() => setHover(12)}>
              <ImNpm
              size={50}
              color="#cb3837"
              className="cursor-pointer"
              />
                {hover === 12 && (
                  <p className="absolute -top-7 left-1 bg-white text-gray-900 px-1 rounded-md font-Roboto font-semibold">
                  NPM
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
