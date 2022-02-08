import React from "react";

function CharacterItem({ item }) {
  return (
    <>
      <div className="character-item__img-wrapper">
        <img
          className="character-item__img"
          src={item.thumbnail.path + "/portrait_fantastic.jpg"}
          alt="Character profile"
        />
      </div>
      <div className="character-item__name-wrapper">
        <h3 className="character-item__name">{item.name}</h3>
      </div>
    </>
  );
}

export default CharacterItem;
