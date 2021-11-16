
import FavoriteList from './FavoriteList'



function SideContainer ({props}) {
    console.log(props)
    // const displayCurrentFavorite = favoriteArtists.map((artistObj) =>  // (<FavoriteList name={artistObj.name} liked={artistObj.liked}/>))
     


    return (
       <div>
           <FavoriteList />
           {/* {displayCurrentFavorite} */}
       </div>
    );
}

export default SideContainer;
