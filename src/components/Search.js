import React from "react";

function Search() {
    return(
        <div className="t">
            <div className="search">
                <div className="search__wrapper container">
                    <form method="GET" className="search__form">
                        <input className="search__input" type="text" placeholder="Enter Text" autoFocus/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;