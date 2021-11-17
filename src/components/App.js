
import { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import SideContainer from './SideContainer';
import Form  from './Form'
import { Route, Switch } from 'react-router';
import ArtistsDetails from './ArtistsDetails';
import Header from './Header';

function App() {

  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    fetch('http://localhost:3001/artists')
    .then(resp => resp.json())
    .then(data  => setArtists(data)) 
  }, []);


  const handleNewArtists = (newArtist) => {
    setArtists([ ...artists, newArtist])
  };

  const displayCurrent = artists.filter(artistObj => {
    return artistObj.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path="/artists/new">
          <Form  handleNewArtists={handleNewArtists}/>
        </Route>

        <Route exact path="/artists/:id">
          <ArtistsDetails />
        </Route>

        <Route path="/">
          <MainContainer props={displayCurrent} search={search} setSearch={setSearch} />
          <SideContainer artists={artists} />
        </Route>

        <Route>
          <div>404 not found</div>
        </Route>

      </Switch>
    </div>
  );
}



export default App;
