import Link from "next/link";

const PostTitles = (props) => {
  const { post } = props;
  return (
    <Link href={`/post/${post.slug}`}>
      <span className="md-h1"># </span>
      <span className="transition-colors duration-300 hover:text-yellow-fs">
        {post.title}
      </span>
    </Link>
  );
};
export default PostTitles;
