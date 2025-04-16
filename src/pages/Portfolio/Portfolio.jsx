import { Link } from "react-router-dom";
import "./portfolio.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { useGetAllProject } from "../../hooks/project";

const Portfolio = () => {
  const { data } = useGetAllProject();

  return (
    <>
      <Helmet>
        <title>Sabbir Portfolio - Portfolios</title>
      </Helmet>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
        <span className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-base md:text-lg">
          🚀
        </span>
        Projects
      </h2>

      <div className=" pb-7 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.data?.map((project) => {
          return (
            <div
              key={project?._id}
              data-aos="fade-right"
              data-aos-duration="1000"
              className="shadow-md shadow-rose-500 hover:shadow-lg hover:shadow-rose-700 transition rounded-t-lg rounded-b-md group"
            >
              <div
                style={{ backgroundImage: `url(${project?.image})` }}
                className={` h-60 w-full bg-cover bg-top hover:bg-bottom duration-[5s] rounded-t-md`}
              ></div>
              <div className="h-28 box-border">
                <div className="rounded-b-md pb-4 group-hover:hidden">
                  <h4 className="bg-gradient-to-r from-indigo-700 to-rose-800  bg-clip-text text-transparent font-bold text-2xl text-center pt-4 pb-2">
                    {project?.title}
                  </h4>
                  <p className="text-xl text-center  text-gray-200">
                    {project?.type}
                  </p>
                </div>
                <div className="hidden  duration-300 group-hover:block bottom-0 pb-4">
                  <p className="text-center text-base text-gray-200 pt-4 pb-2">
                    Technology :{" "}
                    <span className="text-rose-700 font-semibold text-base">
                      {project?.technologies}
                    </span>
                  </p>
                  <div className="flex justify-center items-center gap-4">
                    <Link to={`/project-details/${project?._id}`}>
                      {" "}
                      <p className="text-gray-200 text-base border border-rose-600 px-2 rounded-md flex justify-center items-center space-x-2  cursor-pointer bg-gradient-to-r from-indigo-900 to-rose-900">
                        <BsFillEyeFill /> <span>Details</span>
                      </p>
                    </Link>
                    <Link target="_blank" to={project?.frontendGithubLink}>
                      {" "}
                      <p className="text-gray-200 text-base border border-rose-600 px-2 rounded-md flex justify-center items-center space-x-2  cursor-pointer bg-gradient-to-r from-indigo-900 to-rose-900">
                        <AiOutlineGithub /> <span>GITHUB</span>
                      </p>
                    </Link>
                    <Link target="_blank" to={project?.frontendLiveLink}>
                      <p className="text-gray-200 text-base border border-rose-600 px-2 rounded-md flex justify-center items-center space-x-2  cursor-pointer bg-gradient-to-r from-indigo-900 to-rose-900">
                        <BsFillEyeFill /> <span>LIVE SITE</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
