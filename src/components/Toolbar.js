import React from 'react';
import {Link} from 'react-router-dom';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <img src="https://cdn-icons-png.flaticon.com/512/259/259164.png" alt=""/>
            <Link to="/">All recipes</Link>
            <Link to="/create">Create recipe</Link>
            <Link to="/favorites">Favorites</Link>


        </div>
    );
};

export default Toolbar;