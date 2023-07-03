import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "../../components/Container/Container";
import ParticlesBg from "../../components/ParticlesBg";
import { BsFillTelephoneFill, BsFillSendFill } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';

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
          toast.success('Your Message Send Successfully')
          forms.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <div>
        <ParticlesBg />
        <h1 className="font-bold text-2xl pt-10  lg:leading-tight sm:text-4xl lg:text-5xl lg:max-w-3xl text-center text-gray-100 w-fit mx-auto">
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

        <div className="md:flex justify-center py-10 space-y-12 md:space-y-0">
          <div className="md:w-1/2 space-y-7">
            <div className="flex items-center space-x-5  text-white">
              <div className="border border-rose-600 text-rose-600 rounded-full w-10 h-10 flex justify-center items-center">
                <BsFillTelephoneFill />
              </div>
              <div>
                <h6 className="text-2xl font-semibold">Contact Me</h6>
                <p>+8801786869322</p>
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

          <div className="md:w-1/2">
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
      <Toaster/>
    </Container>
  );
};

export default Contact;
