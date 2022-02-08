import React from "react";
import ApiCalls from "./ApiCalls";
import Search from "./Search";
import { useState, useEffect } from "react";
import NoResult from "./NoResult";
import BookmarkItems from "./BookmarkItems";

function Home() {
  const [query, setQuery] = useState("");
  let localStorageItem = JSON.parse(localStorage.getItem('character'));

  useEffect(() => {
    if(query.length > 0) {
      console.log('User is typing..')
    } else {
      console.log('Nothing in input...')
      if(localStorageItem != null && localStorageItem.length > 0) {
        console.log('Nothing in input, but have bookmarks')
      }
    }
  }, [query, localStorageItem])

  return (
    <section className="home">
      <div className="home__wrapper container">
        <Search search={(q) => setQuery(q)} />
        {(query.length > 0 && <ApiCalls query={query} />) || <NoResult />}
      </div>
    </section>
  );
}

export default Home;
