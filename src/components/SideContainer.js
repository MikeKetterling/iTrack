import React, { useState } from 'react';
import FavoriteList from './FavoriteList'

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import styled from 'styled-components'



function SideContainer ({artists}) {

    const {liked} = artists

    const filteredArtists = artists.filter(artist => (liked ? !artist.liked: artist.liked))
    const displayCurrentFavorite = filteredArtists.map((artistObj) => (<FavoriteList key={artistObj.id} id={artistObj.id} name={artistObj.name} liked={artistObj.liked}/>))
    
    const [state, setState] = useState(false)
    const toggleDrawer = (open) => (e) => {
    setState(open)
  }

    const list = () => (
    <SideDrawer>
    <List>
      <ListItem>
        {displayCurrentFavorite}
        This is where the favorited artists will go.
      </ListItem>
    </List>
    </SideDrawer>
  )

    return (
       <SideButton>
        <Button onClick={toggleDrawer(true)}>LIKED ARTIST</Button>
        <Drawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
      </SideButton>
    );
}

export default SideContainer;


const SideDrawer = styled.div`
    background-color: aqua;
    height: 100%;
`
const SideButton = styled.button`
    position: absolute;
    top: 0;

`;
