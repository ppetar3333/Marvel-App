import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function ApiCalls({ query }) {
  const publicKey = "6d7aab5601c8a0bbdd3257a767ebe99c";
  const hash = "71ce173a5e21e2177af828d78fe87f23";

  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getCharacters = async (limit) => {
    if (query !== "") {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&limit=${limit}&apikey=${publicKey}&hash=${hash}`
      );
      setCharacters(response.data.data.results);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters(20);
  }, [query]);

  return (
    <div>
      <CharacterCard items={characters} isLoading={isLoading} />
    </div>
  );
}

export default ApiCalls;
