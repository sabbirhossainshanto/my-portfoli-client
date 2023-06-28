import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import ParticlesBg from "../../components/ParticlesBg";
import "./portfolio.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <Container>
      <ParticlesBg />
      <h1 className="font-bold text-2xl pt-10  lg:leading-tight sm:text-4xl lg:text-5xl lg:max-w-3xl text-center text-gray-100 w-fit mx-auto">
        My{" "}
        <span className="animate-text text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 to-rose-700">
          Portfolios
        </span>
      </h1>

      <div className="pt-10 pb-7 grid grid-cols-1 md:grid-cols-2 gap-6">



        <div className="shadow-md shadow-rose-500 hover:shadow-lg hover:shadow-rose-700 transition rounded-t-lg rounded-b-md group">
          <div className="summer-camp-bg h-60 w-full bg-cover bg-top hover:bg-bottom duration-[5s] rounded-t-md"></div>
          <div className="h-28 box-border">
            <div className="rounded-b-md pb-4 group-hover:hidden">
              <h4 className="bg-gradient-to-r from-indigo-700 to-rose-800  bg-clip-text text-transparent font-bold text-2xl text-center pt-4 pb-2">
                Summer Camp Sports
              </h4>
              <p className="text-gray-200 text-lg text-center">
                A MERN stack Sports Academies Website
              </p>
            </div>
            <div className="hidden  duration-300 group-hover:block bottom-0 pb-4">
              <p className="text-center text-base text-gray-200 pt-4 pb-2">
                Technology : React, React Router, Tailwind, MongoDB, Firebase,
                Express JS, Stripe JS{" "}
              </p>
              <div className="flex justify-center items-center gap-4">
                <Link to="https://github.com/sabbirjiinat/summer-camp-sports-academies-client-side">
                  {" "}
                  <p className="text-gray-200 text-base border border-rose-600 px-2 rounded-md flex justify-center items-center space-x-2  cursor-pointer bg-gradient-to-r from-indigo-900 to-rose-900">
                    <AiOutlineGithub /> <span>GITHUB</span>
                  </p>
                </Link>
                <Link to="https://summer-camp-sports-academies.web.app/">
                  <p className="text-gray-200 text-base border border-rose-600 px-2 rounded-md flex justify-center items-center space-x-2  cursor-pointer bg-gradient-to-r from-indigo-900 to-rose-900">
                    <BsFillEyeFill /> <span>LIVE SITE</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>



        <div className="shadow-md shadow-rose-500 hover:shadow-lg hover:shadow-rose-700 transition rounded-t-lg rounded-b-md group">
          <div className="toy-market-bg h-60 w-full bg-cover bg-top hover:bg-bottom duration-[5s] rounded-t-md"></div>
          <div className="h-28 box-border">
            <div className="rounded-b-md pb-4 group-hover:hidden">
              <h4 className="bg-gradient-to-r from-indigo-700 to-rose-800  bg-clip-text text-transparent font-bold text-2xl text-center pt-4 pb-2">
                Electronic Toy Market
              </h4>
              <p className="text-gray-200 text-lg text-center">
                A MERN stack Electronic Toy Website
              </p>
            </div>
            <div className="hidden  duration-300 group-hover:block bottom-0 pb-4">
              <p className="text-center text-base text-gray-200 pt-4 pb-2">
                Technology : React, React Router, Tailwind, MongoDB, Firebase,
                Express JS
              </p>
              <div className="flex justify-center items-center gap-4">
                <Link to="https://github.com/sabbirjiinat/toy-market-place-client-side">
                  {" "}
                  <p className="text-gray-200 text-base border border-rose-600 px-2 rounded-md flex justify-center items-center space-x-2  cursor-pointer bg-gradient-to-r from-indigo-900 to-rose-900">
                    <AiOutlineGithub /> <span>GITHUB</span>
                  </p>
                </Link>
                <Link to="https://electronic-toy-world-firebase.web.app/">
                  <p className="text-gray-200 text-base border border-rose-600 px-2 rounded-md flex justify-center items-center space-x-2  cursor-pointer bg-gradient-to-r from-indigo-900 to-rose-900">
                    <BsFillEyeFill /> <span>LIVE SITE</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>



        <div className="shadow-md shadow-rose-500 hover:shadow-lg hover:shadow-rose-700 transition rounded-t-lg rounded-b-md group">
          <div className="japanese-chef-bg h-60 w-full bg-cover bg-top hover:bg-bottom duration-[5s] rounded-t-md"></div>
          <div className="h-28 box-border">
            <div className="rounded-b-md pb-4 group-hover:hidden">
              <h4 className="bg-gradient-to-r from-indigo-700 to-rose-800  bg-clip-text text-transparent font-bold text-2xl text-center pt-4 pb-2">
                Japanese Chef Recipe
              </h4>
              <p className="text-gray-200 text-lg text-center">
                A React Firebase Auth Related Website
              </p>
            </div>
            <div className="hidden  duration-300 group-hover:block bottom-0 pb-4">
              <p className="text-center text-base text-gray-200 pt-4 pb-2">
                Technology : React, React Router, Tailwind, MongoDB, Firebase,
                Express JS
              </p>
              <div className="flex justify-center items-center gap-4">
                <Link to="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-sabbirjiinat">
                  {" "}
                  <p className="text-gray-200 text-base border border-rose-600 px-2 rounded-md flex justify-center items-center space-x-2  cursor-pointer bg-gradient-to-r from-indigo-900 to-rose-900">
                    <AiOutlineGithub /> <span>GITHUB</span>
                  </p>
                </Link>
                <Link to="https://japanese-chef-recipe-auth.web.app/">
                  <p className="text-gray-200 text-base border border-rose-600 px-2 rounded-md flex justify-center items-center space-x-2  cursor-pointer bg-gradient-to-r from-indigo-900 to-rose-900">
                    <BsFillEyeFill /> <span>LIVE SITE</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>




        



      </div>
    </Container>
  );
};

export default Portfolio;
