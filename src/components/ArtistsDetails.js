import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ArtistsDetails () {


    const [artist, setArtist] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const {name, genre, youtube, image, bio} = artist
    const id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:3000/artists/${id}`)
        .then(response => response.json())
        .then(data => {setArtist(data) 
            setIsLoaded(true)})
    }, [])

    if(!isLoaded) return <div>Loading...</div> 

    return(
        <div>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h3>{genre}</h3>
            <p>{bio}</p>
            <p>{youtube}</p>
        </div>
    );

}

export default ArtistsDetails;