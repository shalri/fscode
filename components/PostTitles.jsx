import Link from "next/link";

const PostTitles = (props) => {
  const { post } = props;
  return (
    <Link href={`/post/${post.slug}`}>
      <span className="md-h1"># </span>
      <span className="post-titles">{post.title}</span>
    </Link>
  );
};
export default PostTitles;
