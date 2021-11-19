
import {Link} from 'react-router-dom'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  page: {
    margin: '10px',
    display: 'flex',
    paddingLeft: 200,
    paddingTop: 70
  },
  buttonHeart: {
    backgroundColor: '#00d6ef',
    borderRadius: '5px'
  },
  buttonArtist: {
    margin: '5px',
    backgroundColor: '#00d6ef',
    borderRadius: '5px',
    fontSize: '17px'
  },
  buttonDelete: {
    margin: '5px',
    backgroundColor: '#00d6ef',
    borderRadius: '5px',
    fontSize: '17px'
  }
})


function AlbumCards ({artist, handleUpdateLike, handleDeleteArtist}) {
    const {id, name, image, liked, genre} = artist

    const classes = useStyles()
 
    //delete button
  function handleDeleteClick(artist) {
    fetch(`http://localhost:3001/artists/${artist.id}`, {
      method: "DELETE",
    });
    handleDeleteArtist(id)
  }
return (
    <div className={classes.page}>
    <Box >
    <Grid item xs={12}>
    <Card variant='elevation'>
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
       <button className={classes.buttonHeart} onClick={() => handleUpdateLike(artist)}>{liked?'♥️':'♡'}</button>
      <button className={classes.buttonArtist}><Link to={`/artists/${id}`}>Artist Info</Link></button>
      <button className={classes.buttonDelete} onClick={() => handleDeleteClick(artist)}>Delete</button>
      
      </CardContent>
    </Card>
    </Grid>
    </Box>
    </div> 
  );
}

export default AlbumCards;
