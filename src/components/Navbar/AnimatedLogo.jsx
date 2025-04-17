import { useState, useEffect } from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const skills = [
  {
    text: "Full Stack Developer",
    color: "text-emerald-400",
    icon: FaCode,
    bgColor: "bg-emerald-400/10",
    iconColor: "text-emerald-400",
  },

  {
    text: "React Developer",
    color: "text-blue-400",
    icon: SiReact,
    bgColor: "bg-blue-400/10",
    iconColor: "text-blue-400",
  },
  {
    text: "MERN Stack Developer",
    color: "text-green-400",
    icon: SiNodedotjs,
    bgColor: "bg-green-400/10",
    iconColor: "text-green-400",
  },
  {
    text: "Next.js Developer",
    color: "text-white",
    icon: SiNextdotjs,
    bgColor: "bg-white/10",
    iconColor: "text-white",
  },
  {
    text: "TypeScript Developer",
    color: "text-blue-500",
    icon: SiTypescript,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
];

const AnimatedLogo = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = skills[currentIndex].icon;

  return (
    <div
      onClick={() => navigate("/")}
      className="flex items-center gap-3 cursor-pointer"
    >
      <div
        className={`w-12 h-12 rounded-full ${skills[currentIndex].bgColor} flex items-center justify-center transition-all duration-500`}
      >
        <CurrentIcon
          className={`w-6 h-6 ${skills[currentIndex].iconColor} transition-all duration-500`}
        />
      </div>
      <div className="flex flex-col">
        <h1
          style={{ fontFamily: "Austina", fontSize: "20px" }}
          className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent"
        >
          Sabbir Hossain
        </h1>
        <span
          className={`text-sm font-medium ${skills[currentIndex].color} transition-colors duration-500`}
        >
          {skills[currentIndex].text}
        </span>
      </div>
    </div>
  );
};

export default AnimatedLogo;
