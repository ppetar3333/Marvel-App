import React from "react";
import Loading from './Loading';
import CharacterItem from "./CharacterItem";

function CharacterCard({items, isLoading}) {
    return isLoading ? <Loading /> :
    <section className="character-card">
        <div className="character-card__wrapper container">
            {
                items.map((item) => (
                    <CharacterItem key={item.id} item={item} />
                ))
            }
        </div>
    </section>
}

export default CharacterCard;