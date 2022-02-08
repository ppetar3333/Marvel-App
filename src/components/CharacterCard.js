import React from "react";
import Loading from "./Loading";
import CharacterItem from "./CharacterItem";
import AddToLocalStorage from "./AddCharacter";

function CharacterCard({ items, isLoading }) {
  const addItem = AddToLocalStorage();

  return isLoading ? (
    <Loading />
  ) : (
    <section className="character-card">
      <div className="character-card__wrapper container">
        {items.map((item) => (
          <div className="character-item">
            <div className="character-item__info">
              <CharacterItem item={item} />
            </div>
            <div className="character-item__bookmark-wrapper">
              <button
                onClick={() => addItem(item)}
                type="button"
                className="character-item__bookmark"
              >
                Bookmark
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CharacterCard;
