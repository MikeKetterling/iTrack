
import {Link} from 'react-router-dom'


function AlbumCards ({id, name, image, genre, youtube, liked, bio, handleUpdateLike}) {
    //const [fav, setFav] = useState(false)

    // const handleLike = (artistObj) => {
    //     handleUpdateLike(artistObj)
    // }
 

    return (
        <div className= 'albumCard'>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <button onClick={handleUpdateLike}>{liked?'♥':'♡'}</button>
            <Link to={`/artists/${id}`}>Click for Details</Link>
        </div>
        
    );
}

export default AlbumCards;