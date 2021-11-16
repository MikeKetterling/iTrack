import Header from './Header';
import AlbumCards from './AlbumCards';
import Search from './Search';


function MainContainer ({props}) {

    const artist = props.map((propsObj) => <AlbumCards name={propsObj.name} genre={propsObj.genre} bio={propsObj.bio} image={propsObj.image} liked={propsObj.liked} youtube={propsObj.youtube} key={propsObj.id}/>)

    console.log(artist)
    return (
        <div>
            <Header />
            <Search />
            {artist}
        </div>
    );
}

export default MainContainer;