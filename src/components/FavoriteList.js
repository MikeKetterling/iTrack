import { Link } from 'react-router-dom'

function FavoriteList ({name, id}) {

    
    
    return (
        <div>
            <Link to={`/artists/${id}`}>{name}</Link>
        </div>
    );
}

export default FavoriteList;