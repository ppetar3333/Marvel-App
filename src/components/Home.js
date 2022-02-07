import React from "react";
import ApiCalls from "./ApiCalls";
import Search from "./Search";

function Home() {

    return (
        <section className="home">
            <div className="home__wrapper container">
                <Search />
                <ApiCalls />
            </div>
        </section>
    )

}

export default Home;