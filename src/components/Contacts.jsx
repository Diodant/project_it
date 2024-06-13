import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegBuilding } from 'react-icons/fa';

const Contacts = () => {
    return (
        <div className="contacts-wrapper">
            <h1 className="contacts-title">Контакты</h1>
            <div className="contacts-content">
                <div className="contact-card">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                        <p className="contact-label">Адрес:</p>
                        <p className="contact-info">198826, Россия, город Москва, поселение Филимонковское, деревня Бурцево, 5-й Новобурцевский переулок, дом 15</p>
                    </div>
                </div>
                <div className="contact-card">
                    <FaRegBuilding className="contact-icon" />
                    <div>
                        <p className="contact-label">ИНН/КПП:</p>
                        <p className="contact-info">7720859286/775101001</p>
                    </div>
                </div>
                <div className="contact-card">
                    <FaPhoneAlt className="contact-icon" />
                    <div>
                        <p className="contact-label">Телефон:</p>
                        <p className="contact-info">+7(499) 290-5005</p>
                    </div>
                </div>
                <div className="contact-card">
                    <FaEnvelope className="contact-icon" />
                    <div>
                        <p className="contact-label">Email:</p>
                        <p className="contact-info">gaiteassociation@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
