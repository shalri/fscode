import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (basePath) => {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      topic: matterResult.data.topic,
      category: matterResult.data.category,
      sub_category: matterResult.data.sub_category,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
};

export default getPostMetadata;
