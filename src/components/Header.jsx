import React from 'react'; //importing dependencies
import { Link } from 'react-router-dom';

export const Header = () => { // Header function to render or Header component with banner background, logo, title, and 3 working navlinks using react router.

    return (
        <header className='Banner'>
            <div className='Logo'></div>
            <h1>Dan's Game Review Archive</h1>
            <div className='NavLinks'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contactUs">Contact</Link>
            </div>
        </header>
    );
}