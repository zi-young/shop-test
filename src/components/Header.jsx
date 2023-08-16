import { AiOutlineClose } from "react-icons/ai"; 
import { GiHamburgerMenu } from "react-icons/gi"; 
import { CgSoftwareDownload } from "react-icons/cg"; 
import React,{useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css'


const Header = () => {
    const [icon, setIcon] =useState(true);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIcon(prevIcon => !prevIcon);
    };

    useEffect(() => {
    console.log('Navbar is rendered');
    }, [icon]);

    return (
        <header className="header">
            <div className="container">
                <h1><Link to="/"><img className="logo" src={process.env.PUBLIC_URL + '/img/logo2.png'} alt='logo image'/></Link></h1>
                <Navbar />
                <div className="mobileBar">
                {icon ? ( <GiHamburgerMenu className="hamburgerIcon" onClick={toggleMenu}  /> ) : (<AiOutlineClose className="closeIcon" onClick={toggleMenu} /> )}
                <CSSTransition
                in={!icon}
                timeout={300}
                classNames="menu"
                unmountOnExit
                ><Navbar /></CSSTransition>
                </div>
                <button className="btn" onClick={() => navigate('/UploadPage')}><span className="upload">Upload &nbsp;</span><CgSoftwareDownload /></button>
            </div>
        </header>
    );
};


export default Header;