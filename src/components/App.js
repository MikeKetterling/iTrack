
import { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import SideContainer from './SideContainer';
import Form  from './Form'
import { Route, Switch } from 'react-router';
import ArtistsDetails from './ArtistsDetails';

function App() {

  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');
   //in process
  const [favoriteArtists, setFavoriteArtists] = useState([])

  //in process
  console.log(favoriteArtists);

  useEffect(() => {
    fetch('http://localhost:3000/artists')
    .then(resp => resp.json())
    .then(data  => {setArtists(data)
    setFavoriteArtists(data)})
    
  }, []);

  const handleNewArtists = (newArtist) => {
    setArtists([ ...artists, newArtist])
  };

  const displayCurrent = artists.filter(artistObj => {
    return artistObj.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <Switch>
        <Route path="/artists/:id">
          <ArtistsDetails />
        </Route>
        <Route path="/artists/new">
          <Form  handleNewArtists={handleNewArtists}/>
        </Route>
        <Route path="/artists">
          <MainContainer props={displayCurrent} search={search} setSearch={setSearch} />
          <SideContainer props={favoriteArtists} />
        </Route>
      </Switch>
    </div>
  );
}



export default App;
