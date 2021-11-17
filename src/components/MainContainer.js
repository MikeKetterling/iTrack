import AlbumCards from './AlbumCards';
import Search from './Search';



function MainContainer ({props, search, setSearch}) {

    const artist = props.map((propsObj) => <AlbumCards id={propsObj.id} name={propsObj.name} genre={propsObj.genre} bio={propsObj.bio} image={propsObj.image} liked={propsObj.liked} youtube={propsObj.youtube} key={propsObj.id}/>)

    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            {artist}
        </div>
    );
}

export default MainContainer;