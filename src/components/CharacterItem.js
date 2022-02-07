import React from "react";


// TODO bookmark


function CharacterItem({item}) {
    return (
        <div className="character-item">
            <div className="character-item__inner">
                <div className="character-item__img-wrapper">
                    <img className="character-item__img" src={item.thumbnail.path + "/portrait_fantastic.jpg"} alt="Character profile" />
                </div>
                <div className="character-item__name-wrapper">
                    <h3 className="character-item__name">{item.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;