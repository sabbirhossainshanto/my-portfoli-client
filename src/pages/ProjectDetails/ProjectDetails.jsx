import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useGetSingleProject } from "../../hooks/project";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleProject(id);
  const {
    title,
    technologies,
    backendGithubLink,
    backendLiveLink,
    details,
    frontendGithubLink,
    frontendLiveLink,
    image,
    overview,
    type,
  } = data?.data || {};
  return (
    <Container>
      <div className="grid grid-cols-12  gap-5 pt-10">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={` h-[80vh] w-full bg-cover bg-top hover:bg-bottom duration-[5s] rounded-t-md col-span-12 md:col-span-5`}
        >
          .
        </div>
        {/* <img className="md:w-1/2" src={image} alt="" /> */}
        <div className="col-span-12 md:col-span-7 text-gray-200 text-lg space-y-4">
          <h1 className="text-xl md:text-2xl font-medium">Title: {title}</h1>
          <p className="text-base md:text-xl">
            Technologies:{" "}
            {technologies?.map((t, idx) => {
              return <span key={idx}>{t}</span>;
            })}
          </p>
          <p className="text-base md:text-xl">Type: {type}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-base md:text-xl">
            <Link
              className="text-green-600 underline"
              target="_blank"
              to={frontendLiveLink}
            >
              Frontend Live Link
            </Link>
            <Link
              className="text-green-600 underline"
              target="_blank"
              to={frontendGithubLink}
            >
              Frontend Github Link
            </Link>
            <Link
              className="text-green-600 underline"
              target="_blank"
              to={backendLiveLink}
            >
              Backend Github Link
            </Link>
            <Link
              className="text-green-600 underline"
              target="_blank"
              to={backendGithubLink}
            >
              Backend Live Link
            </Link>
          </div>

          <p className="mt-3 text-base md:text-xl">Overview: {overview}</p>
          <p className="mt-3 text-base md:text-xl">Details: {details}</p>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
