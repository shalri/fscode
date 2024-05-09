import PostTitles from "@/components/PostTitles";
import getPostMetadata from "@/utils/getPostMetadata";

const Home = () => {
  const postMetadata = getPostMetadata("_posts");
  return (
    <main
      id="home"
      className="m-auto flex h-full w-full flex-grow px-10 py-32 lg:w-[1000px]"
    >
      <div className="flex flex-col font-jbmono">
        <h2 className="mb-2 opacity-70">
          <span className="opacity-25">./</span>Notes
          <span className="opacity-25">/</span>
        </h2>
        {postMetadata.map(
          (post, postIndex) =>
            post.status !== "draft" && (
              <PostTitles key={postIndex} post={post} />
            ),
        )}
      </div>
    </main>
  );
};
export default Home;
