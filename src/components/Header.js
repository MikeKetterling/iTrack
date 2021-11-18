import { Link } from 'react-router-dom'


function Header () {
    return (
      <div>
          <h1>iTracks</h1>
          <nav>
            <Link to={"/artists/new"}>Add your Next Artist </Link>
            <Link to={"/"}> HOME</Link>
          </nav>
      </div>
    );
}

export default Header;