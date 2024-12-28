import { FormAddPost } from "./FormAddPosts";
 import { Posts } from "./Posts";

export function Main({ PostContext }) {

    return (
      <main>
        <FormAddPost PostContext={PostContext} />
        <Posts PostContext={PostContext}/>
      </main>
    );
  }