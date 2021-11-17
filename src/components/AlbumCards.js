
import {Link} from 'react-router-dom'


function AlbumCards ({artist, handleUpdateLike}) {
    const {id, name, image, liked} = artist

    
 

    return (
        <div className= 'albumCard'>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <button onClick={() => handleUpdateLike(artist)}>{liked?'♥':'♡'}</button>
            <Link to={`/artists/${id}`}>Click for Details</Link>
        </div>
        
    );
}

export default AlbumCards;
