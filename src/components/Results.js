import { useContext } from "react";

export function Results({ PostContext }) {
  const {posts} =  useContext(PostContext)
  return <p>🚀 {posts.length} atomic posts found</p>;
}
