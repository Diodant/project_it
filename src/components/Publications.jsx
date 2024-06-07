import React from 'react';
import { Link } from 'react-router-dom';
import publications from './publicationsData';

const Publications = () => {
    return (
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
    );
};

export default Publications;
