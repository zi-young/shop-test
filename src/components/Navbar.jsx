import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    const activeStyle={
        color:'#ed217c'
    }
    return (
        <nav className="nav my-text">
            <ul className="listWrap">
                <li><NavLink to="/" style={({isActive}) => (isActive ? activeStyle: undefined)}>HOME</NavLink></li>
                <li><NavLink to="/interior" style={({isActive}) => (isActive ? activeStyle: undefined)}>INTERIOR</NavLink></li>
                <li><NavLink to="/kitchen" style={({isActive}) => (isActive ? activeStyle: undefined)}>KITCHEN</NavLink></li>
                <li><NavLink to="/sale" style={({isActive}) => (isActive ? activeStyle: undefined)}>SALE</NavLink></li>
                <li><NavLink to="/OfflineStore" style={({isActive}) => (isActive ? activeStyle: undefined)}>OFFLINE STORE</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;