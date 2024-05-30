import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="IAITP Logo" />
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to="/" className="link">
                        <i className="fa fa-home" aria-hidden="true"></i> Главная
                    </Link>
                    <Link to="/charter" className="link">
                        <i className="fa fa-file-text-o" aria-hidden="true"></i> Устав
                    </Link>
                    <Link to="/members" className="link">
                        <i className="fa fa-users" aria-hidden="true"></i> Участники
                    </Link>
                    <Link to="/contacts" className="link">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i> Контакты
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
