import { FormAddPost } from "./FormAddPosts";
 import { Posts } from "./Posts";

export function Main({ usePosts }) {

    return (
      <main>
        <FormAddPost usePosts={usePosts} />
        <Posts usePosts={usePosts}/>
      </main>
    );
  }