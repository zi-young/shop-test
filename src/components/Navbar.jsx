import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    const activeStyle={
        color:'#ed217c'
    }
    return (
        <nav className="nav">
            <ul className="listWrap">
                <li><NavLink to="/" style={({isActive}) => (isActive ? activeStyle: undefined)}>HOME</NavLink></li>
                <li><NavLink to="/interior" style={({isActive}) => (isActive ? activeStyle: undefined)}>INTERIOR</NavLink></li>
                <li><NavLink to="/kitchen" style={({isActive}) => (isActive ? activeStyle: undefined)}>KITCHEN</NavLink></li>
                <li><NavLink to="/office" style={({isActive}) => (isActive ? activeStyle: undefined)}>OFFICE</NavLink></li>
                <li><NavLink to="/fabric" style={({isActive}) => (isActive ? activeStyle: undefined)}>FABRIC</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;