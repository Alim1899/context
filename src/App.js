import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import { Main } from "./components/Main";
import { Archive } from "./components/Archive";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PostProvider, usePosts } from "./PostContext";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <PostProvider>
        <Header usePosts={usePosts} />
        <Main usePosts={usePosts} />
        <Archive usePosts={usePosts} createRandomPost={createRandomPost} />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
