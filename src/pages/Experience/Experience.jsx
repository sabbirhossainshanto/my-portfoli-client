import { Helmet } from "react-helmet-async";
import { useGetAllExperience } from "../../hooks/experience";
import moment from "moment";

const Experience = () => {
  const { data } = useGetAllExperience();

  const sortByDate = data?.data?.sort(
    (a, b) => new Date(b.joinDate) - new Date(a.joinDate)
  );

  return (
    <>
      <Helmet>
        <title>Sabbir Portfolio - Portfolios</title>
      </Helmet>
      <div data-aos="fade-right" data-aos-duration="1000">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
          <span className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-base md:text-lg">
            🚀
          </span>
          Experience
        </h2>

        <div className=" pb-7 grid grid-cols-1 gap-5">
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
    </>
  );
};

export default Experience;
