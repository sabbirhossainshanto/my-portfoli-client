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
      <div className="md:flex items-start justify-between gap-5 pt-10">
        <img className="md:w-1/2" src={image} alt="" />
        <div className="md:w-1/2 text-gray-200 text-lg space-y-4">
          <h1 className="text-2xl font-medium">Title: {title}</h1>
          <p className="text-xl">
            Technologies:{" "}
            {technologies?.map((t, idx) => {
              return <span key={idx}>{t}</span>;
            })}
          </p>
          <p className="text-xl">Type: {type}</p>
          <div className="flex gap-4">
            <span> Frontend Live :</span>
            <Link
              className="text-green-600"
              target="_blank"
              to={frontendLiveLink}
            >
              {frontendLiveLink}
            </Link>
          </div>
          <div className="flex gap-4">
            <span> Frontend Github :</span>
            <Link
              className="text-green-600"
              target="_blank"
              to={frontendGithubLink}
            >
              {frontendGithubLink}
            </Link>
          </div>
          <div className="flex gap-4">
            <span> Backend Live :</span>
            <Link
              className="text-green-600"
              target="_blank"
              to={backendLiveLink}
            >
              {backendGithubLink}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span> Backend Github :</span>
            <Link
              className="text-green-600"
              target="_blank"
              to={backendGithubLink}
            >
              {backendGithubLink}
            </Link>
          </div>
          <p className="mt-3">Overview: {overview}</p>
          <p className="mt-3">Details: {details}</p>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
