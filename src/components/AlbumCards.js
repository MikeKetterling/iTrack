


function AlbumCards ({name, image, genre, youtube, liked, bio}) {
    return (
        <div className= 'albumCard'>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <button>Like</button>
        </div>
    );
}

export default AlbumCards;