import { Link } from "react-router-dom";
import "./portfolio.css";
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

      <div className=" pb-7 grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.data?.map((project) => {
          return (
            <div
              key={project?._id}
              data-aos="fade-right"
              data-aos-duration="1000"
              className="border border-gray-800 transition rounded-t-lg rounded-b-md group"
            >
              <div
                style={{ backgroundImage: `url(${project?.image})` }}
                className={`h-60 w-full bg-cover bg-top hover:bg-bottom duration-[5s] rounded-t-md`}
              ></div>
              <div className="h-[220px] lg:h-[180px] box-border p-4">
                <div className="rounded-b-md pb-4">
                  <h4 className="font-bold text-2xl  pt-4 pb-2">
                    {project?.title}
                  </h4>
                  <p className="text-base  text-gray-200">
                    {project?.overview?.slice(0, 100)}...
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-3">
                    <Link
                      to={project?.frontendLiveLink}
                      target="_blank"
                      className="flex items-center justify-center size-6 md:size-8 rounded-full bg-default-100 text-default-700 hover:bg-default-200 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link size-3 md:size-4"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </Link>
                  </div>
                  <Link
                    className="flex items-center text-warning-500 font-medium hover:text-warning-600 transition-colors text-[10px] md:text-[12px]"
                    to={`/project-details/${project?._id}`}
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right ml-1 size-3 md:size-4 mt-0.5"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Link>
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
