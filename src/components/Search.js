import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    searchbar: {
        float: 'right',
        padding: '10px',
        border: 'none',
        borderRadius: '10px',
        fontSize: '17px'
    }
  })


function Search ({search, setSearch}) {

    const classes = useStyles()

    return (
       <div className='search'>
           <input
           className={classes.searchbar} 
           type='text'
           value={search}
           placeholder='Search Artists...'
           name='Search'
           onChange={e => setSearch(e.target.value)}
           />
        
       </div>
    );
}

export default Search;