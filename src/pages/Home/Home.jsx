import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import Intro from "../../components/Intro/Intro";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
// import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";

const Home = () => {
  return (
    <div>
      <Container>
        <Helmet>
          <title>Sabbir Portfolio - Intro</title>
        </Helmet>
        <Intro />
        <div className="py-10">
          {" "}
          <Skills />
        </div>
        <div className="py-10">
          {" "}
          <Portfolio />
        </div>
        <div className="py-10">
          {" "}
          <Experience />
        </div>

        {/* <div className="py-10">
          {" "}
          <About />
        </div> */}
        <div>
          {" "}
          <Contact />
        </div>
      </Container>
    </div>
  );
};

export default Home;
