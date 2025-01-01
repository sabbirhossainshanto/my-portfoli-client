import Container from "../../components/Container/Container";
import { Helmet } from "react-helmet-async";
import skillBg from "../../../public/developer.json";
import Lottie from "lottie-react";

import { useGetAllSkill } from "../../hooks/skill";
const Skills = () => {
  const { data } = useGetAllSkill();

  return (
    <div className="w-full h-full mt-16">
      <Container>
        <Helmet>
          <title>Sabbir Portfolio - Skills</title>
        </Helmet>
        <div className="my-10">
          <h1 className="font-bold text-2xl pt-10  lg:leading-tight sm:text-2xl md:text-4xl text-center text-gray-100 w-fit mx-auto font-Roboto">
            {"Here's"} What I Do
          </h1>
        </div>
        <div className="800px:flex justify-between items-start w-full gap-4 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-20">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full 800px:w-[50vw] "
          >
            <Lottie animationData={skillBg} loop={true} />;
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full 800px:w-[50vw] mt-12 800px:mt-0 "
          >
            <div className="w-full text-center">
              <h1 className="text-3xl font-Roboto text-white font-semibold">
                Full Stack Development
              </h1>
            </div>

            <div className="grid grid-cols-3 800px:grid-cols-5 mt-10 gap-5">
              {data?.data?.map((skill) => {
                return (
                  <div
                    key={skill?._id}
                    className="bg-[#2c394b] p-3 flex flex-col"
                  >
                    <img className="cursor-pointer" src={skill?.image} alt="" />

                    <p className=" text-gray-300 px-1 rounded-md font-Roboto font-semibold mt-auto">
                      {skill?.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
