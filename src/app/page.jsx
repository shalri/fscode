import PostTitles from "@/components/PostTitles";
import getPostMetadata from "@/utils/getPostMetadata";

const Home = () => {
  const postMetadata = getPostMetadata("_posts");
  // console.log(postMetadata);
  return (
    <main
      id="home"
      className="flex h-full flex-grow w-full lg:w-[1000px] m-auto px-10 py-20"
    >
      <div className="flex flex-col font-jbmono">
        <h2 className="mb-2">
          <span className="opacity-25">./</span>Notes
          <span className="opacity-25">/</span>
        </h2>
        {postMetadata.map((post, postIndex) => (
          <PostTitles key={postIndex} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
