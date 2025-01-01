import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "../../components/Container/Container";
import { BsFillTelephoneFill, BsFillSendFill } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub, AiOutlineMessage } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const forms = event.target;

    emailjs
      .sendForm(
        "service_0i40m28",
        "template_376251r",
        form.current,
        "9PDnV82XS60QjN1oD"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your Message Send Successfully");
          forms.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Helmet>
        <title>Sabbir Portfolio - Contact</title>
      </Helmet>

      <div>
        <h1 className="font-bold text-2xl pt-10  lg:leading-tight sm:text-3xl lg:text-4xl  text-center text-gray-100 w-fit mx-auto">
          Contact{" "}
          <span className="animate-text text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 to-rose-700">
            Me
          </span>
        </h1>
        <div className="bg-gray-900 px-2 py-1 rounded-md w-fit mx-auto mt-3 mb-5">
          <h2 className="animate-text text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 to-rose-700 font-medium text-xl ">
            Get In Touch
          </h2>
        </div>

        <div className="md:flex justify-between py-10 space-y-12 md:space-y-0">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full space-y-7"
          >
            <div className="text-xl text-white text-left">
              You can contact me at the places <br /> mentioned below. I will
              try to <br />
              get back to you as fast as I can.
            </div>
            <div className="flex items-center mt-8 gap-4">
              <a href="https://wa.me/+8801777051339" target="main">
                <div className="bg-gray-700 h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                  <img src="/src/assets/whatsapp.png" />
                </div>
              </a>

              <a href="https://www.linkedin.com/in/sabbirshanto/" target="main">
                <div className=" bg-[#0e76a8] h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                  <BiLogoLinkedin color="white" size={20} />
                </div>
              </a>
              <a
                href="https://www.facebook.com/sabbirhossen.santo/"
                target="main"
              >
                <div className=" bg-[#0e76a8] h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                  <FaFacebook color="white" size={20} />
                </div>
              </a>
              <a href="https://github.com/sabbirhossainshanto" target="main">
                <div className="bg-gray-700 h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                  <AiFillGithub color="white" size={20} />
                </div>
              </a>

              <a href="mailto:sabbirshnt@gmail.com">
                <div className=" bg-[#ea4335] h-10 w-10  flex items-center justify-center rounded-full cursor-pointer">
                  <AiOutlineMessage color="white" size={20} />
                </div>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full space-y-7"
          >
            <div className="flex items-center space-x-5  text-white">
              <div className="border border-rose-600 text-rose-600 rounded-full w-10 h-10 flex justify-center items-center">
                <BsFillTelephoneFill />
              </div>
              <div>
                <h6 className="text-2xl font-semibold">Contact Me</h6>
                <p>+8801777051339</p>
              </div>
            </div>
            <div className="flex  items-center space-x-5  text-white">
              <div className="border border-rose-600 text-rose-600 rounded-full w-10 h-10 flex justify-center items-center">
                <MdOutlineEmail />
              </div>
              <div>
                <h6 className="text-2xl font-semibold">Email</h6>
                <p>sabbirshnt@gmail.com</p>
              </div>
            </div>

            <div className="flex  items-center space-x-5  text-white">
              <div className="border border-rose-600 text-rose-600 rounded-full w-10 h-10 flex justify-center items-center">
                <CiLocationArrow1 />
              </div>
              <div>
                <h6 className="text-2xl font-semibold">Location</h6>
                <p>Naogoan , Bangladesh</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
            <form className="space-y-7" ref={form} onSubmit={sendEmail}>
              <input
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-transparent focus:outline-rose-500  bg-black text-gray-100"
                type="text"
                name="from_name"
                id=""
                placeholder="Name"
              />
              <input
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-transparent focus:outline-rose-500  bg-black text-gray-100"
                type="email"
                name="from_email"
                id=""
                placeholder="Email"
              />
              <textarea
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-transparent focus:outline-rose-500  bg-black text-gray-100"
                name="message"
                id=""
                cols="3"
                rows="3np"
                placeholder="Message"
              ></textarea>
              <button type="submit">
                <div className="border-2 border-rose-600 w-fit py-2 px-7 rounded-2xl text-2xl flex justify-center items-center space-x-4 hover:bg-gradient-to-r from-indigo-500 to-rose-500 hover:text-gray-100 group transition duration-300 ease-in-out ">
                  <input
                    type="submit"
                    value="Send Message"
                    className="animate-text text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 to-rose-500 font-medium group-hover:text-gray-100 transition duration-300 ease-in-out cursor-pointer"
                  />
                  <BsFillSendFill className="h-5 text-gray-200" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </Container>
  );
};

export default Contact;
