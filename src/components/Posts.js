import { List } from "./List";

 export function Posts({ usePosts }) {
      return (
      <section>
        <List usePosts={usePosts} />
      </section>
    );
  }
  