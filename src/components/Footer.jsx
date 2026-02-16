import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="footer-logo-img" />
                    </Link>
                </div>
                <div className="footer-links">
                    <Link to="/" className="footer-link">Главная</Link>
                    <Link to="/documents" className="footer-link">Документы</Link>
                    <Link to="/members" className="footer-link">Участники</Link>
                    <Link to="/contacts" className="footer-link">Контакты</Link>
                </div>
                <div className="footer-contact">
                    <p>Адрес: 198826, Россия, город Москва, поселение Филимонковское, деревня Бурцево, 5-й Новобурцевский переулок, дом 15</p>
                    <p>Телефон: +7(499) 290-5005</p>
                    <p>Email: gaiteassociation@gmail.com</p>
                </div>
                <div className="footer-copy">
                    <p>&copy; 2018 Global Association of IT Experts (GAITE). All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
