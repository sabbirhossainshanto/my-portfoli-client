import { Helmet } from "react-helmet-async";
import Container from "../../../components/Container/Container";
import Intro from "../Intro/Intro";

const Home = () => {
  return (
    <div>
      <Container>
        <Helmet>
          <title>Sabbir Portfolio - Intro</title>
        </Helmet>
        <Intro />
      </Container>
    </div>
  );
};

export default Home;
