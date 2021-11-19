// import React, { useState } from 'react';
import FavoriteList from './FavoriteList'

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircle, Favorite, Home} from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 200


const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  typographyOne: {
    textAlign: 'center',
    fontFamily: 'Kaushan Script'
  },
  typographyTwo: {
    textAlign: 'center',
    fontFamily: 'Bebas Neue'
  }
})


function SideContainer ({artists}) {

    const {liked} = artists

    const filteredArtists = artists.filter(artist => (liked ? !artist.liked: artist.liked))
    const displayCurrentFavorite = filteredArtists.map((artistObj) => (<FavoriteList key={artistObj.id} id={artistObj.id} name={artistObj.name} liked={artistObj.liked}/>))
    
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()



    const menuItems = [
      {
        text: 'Home',
        icon: <Home color='secondary' />,
        path: '/'
      },
      {
        text: 'Add New Artist',
        icon: <AddCircle color='secondary' />,
        path: '/artists/new'
      },
      
      {
        text: 'My Fav Artist',
        icon: <Favorite color='secondary' />,
        path: '/'
      },
    ]

    


    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant='permanent'
          anchor='left'
          classes={{ paper: classes.drawerPaper }}
        >
          <div>
            <Typography variant='h3' className={classes.typographyOne}>
            iTracks
            </Typography>
          </div>
        {/* list links */}
        <List>
          {menuItems.map(item => (
            <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname == item.path ? classes.active : null}
            >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
              </ListItem>
          ))}
        </List>
        <Typography variant='h5' className={classes.typographyTwo}>
        {displayCurrentFavorite}
            </Typography>

        </Drawer>
        
      </div>
    );
}

export default SideContainer;


