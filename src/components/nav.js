import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';



const Nav = () => {
    return (
        <div className='nav'>

            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/Create'>Create</Link>
            <Link className='link' to='/Edit'>Edit</Link>
           <Link className='link' to='/Delete'>Delete</Link>
           <Link className='link' to='/Form'>SignUp</Link>
            {/* <Link className='link' to='/Create'>Create</Link> */}

        </div>
    );
}
export default Nav;