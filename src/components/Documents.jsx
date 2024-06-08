import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import documentImage from '../img/Folder-Mockup.webp';

const Documents = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="documents-wrapper">
            <div className="document-block">
                <img src={documentImage} alt="Document" className="document-image" />
                <div className="document-text">
                    <div className="document-title">Устав Ассоциации Global Association of IT Experts (GAITE)</div>
                    <Link to="/statute" className="main-button">Ознакомиться</Link>
                </div>
            </div>
            <div className="document-block">
                <img src={documentImage} alt="Document" className="document-image" />
                <div className="document-text">
                    <div className="document-title">Этический кодекс ассоциации Global Association of IT Experts (GAITE)</div>
                    <Link to="/codex" className="main-button">Ознакомиться</Link>
                </div>
            </div>
            <div className="document-block">
                <img src={documentImage} alt="Document" className="document-image" />
                <div className="document-text">
                    <div className="document-title">Устав Почетного Вручения Медали "За Вклад в Развитие IT Индустрии"</div>
                    <Link to="/medal" className="main-button">Ознакомиться</Link>
                </div>
            </div>
        </div>
    );
};

export default Documents;
