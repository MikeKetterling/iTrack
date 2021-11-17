import { useState } from 'react';


function Form ({handleNewArtists}) {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArtist = {
            name: formData.name,
            genre: formData.genre,
            bio: formData.bio,
            image: formData.image,
            youtube: formData.youtube,
        };
        fetch('http://localhost:3001/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArtist) 
        })
        .then((response) => response.json())
        .then(handleNewArtists)
    }




    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <button type='submit'>Submit</button>
                <label>NAME</label>
                <input 
                type='text'
                value={formData.name}
                placeholder='Name'
                name='name'
                onChange={handleChange}
                />
                <label>GENRE</label>
                <input 
                type='text'
                value={formData.genre}
                placeholder='Genre'
                name='genre'
                onChange={handleChange}
                />
                <label>BIO</label>
                <input 
                type='text'
                value={formData.bio}
                placeholder='Bio'
                name='bio'
                onChange={handleChange}
                />
                <label>IMAGE LINK</label>
                <input 
                type='text'
                value={formData.image}
                placeholder='Image'
                name='image'
                onChange={handleChange}
                />
                <label>MUSIC VIDEO</label>
                <input 
                type='text'
                value={formData.youtube}
                placeholder='Youtube'
                name='youtube'
                onChange={handleChange}
                />

                
            </form>
        </>
    );
}

export default Form;