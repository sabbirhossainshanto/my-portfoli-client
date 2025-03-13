import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import { useGetAllExperience } from "../../hooks/experience";
import moment from "moment";

const Experience = () => {
  const { data } = useGetAllExperience();

  const sortByDate = data?.data?.sort(
    (a, b) => new Date(b.joinDate) - new Date(a.joinDate)
  );

  return (
    <Container>
      <Helmet>
        <title>Sabbir Portfolio - Portfolios</title>
      </Helmet>
      <div data-aos="fade-right" data-aos-duration="1000">
        <h1 className="font-bold text-2xl pt-10  lg:leading-tight sm:text-2xl md:text-4xl text-center text-gray-100 w-fit mx-auto font-Roboto">
          My{" "}
          <span className="animate-text text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 to-rose-700">
            Experience
          </span>
        </h1>

        <div className="pt-10 pb-7 grid grid-cols-1 gap-5">
          {sortByDate?.map((experience) => {
            return (
              <div
                key={experience?._id}
                className="bg-[#0b0b0c] rounded-md  p-3  text-white"
              >
                <div className="md:flex  gap-5 w-full">
                  <div className="md:max-w-[150px]">
                    <img
                      className="rounded-sm"
                      loading="lazy"
                      src={experience?.companyPhoto}
                      alt="companyPhoto"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="md:flex  justify-between">
                      <div>
                        <h5 className="text-2xl font-semibold">
                          {experience?.role}
                        </h5>
                        <p className="text-lg">{experience?.companyName}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <h3>
                          {moment(experience?.joinDate).format("MMM YYYY")} -
                          {experience?.companyName === "Seven Book"
                            ? "Present"
                            : moment(experience?.resignDate).format("MMM YYYY")}
                        </h3>
                        <h3>{experience?.location}</h3>
                      </div>
                    </div>
                    <p className="text-sm max-w-[100ch]">
                      {experience?.responsibilities}
                    </p>
                    <p className="text-sm max-w-[100ch]">
                      {experience?.technologiesUsed}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Experience;
