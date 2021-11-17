import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ArtistsDetails () {


    const [artist, setArtist] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const {name, genre, youtube, image, bio} = artist
    const artistId = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:3001/artists/${artistId}`)
        .then(response => response.json())
        .then(data => {setArtist(data) 
            setIsLoaded(true)})
    }, [artistId])

    if(!isLoaded) return <div>Loading...</div> 

    return(
        <div>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h3>{genre}</h3>
            <p>{bio}</p>
            <iframe src={youtube}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );

}

export default ArtistsDetails;