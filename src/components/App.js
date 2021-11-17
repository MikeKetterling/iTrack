
import { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import SideContainer from './SideContainer';
import Form  from './Form'
import { Route, Switch } from 'react-router';
import ArtistsDetails from './ArtistsDetails';
import Header from './Header';

function App() {
  const [allArtist, setAllArtist] = useState([])
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    fetch('http://localhost:3001/artists')
    .then(resp => resp.json())
    .then(data => {
      setArtists(data)
      setAllArtist(data)}) 
  }, []);

  const handleUpdateLike = (artistObj, id) => {
    //console.log(artistObj)
    fetch(`http://localhost:3001/artists/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({liked:!artistObj.liked})
    })
    .then(res => res.json())
    .then(data => {
      const tempArtist = allArtist.map(artist => {
        if(artist.id === data.id){
          return data
        } else {
          return artist
        }
      })
      setAllArtist(tempArtist)

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
          <MainContainer props={displayCurrent} search={search} setSearch={setSearch} handleUpdateLike={handleUpdateLike} />
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
