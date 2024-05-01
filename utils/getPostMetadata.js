import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (basePath) => {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get file data
  let posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      content_type: matterResult.data.content_type,
      topic: matterResult.data.topic,
      category: matterResult.data.category,
      sub_category: matterResult.data.sub_category,
      status: matterResult.data.status,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
    };
  });

  // posts = posts.filter((post) => post.status !== "draft");

  return posts;
};

export default getPostMetadata;
