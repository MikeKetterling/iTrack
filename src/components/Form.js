import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core';

const drawerWidth = 200

const useStyles = makeStyles({
  formData: {
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '200px',
    textAlign: 'center',
    margin: '5px'
  },
  formBox: {
    padding: '5px',
    borderRadius: '10px',
    margin: '5px'
  }
})

  


function Form ({handleNewArtists}) {

    const classes = useStyles()

    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        bio: '',
        image: '',
        youtube: '',

    });

    const handleChange = (e) => {

        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    };

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArtist = {
            name: formData.name,
            genre: formData.genre,
            bio: formData.bio,
            image: formData.image,
            youtube: formData.youtube,
        };
        fetch('http://localhost:3000/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArtist) 
        })
        .then((response) => response.json())
        .then(newArtist => {
            handleNewArtists(newArtist)
            history.push("/")})
    }




    return (
        <>
            <form className={classes.formData} onSubmit={handleSubmit}>
                <label>NAME:</label>
                <input
                className={classes.formBox} 
                type='text'
                value={formData.name}
                placeholder='Name'
                name='name'
                onChange={handleChange}
                />
                <label>GENRE:</label>
                <input
                className={classes.formBox} 
                type='text'
                value={formData.genre}
                placeholder='Genre'
                name='genre'
                onChange={handleChange}
                />
                <label>BIO:</label>
                <input
                className={classes.formBox} 
                type='text'
                value={formData.bio}
                placeholder='Bio'
                name='bio'
                onChange={handleChange}
                />
                <label>IMAGE LINK:</label>
                <input
                className={classes.formBox} 
                type='text'
                value={formData.image}
                placeholder='Image'
                name='image'
                onChange={handleChange}
                />
                <label>YouTube Link:</label>
                <input
                className={classes.formBox}
                type='text'
                value={formData.youtube}
                placeholder='Youtube'
                name='youtube'
                onChange={handleChange}
                />
                <button type='submit'>Submit</button>
                
            </form>
        </>
    );
}

export default Form;