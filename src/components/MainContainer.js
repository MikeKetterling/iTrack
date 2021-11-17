import AlbumCards from './AlbumCards';
import Search from './Search';



function MainContainer ({artistArr, search, setSearch, handleUpdateLike}) {

    

    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            {artistArr.map((artist) =>  (
                    <AlbumCards artist={artist} 
                    key={artist.id} 
                    handleUpdateLike={handleUpdateLike} />
                )
            )}
        </div>
    );
}

export default MainContainer;
