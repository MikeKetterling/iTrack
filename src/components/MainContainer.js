import AlbumCards from './AlbumCards';
import Search from './Search';
import Grid from '@mui/material/Grid'



function MainContainer ({artistArr, handleUpdateLike, handleDeleteArtist}) {

    

    return (
        <div>
            {/* <Search search={search} setSearch={setSearch}/> */}
            <Grid container >
                {artistArr.map((artist) =>  (
                        <AlbumCards artist={artist} 
                        key={artist.id} 
                        handleUpdateLike={handleUpdateLike}
                        handleDeleteArtist={handleDeleteArtist} />
                    )
                )}
             </Grid>
        </div>
    );
}

export default MainContainer;
