import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Header () {
    return (
      <div className='header'>
          <h1>-iTracks-</h1>
          <nav>
            <Link to={"/artists/new"}>Add your Next Artist </Link>
            <br/>
            <Link to={"/"}> HOME</Link>
          </nav>
      </div>
    );
}

export default Header;


