import { useParams } from "react-router-dom";
import { useGetSingleBlog } from "../../hooks/blog";
import Container from "../../components/Container/Container";

const SingleBlog = () => {
  const { blogId } = useParams();
  const { data } = useGetSingleBlog(blogId);
  console.log(data);
  return (
    <Container>
      <h1 className="text-white my-10 text-xl md:text-4xl">
        {data?.data?.title}
      </h1>
      <img
        className="rounded-md h-full max-h-[80vh] w-full my-10"
        src={data?.data?.imageUrl}
        alt=""
      />
      <p className="text-white text-lg md:text-2xl">
        {" "}
        {data?.data?.description}
      </p>
      <div
        className="text-white space-y-10 text-lg md:text-xl mt-20"
        dangerouslySetInnerHTML={{ __html: data?.data?.content }}
      />
    </Container>
  );
};

export default SingleBlog;
