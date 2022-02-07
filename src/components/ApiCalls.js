import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";

// ova komponenta ce da ima svu komunikaciju sa API-om
// a iz api managera cu da stupim u kontakt sa ovom komponentom
// ubaciti skeletone kada nema podataka, tipa za loading da bude if(!data.length){ return <Loader /> } 

function ApiCalls() {

    const publicKey = '6d7aab5601c8a0bbdd3257a767ebe99c';
    const hash = '71ce173a5e21e2177af828d78fe87f23'; // generated with md5.cz

    const [characters, setCharacters] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getCharacters = async (limit) => {
        const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&limit=${limit}&apikey=${publicKey}&hash=${hash}`);
        setCharacters(response.data.data.results);
        setLoading(false);
    }

    useEffect(() => {
        getCharacters(20);
    },[])

    console.log(characters);
    
    return(
        <div>
            <h1>ApiCalls</h1>
        </div>
    )
}

export default ApiCalls;