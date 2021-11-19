import { NavLink } from 'react-router-dom'

function FavoriteList ({name, id}) {

    
    
    return (
        <div>
            <NavLink to={`/artists/${id}`}>{name}</NavLink>
        </div>
    );
}

export default FavoriteList;