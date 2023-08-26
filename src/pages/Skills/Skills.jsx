import Container from "../../components/Container/Container";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import jsImg from "../../assets/java-script.png";
import tailwindImg from "../../assets/tailwind.png";
import bootstrapImg from "../../assets/bootstrap.png";
import mongodbImg from "../../assets/mongodb.svg";
import firebaseImg from "../../assets/firebase.png";
import expressImg from "../../assets/express-js.png";
import reactAnimation from "../../../public/react.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const Skills = () => {
  return (
    <Container>
        <Helmet>
        <title>Sabbir Portfolio - Skills</title>
      </Helmet>
      <h1 className="font-bold text-2xl pt-10  lg:leading-tight sm:text-4xl lg:text-5xl lg:max-w-3xl text-center text-gray-100 w-fit mx-auto">
        My{" "}
        <span className="animate-text text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 to-rose-700">
          Skills
        </span>
      </h1>
      <div className="bg-gray-900 px-2 py-1 rounded-md w-fit mx-auto mt-3 mb-5">
        <h2 className="animate-text text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 to-rose-700 font-medium text-xl ">
          I Develop Skills Regularly
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-7">
        <div className="relative w-fit mx-auto">
          <CircularProgressBar
            fontColor="#ffff"
            colorCircle="#e6e6e6"
            linearGradient={["#7a48cd", "#f75051"]}
            percent={85}
            textPosition="1.5em"
            fontSize="1em"
            round
          >
            <img
              title="HTML"
              alt="Html"
              src={htmlImg}
              style={{
                borderRadius: "50%",
                left: "50%",
                padding: "2px",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -90%)",
                width: "70px",
              }}
            />
          </CircularProgressBar>
        </div>
        <div className="relative w-fit mx-auto">
          <CircularProgressBar
            fontColor="#ffff"
            colorCircle="#e6e6e6"
            linearGradient={["#7a48cd", "#f75051"]}
            percent={75}
            textPosition="1.5em"
            fontSize="1em"
            round
          >
            <img
              title="CSS"
              alt="CSS"
              src={cssImg}
              style={{
                borderRadius: "50%",
                left: "50%",
                padding: "2px",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -90%)",
                width: "70px",
              }}
            />
          </CircularProgressBar>
        </div>
        <div className="relative w-fit mx-auto">
          <CircularProgressBar
            fontColor="#ffff"
            colorCircle="#e6e6e6"
            linearGradient={["#7a48cd", "#f75051"]}
            percent={70}
            textPosition="1.5em"
            fontSize="1em"
            round
          >
            <img
              title="JS"
              alt="JS"
              src={jsImg}
              style={{
                borderRadius: "50%",
                left: "50%",
                padding: "2px",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -90%)",
                width: "70px",
              }}
            />
          </CircularProgressBar>
        </div>
        <div className="relative w-fit mx-auto">
          <CircularProgressBar
            fontColor="#ffff"
            colorCircle="#e6e6e6"
            linearGradient={["#7a48cd", "#f75051"]}
            percent={80}
            textPosition="1.5em"
            fontSize="1em"
            round
          >
            <Lottie
              style={{
                borderRadius: "50%",
                left: "50%",
                padding: "5px",
                position: "absolute",
                top: "60%",
                transform: "translate(-50%, -80%)",
                width: "70px",
              }}
              animationData={reactAnimation}
              loop={true}
            />
            ;
          </CircularProgressBar>
        </div>
        <div className="relative w-fit mx-auto">
          <CircularProgressBar
            fontColor="#ffff"
            colorCircle="#e6e6e6"
            linearGradient={["#7a48cd", "#f75051"]}
            percent={80}
            textPosition="1.5em"
            fontSize="1em"
            round
          >
            <img
              title="Tailwind"
              alt="Tailwind"
              src={tailwindImg}
              style={{
                borderRadius: "50%",
                left: "50%",
                padding: "5px",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -80%)",
                width: "70px",
              }}
            />
          </CircularProgressBar>
        </div>
        <div className="relative w-fit mx-auto">
          <CircularProgressBar
            fontColor="#ffff"
            colorCircle="#e6e6e6"
            linearGradient={["#7a48cd", "#f75051"]}
            percent={70}
            textPosition="1.5em"
            fontSize="1em"
            round
          >
            <img
              title="BootsTarp"
              alt="BootsTrap"
              src={bootstrapImg}
              style={{
                borderRadius: "50%",
                left: "50%",
                padding: "5px",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -80%)",
                width: "70px",
              }}
            />
          </CircularProgressBar>
        </div>
        <div className="relative w-fit mx-auto">
          <CircularProgressBar
            fontColor="#ffff"
            colorCircle="#e6e6e6"
            linearGradient={["#7a48cd", "#f75051"]}
            percent={70}
            textPosition="1.5em"
            fontSize="1em"
            round
          >
            <img
              title="MongoDB"
              alt="MongoDB"
              src={mongodbImg}
              style={{
                borderRadius: "50%",
                left: "50%",
                padding: "5px",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -80%)",
                width: "70px",
              }}
            />
          </CircularProgressBar>
        </div>
        <div className="relative w-fit mx-auto">
          <CircularProgressBar
            fontColor="#ffff"
            colorCircle="#e6e6e6"
            linearGradient={["#7a48cd", "#f75051"]}
            percent={65}
            textPosition="1.5em"
            fontSize="1em"
            round
          >
            <img
              title="Firebase"
              alt="Firebase"
              src={firebaseImg}
              style={{
                borderRadius: "50%",
                left: "50%",
                padding: "5px",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -80%)",
                width: "70px",
              }}
            />
          </CircularProgressBar>
        </div>
        <div className="relative w-fit mx-auto">
          <CircularProgressBar
            fontColor="#ffff"
            colorCircle="#e6e6e6"
            linearGradient={["#7a48cd", "#f75051"]}
            percent={70}
            textPosition="1.5em"
            fontSize="1em"
            round
          >
            <img
              title="Express-Js"
              alt="Express-Js"
              src={expressImg}
              style={{
                borderRadius: "50%",
                left: "50%",
                padding: "5px",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -80%)",
                width: "70px",
              }}
            />
          </CircularProgressBar>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
