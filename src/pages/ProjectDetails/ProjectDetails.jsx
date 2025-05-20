import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useGetSingleProject } from "../../hooks/project";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useGetSingleProject(id);
  const {
    title,
    technologies,
    backendGithubLink,
    // backendLiveLink,
    details,
    frontendGithubLink,
    frontendLiveLink,
    image,
    overview,
    // type,
  } = data?.data || {};

  const techs = technologies?.[0]?.split(" ");
  return (
    <Container>
      <div className="pt-20">
        <div
          className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8"
          style={{ opacity: 1, willChange: "opacity" }}
        >
          <div
            className="mb-10 relative"
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1
                  className="text-xl md:text-2xl font-bold text-warning mb-2"
                  style={{
                    opacity: 1,
                    willChange: "opacity, transform",
                    transform: "none",
                  }}
                >
                  {title}
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row gap-10"
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
            }}
          >
            <div
              className="lg:w-3/5 flex flex-col space-y-4"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
              }}
            >
              <div
                className="relative rounded-xl overflow-hidden bg-default-800 shadow-2xl"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                }}
              >
                <div
                  className="aspect-video relative"
                  style={{
                    opacity: 1,
                    willChange: "opacity, transform",
                    transform: "none",
                  }}
                >
                  <img
                    alt="Travel Tips & Destination Guides - image 3"
                    decoding="async"
                    data-nimg="fill"
                    className="rounded-lg object-cover"
                    src={image}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
              </div>

              <div
                className="mt-6 bg-default-100/50 p-6 rounded-xl border border-default-100"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                }}
              >
                <h2 className="text-xl font-bold mb-4 text-warning">
                  Project Overview
                </h2>
                <p className="text-default-500 leading-relaxed mb-4">
                  {overview}
                </p>
                <p className="text-default-500 leading-relaxed">{details}</p>
              </div>
            </div>
            <div
              className="lg:w-2/5"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
              }}
            >
              <div
                className="bg-default-100/50 p-6 rounded-xl border border-default-100 sticky top-4"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                }}
              >
                <div
                  style={{
                    opacity: 1,
                    willChange: "opacity, transform",
                    transform: "none",
                  }}
                >
                  <h2 className="text-xl font-bold mb-4 text-warning">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techs?.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-white/[0.08] px-4 py-2.5 rounded-xl min-w-max"
                      >
                        <span className="text-white/80">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="mb-6"
                  style={{
                    opacity: 1,
                    willChange: "opacity, transform",
                    transform: "none",
                  }}
                >
                  <h2 className="text-xl font-bold mb-4 text-warning">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    <li
                      className="flex items-start gap-3"
                      style={{
                        opacity: 1,
                        willChange: "opacity, transform",
                        transform: "none",
                      }}
                    >
                      <span className="text-warning mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-default-500">
                        Responsive Design
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3"
                      style={{
                        opacity: 1,
                        willChange: "opacity, transform",
                        transform: "none",
                      }}
                    >
                      <span className="text-warning mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-default-500">
                        Real-time Updates
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3"
                      style={{
                        opacity: 1,
                        willChange: "opacity, transform",
                        transform: "none",
                      }}
                    >
                      <span className="text-warning mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-default-500">
                        User Authentication
                      </span>
                    </li>
                    <li
                      className="flex items-start gap-3"
                      style={{
                        opacity: 1,
                        willChange: "opacity, transform",
                        transform: "none",
                      }}
                    >
                      <span className="text-warning mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-default-500">
                        Data Visualization
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className="space-y-4"
                  style={{
                    opacity: 1,
                    willChange: "opacity, transform",
                    transform: "none",
                  }}
                >
                  <h2 className="text-xl font-bold mb-4 text-warning">
                    Project Links
                  </h2>
                  <div
                    className="grid grid-cols-1 gap-3"
                    style={{
                      opacity: 1,
                      willChange: "opacity, transform",
                      transform: "none",
                    }}
                  >
                    <div className="my-3 flex items-center justify-center">
                      <div
                        className="relative"
                        tabIndex={0}
                        style={{ transform: "none" }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center overflow-visible" />
                        <div className="rounded-full overflow-hidden">
                          <Link
                            to={frontendLiveLink}
                            className="flex items-center gap-2.5 rounded-full 
      px-5 py-2.5 text-base 
      bg-white/[0.08] text-white border-none 
      font-semibold transition-all duration-300 relative overflow-hidden"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                              style={{
                                width: "200%",
                                left: "-100%",
                                top: "0px",
                                height: "100%",
                              }}
                            />
                            <span className="relative">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 1024 1024"
                                className="text-xl"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                              </svg>
                            </span>
                            <span className="relative">View Live Demo</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="my-3 flex items-center justify-center">
                      <div
                        className="relative"
                        tabIndex={0}
                        style={{ transform: "none" }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center overflow-visible" />
                        <div className="rounded-full overflow-hidden">
                          <Link
                            to={frontendGithubLink}
                            className="flex items-center gap-2.5 rounded-full 
      px-5 py-2.5 text-base 
     bg-white/[0.08] text-white border-none 
      font-semibold transition-all duration-300 relative overflow-hidden"
                          >
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                              style={{
                                width: "200%",
                                left: "-100%",
                                top: "0px",
                                height: "100%",
                              }}
                            />
                            <span className="relative">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 496 512"
                                className="text-xl"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                              </svg>
                            </span>
                            <span className="relative">
                              Frontend Repository
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="my-3 flex items-center justify-center">
                      <div
                        className="relative"
                        tabIndex={0}
                        style={{ transform: "none" }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center overflow-visible" />
                        <div className="rounded-full overflow-hidden">
                          <Link
                            className="flex items-center gap-2.5 rounded-full 
      px-5 py-2.5 text-base 
      bg-white/[0.08] text-white border-none 
      font-semibold transition-all duration-300 relative overflow-hidden"
                            target="_blank"
                            to={backendGithubLink}
                          >
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                              style={{
                                width: "200%",
                                left: "-100%",
                                top: "0px",
                                height: "100%",
                              }}
                            />
                            <span className="relative">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 496 512"
                                className="text-xl"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                              </svg>
                            </span>
                            <span className="relative">Backend Repository</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
