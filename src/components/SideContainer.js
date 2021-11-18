
import FavoriteList from './FavoriteList'



function SideContainer ({artists}) {

    const {liked} = artists

    const filteredArtists = artists.filter(artist => (liked ? !artist.liked: artist.liked))
    const displayCurrentFavorite = filteredArtists.map((artistObj) => (<FavoriteList key={artistObj.id} id={artistObj.id} name={artistObj.name} liked={artistObj.liked}/>))
    



    return (
       <div>
           {displayCurrentFavorite}
       </div>
    );
}

export default SideContainer;
