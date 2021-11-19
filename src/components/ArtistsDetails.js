import { makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const drawerWidth = 200

const useStyles = makeStyles({
  bioData: {
    width: `calc(100% - ${drawerWidth}px)`,
    paddingTop: '100px',
    paddingLeft: '200px',
    textAlign: 'center'
  }
})


function ArtistsDetails () {

    const classes = useStyles()



    const [artist, setArtist] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const {name, genre, youtube='https://www.youtube.com/watch?v=dQw4w9WgXcQ', image, bio} = artist
    const artistId = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:3000/artists/${artistId}`)
        .then(response => response.json())
        .then(data => {setArtist(data) 
            setIsLoaded(true)})
    }, [artistId])

    if(!isLoaded) return <div>Loading...</div> 

    return(
        <div className={classes.bioData}>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h3>{genre}</h3>
            <p>{bio}</p>
            <iframe src={youtube}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );

}

export default ArtistsDetails;