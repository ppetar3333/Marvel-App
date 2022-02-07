import React from "react";
import ReactLoading from "react-loading";

function Loading() {
    return(
        <section className="loading">
            <div className="loading__wrapper">
                <h3 className="loading__title">Loading</h3>
                <div className="loading__cirle">
                    <ReactLoading type="spinningBubbles" color="#fff" />
                </div>
            </div>
        </section>
    )
}

export default Loading;