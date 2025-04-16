import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import Intro from "../../components/Intro/Intro";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
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
        <div className="pt-20">
          <Experience />
        </div>
        <div className="pt-20">
          <Skills />
        </div>
        <div className="pt-20">
          <Portfolio />
        </div>
      </Container>
      <div>
        {" "}
        <Contact />
      </div>
    </div>
  );
};

export default Home;
