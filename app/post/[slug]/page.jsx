import Markdown from "markdown-to-jsx";
import getPostMetadata from "@utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";

function getPostContent(slug) {
  const folder = "_posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("_posts");
  return posts.map((post) => ({ slug: post.slug }));
};

// export const metadata = {
//   title: "Notes",
// };

export default function PostPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <article className="prose prose-invert m-auto">
      <Markdown>{post.content}</Markdown>
    </article>
  );
}
