import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import { useGetAllBlog } from "../../hooks/blog";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const { data } = useGetAllBlog();
  const navigate = useNavigate();

  return (
    <Container>
      <Helmet>
        <title>Sabbir Portfolio - Portfolios</title>
      </Helmet>
      <div data-aos="fade-right" data-aos-duration="1000">
        <h1 className="font-bold text-2xl pt-10  lg:leading-tight sm:text-2xl md:text-4xl text-center text-gray-100 w-fit mx-auto font-Roboto">
          My{" "}
          <span className="animate-text text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 to-rose-700">
            Blog
          </span>
        </h1>

        <div className="pt-10 pb-7 grid grid-cols-1 md:grid-cols-2 gap-10">
          {data?.data?.map((blog) => {
            return (
              <div
                onClick={() => navigate(`/blog/${blog?._id}`)}
                key={blog?._id}
                className="bg-[#0b0b0c] rounded-md  p-3  text-white"
              >
                <div className="md:flex flex-col w-full">
                  <div className="w-full">
                    <img
                      className="rounded-sm h-[50vh] w-full"
                      loading="lazy"
                      src={blog?.imageUrl}
                      alt="companyPhoto"
                    />
                  </div>
                  <div className="space-y-2 w-full py-4">
                    <div>
                      <h5 className="text-2xl font-semibold">{blog?.title}</h5>
                      <p className="text-lg mt-4">{blog?.description}</p>
                    </div>
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

export default Blog;
