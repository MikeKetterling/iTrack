
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
    fetch('http://localhost:3000/artists')
    .then(resp => resp.json())
    .then(data => setArtists(data)) 
  }, []);
  console.log(artists)
  const handleUpdateLike = (artistObj) => {
    fetch(`http://localhost:3000/artists/${artistObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({liked:!artistObj.liked})
    })
    .then(res => res.json())
    .then(data => {
      const tempArtist = artists.map(artist => {
        if(artist.id === data.id){
          return data
        } else {
          return artist
        }
      })
      setArtists(tempArtist)

    })
  }



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
          <MainContainer 
          artistArr={displayCurrent} 
          search={search} 
          setSearch={setSearch} 
          handleUpdateLike={handleUpdateLike} />
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
