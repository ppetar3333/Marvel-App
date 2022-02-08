import React from "react";
import { useState } from "react";

function AddToLocalStorage() {
  const [character, setCharacter] = useState([]);

  const addItem = (item) => {
    let characterCopy = [...character];

    let existingItem = characterCopy.find(
      (existing) => existing.id === item.id
    );

    if (!existingItem) {
      setCharacter([...character, item]);
    }
  };

  localStorage.setItem("character", JSON.stringify(character));
  return addItem;
}

export default AddToLocalStorage;
