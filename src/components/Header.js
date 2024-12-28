import { useContext } from "react";
import { Results } from "./Results";
import { SearchPosts } from "./SearchPosts";

export function Header({ PostContext }) {
  const { onClearPosts } = useContext(PostContext);

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results PostContext={PostContext} />
        <SearchPosts PostContext={PostContext} />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
