import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { IoMoonOutline, IoPersonOutline } from 'react-icons/io5';
// import { BiMoon } from 'react-icons/bi';
import { AiOutlineNotification, AiOutlineSun } from 'react-icons/ai';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [navColor, setNavColor] = useState('white'); // Default color for Home page
    const [theme, setTheme] = useState('light'); // Default theme
    const [notificationCount, setNotificationCount] = useState(10000);

    const [isOpenProfile, setIsOpenProfile] = useState(false);

    const toggleDropdown = () => setIsOpenProfile(!isOpenProfile);

    useEffect(() => {
        // Update activeLink and navColor based on the current path
        setActiveLink(location.pathname);

        // Set text color based on the page
        if (location.pathname === '/') {
            setNavColor(theme === 'light' ? 'white' : 'white'); // Home page
        } else {
            setNavColor(theme === 'light' ? 'black' : 'white'); // Other pages
        }
    }, [location, theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Persist theme
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    return (
        <Navbar
            bg="transparent"
            className="header"
            expand="lg"
            style={{ color: navColor }}
        >
            {/* Logo on the left */}
            <Navbar.Brand as={Link} to="/" className="header-logo" style={{ color: navColor }}>
                <img src={logo} alt="Pixel World" />
                <b>EduVerse</b>
            </Navbar.Brand>

            {/* Toggler for mobile view */}
            <Navbar.Toggle aria-controls="navbar-nav" />

            <Navbar.Collapse id="navbar-nav">
                {/* Center navigation links */}
                <Nav className="mx-auto">
                    {/* <Nav.Link
                        className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                        as={Link}
                        to="/"
                        style={{ color: navColor }}
                    >
                        Home
                    </Nav.Link> */}
                    <Nav.Link
                        className={`nav-link ${activeLink === '/policies' ? 'active' : ''}`}
                        as={Link}
                        to="/policies"
                        style={{ color: navColor }}
                    >
                        Policies
                    </Nav.Link>
                    <Nav.Link
                        className={`nav-link ${activeLink === '/orientations' ? 'active' : ''}`}
                        as={Link}
                        to="/orientations"
                        style={{ color: navColor }}
                    >
                        Orientations
                    </Nav.Link>
                    <Nav.Link
                        className={`nav-link ${activeLink === '/training' ? 'active' : ''}`}
                        as={Link}
                        to="/training"
                        style={{ color: navColor }}
                    >
                        Trainings
                    </Nav.Link>

                    <Nav.Link
                        className={`nav-link ${activeLink === '/apps' ? 'active' : ''}`}
                        as={Link}
                        to="/apps"
                        style={{ color: navColor }}
                    >
                        Apps
                    </Nav.Link>


                </Nav>

                {/* Button on the right */}
                <div className="d-sm-flex align-items-center ">
                    <input type='search' className='header-search my-2' placeholder='Search...' />
                    {/* Theme toggle button */}
                    <button
                        className="btn btn-secondary ms-3  notification-button"
                        style={{
                            backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
                            color: theme === 'light' ? '#000' : '#fff',
                        }}
                    >
                        <AiOutlineNotification size={24} />
                        <span className="notification-badge">
                            {notificationCount > 999 ? '999+' : notificationCount}
                        </span>
                    </button>


                    <button
                        onClick={toggleTheme}
                        className="btn btn-secondary ms-3"
                        style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#000' : '#fff' }}
                    >
                        {theme === 'light' ? <IoMoonOutline size={24} /> : <AiOutlineSun size={26} />}
                    </button>


                    <div style={{ position: "relative", display: "inline-block" }}>
                        {/* Button */}
                        <button
                            onClick={toggleDropdown}
                            className="btn btn-secondary ms-3"
                            style={{
                                backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
                                color: theme === "light" ? "#000" : "#fff",
                            }}
                        >
                            <IoPersonOutline size={24} />
                        </button>

                        {/* Dropdown Menu */}
                        {isOpenProfile && (
                            <div
                                className="profile-dropdown-menu"

                            >
                                <Nav.Link
                                    as={Link}
                                    to='/profile'
                                    className={`profile-dropdown-item ${activeLink === '/profile' ? 'active' : ''}`}
                                >
                                    My Profile
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to='/settings'
                                    className={`profile-dropdown-item ${activeLink === '/settings' ? 'active' : ''}`}

                                >
                                    Settings
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to='/logout'
                                    className={`profile-dropdown-item ${activeLink === '/logout' ? 'active' : ''}`}

                                >
                                    Logout
                                </Nav.Link>
                            </div>
                        )}
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
