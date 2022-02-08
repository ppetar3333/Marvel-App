import React from "react";
import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import NoResault from "./NoResult";

function BookmarkItems({ query }) {
  const [state, setState] = useState("");
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    getItems();
  }, [query]);

  const getItems = () => {
    setState(query);
    let item = localStorage.getItem("character");
    setStorage(JSON.parse(item));
  };

  if (storage != null) {
    return (
      <div>
        {storage && !!storage.length ? (
          <CharacterCard items={storage} />
        ) : (
          <NoResault />
        )}
      </div>
    );
  }
  return <NoResault />;
}

export default BookmarkItems;
