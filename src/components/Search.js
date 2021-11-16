


function Search ({search, setSearch}) {


    return (
       <div className='search'>
           <label></label>
           <input 
           type='text'
           value={search}
           placeholder='Search'
           name='Search'
           onChange={e => setSearch(e.target.value)}
           />
       </div>
    );
}

export default Search;