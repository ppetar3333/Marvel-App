import React from "react";
import Loading from "./Loading";
import CharacterItem from "./CharacterItem";

function CharacterCard({ items, isLoading, bookmarked}) {
  const addItem = (item) => {
    let items = localStorage.getItem("character");

    let storage = JSON.parse(items);

    let newData = [];

    if (storage) {
      storage = storage.filter((data) => data.id !== item.id);
      newData = [...storage, item];
    } else {
      newData.push(item);
    }

    localStorage.setItem("character", JSON.stringify(newData));
  }

  return isLoading ? (
    <Loading />
  ) : (
    <section className="character-card">
      <div className="character-card__wrapper container">
        {items.map((item) => (
          <div key={item.id} className="character-item">
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
