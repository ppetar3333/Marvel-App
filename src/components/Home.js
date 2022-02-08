import React from "react";
import Search from "./Search";
import { useState } from "react";
import ApiCalls from "./ApiCalls";
import BookmarkItems from "./BookmarkItems";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <section className="home">
      <div className="home__wrapper container">
        <Search search={(q) => setQuery(q)} />
        {query ? <ApiCalls query={query} /> : <BookmarkItems query={query}/> }
      </div>
    </section>
  );
}

export default Home;
