import { useState } from 'react';
import {Link} from 'react-router-dom'


function AlbumCards ({id, name, image, genre, youtube, liked, bio}) {
    const [fav, setFav] = useState(false)

    const handleLike = () => {
        setFav((currentLike) => !currentLike)
    }
 

    return (
        <div className= 'albumCard'>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <button onClick={handleLike}>{fav?'♥':'♡'}</button>
            <Link to={`/artists/${id}`}>Click for Details</Link>
        </div>
        
    );
}

export default AlbumCards;