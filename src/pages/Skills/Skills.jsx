import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
// import { useGetAllSkill } from "../../hooks/skill";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  // const { data } = useGetAllSkill();

  const frontendSkills = [
    { name: "Java Script", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Redux", icon: SiRedux },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    // { name: "Hero UI", icon: "/icon/heroui.svg" },
    // { name: "Shadcn Ui", icon: "/icon/shadcn.png" },
    { name: "Material UI", icon: SiMui },
  ];

  const backendSkills = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
    { name: "REST API", icon: SiNodedotjs },
  ];

  const toolsSkills = [
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Figma", icon: SiFigma },
    { name: "Adobe XD", icon: SiAdobexd },
    { name: "Photoshop", icon: SiAdobephotoshop },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-full">
      <Helmet>
        <title>Sabbir Portfolio - Skills</title>
      </Helmet>

      <motion.section variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
          <span className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-base md:text-lg">
            🚀
          </span>
          Skills
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <motion.div
            className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg md:text-xl font-medium text-white mb-3 md:mb-4">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-white/80 text-xs md:text-sm border border-white/10 flex items-center gap-1.5 md:gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.image && (
                    <img
                      src={skill.icon}
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                    />
                  )}
                  {!skill.image && (
                    <skill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  )}

                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg md:text-xl font-medium text-white mb-3 md:mb-4">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-white/80 text-xs md:text-sm border border-white/10 flex items-center gap-1.5 md:gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <skill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg md:text-xl font-medium text-white mb-3 md:mb-4">
              Tools & Others
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-white/80 text-xs md:text-sm border border-white/10 flex items-center gap-1.5 md:gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <skill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;
