import { useContext } from "react";

export function List({ PostContext }) {
  const {posts} =  useContext(PostContext) 
   return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
