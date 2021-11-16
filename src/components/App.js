
import { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import SideContainer from './SideContainer';


function App() {

  const [artists, setArtists] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/artists')
    .then(resp => resp.json())
    .then(setArtists)
  }, [])



  return (
    <div className="App">
      <MainContainer props={artists}/>
      <SideContainer />
    </div>
  );
}



export default App;
