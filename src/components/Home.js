import React from "react";
import ApiCalls from "./ApiCalls";
import Search from "./Search";
import { useState } from 'react';
import NoResult from './NoResult';

function Home() {

    const [query, setQuery] = useState('');

    return (
        <section className="home">
            <div className="home__wrapper container">
                <Search search={(q) => setQuery(q)}/>
                { query.length > 0 && <ApiCalls query={query} /> || <NoResult /> } 
            </div>
        </section>
    )

}

export default Home;