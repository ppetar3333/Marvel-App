import React from "react";
import { useState } from 'react';

function CharacterItem({item}) {

    const [character, setCharacter] = useState([]);

    let setItem = (item) => {
        localStorage.setItem('character', JSON.stringify(item));
    }

    return (
        <div className="character-item">
            <div className="character-item__inner">
                <div className="character-item__img-wrapper">
                    <img className="character-item__img" src={item.thumbnail.path + "/portrait_fantastic.jpg"} alt="Character profile" />
                </div>
                <div className="character-item__name-wrapper">
                    <h3 className="character-item__name">{item.name}</h3>
                </div>
                <div className="character-item__bookmark-wrapper">
                    <button onClick={() => setItem(item)} type="button" className="character-item__bookmark">Bookmark</button>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;