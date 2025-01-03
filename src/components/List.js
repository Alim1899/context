export function List({ usePosts }) {
  const  posts  = usePosts();
  return (
    <ul>
      {posts.posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
