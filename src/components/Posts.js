import { List } from "./List";

 export function Posts({ PostContext }) {
      return (
      <section>
        <List PostContext={PostContext} />
      </section>
    );
  }
  