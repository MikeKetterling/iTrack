
import {Link} from 'react-router-dom'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

function AlbumCards ({artist, handleUpdateLike}) {

    const {id, name, image, liked, genre} = artist

return (
    <Box sx={{ flexGrow: 1, width: '200px' }}>
    <Grid container item spacing={4} column={12} direction='row' justifyContent= 'flex-start' alignItems='flex-start'>
    <Grid item sx={3}>
    <Card sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <CardHeader
        title={name}
        subheader={genre}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
      <CardContent>
       {liked}
       <button onClick={handleUpdateLike}>{liked?'♥️':'♡'}</button>
        <Link to={`/artists/${id}`}>Click for Details</Link>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    </Box> 
  );
}

export default AlbumCards;
