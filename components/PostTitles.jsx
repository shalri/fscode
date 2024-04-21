import Link from "next/link";

const PostTitles = (props) => {
  const { post } = props;
  return (
    <Link href={`/post/${post.slug}`}>
      <span className="md-h1"># </span>
      <span className="hover:text-yellow-fs transition-colors duration-300">
        {post.title}
      </span>
    </Link>
  );
};
export default PostTitles;
