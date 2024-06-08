import React from 'react';
import { Link } from 'react-router-dom';
import publications from './publicationsData';
import mainImage from '../img/publications-bg.jpg';

const Publications = () => {
    return (
        <div className="publications-wrapper">
            <div >
            <div className="main-content">
                <div className="content-overlay">
                    <div className="text-content">
                        <h1 className="main-title">Публикации Международной ассоциации ИТ экспертов (GAITE)</h1>
                        <p className="sub-title">Ваш источник актуальных знаний и инноваций в мире ИТ.</p>
                    </div>
                    <div className="image-content">
                        <img src={mainImage} alt="IT Specialists" />
                    </div>
                </div>
            </div>
            </div>
        <div className="publications-container">
            {publications.map((publication) => (
                <div key={publication.id} className="publication-card">
                    <Link to={`/publication/${publication.id}`}>
                        <img src={publication.image} alt={publication.title} className="publication-image" />
                        <div className="publication-content">
                            <h3 className="publication-title">{publication.title}</h3>
                            <p className="publication-description">{publication.description}</p>
                            <div className="publication-footer">
                                <span className="publication-views">{publication.views} 👁</span>
                                <span className="publication-date">{publication.date}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Publications;
