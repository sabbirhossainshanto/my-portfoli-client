import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Lottie from "lottie-react";
import developerComputer from "../../../public/programming-computer.json";
import { Helmet } from "react-helmet-async";


const About = () => {
  return (
    <Container>
        <Helmet>
        <title>Sabbir Portfolio - About</title>
      </Helmet>

      <div className="pt-10">
      <h1 className="font-bold text-2xl lg:leading-tight sm:text-4xl lg:text-5xl lg:max-w-3xl text-center text-gray-100">
        About{" "}
        <span className="animate-text text-transparent bg-clip-text  bg-gradient-to-r from-[#7a48cd] to-[#f75051]">
          Me
        </span>
      </h1>
        <div className="flex flex-col npm justify-center md:flex-row   space-y-6 md:space-y-0 md:space-x-10 pt-10">
          <div className="space-y-4 w-full">
            <div className="text-xl text-gray-200">
              First Name : Sabbir Hossain
            </div>
            <div className="text-xl text-gray-200">Age : 22 Years</div>
            <div className="text-xl text-gray-200">Phone : +8801786869322</div>
            <div className="text-xl text-gray-200">
              Address : Naogoan Bangladesh
            </div>
            <div className="text-xl text-gray-200">
              Language : Bangla English Hindi
            </div>
          </div>

          <div className="space-y-4 w-full">
            <div className="text-xl text-gray-200">Last Name : Shanto</div>
            <div className="text-xl text-gray-200">Nationality : Bangladeshi</div>
            <div className="text-xl text-gray-200">Email : <Link to='mailto:sabbirshnt@gmail.com' className="text-green-600 hover:underline font-medium" >sabbirshnt@gmail.com</Link></div>
            <div className="text-xl text-gray-200">Github : <Link className="text-green-600 hover:underline font-medium" to='https://github.com/sabbirjiinat'>Sabbir Hossain</Link></div>
            <div className="text-xl text-gray-200">Linkedin : <Link className="text-green-600 hover:underline font-medium" to='https://www.linkedin.com/in/sabbir-hossain-shanto-24a744278/'>Sabbir Hossain</Link></div>
          </div>
          <div className="w-full">
          <Lottie animationData={developerComputer} loop={true} />;
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
