export function Results({ usePosts }) {
  const posts = usePosts();

  return <p>🚀 {posts.posts.length} atomic posts found</p>;
}
