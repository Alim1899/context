import { Results } from "./Results";
import { SearchPosts } from "./SearchPosts";

export function Header({ usePosts }) {
  const { onClearPosts } = usePosts();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results usePosts={usePosts} />
        <SearchPosts usePosts={usePosts} />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
