
import { makeStyles } from '@material-ui/core';
import Search from './Search'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography';

const drawerWidth = 200

const useStyles = makeStyles({
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  }
})




function Header ({search, setSearch}) {

  const classes = useStyles()

    return (
      <div>
        <AppBar
          className={classes.appbar}
        >
          <ToolBar>
          <Search
          search={search} setSearch={setSearch}/>

          </ToolBar>
        </AppBar>
          
      </div>
    );
}

export default Header;



