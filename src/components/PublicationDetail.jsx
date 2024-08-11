import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import publications from './publicationsData';

const PublicationDetail = () => {
    const { id } = useParams();
    const publication = publications.find(pub => pub.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!publication) {
        return <div>Publication not found</div>;
    }

    return (
        <div className="publication-detail">
            <img src={publication.image} alt={publication.title} className="publication-detail-image" />
            <h1 className="publication-detail-title">{publication.title}</h1>
            <p className="publication-detail-date">{publication.date}</p>

            {publication.type === 'default' ? (
                <div className="publication-detail-content">
                    <p className='p-20'>{publication.content}</p>
                    <p className="publication-detail-subtitle">{publication.content2}</p>
                    <p className='p-20'>{publication.content3}</p>
                    <p className="publication-detail-subtitle">{publication.content4}</p>
                    <p className='p-20'>{publication.content5}</p>
                    <p className="publication-detail-subtitle">{publication.content6}</p>
                    <p className='p-20'>{publication.content7}</p>
                    <p className="publication-detail-subtitle">{publication.content8}</p>
                    <p className='p-20'>{publication.content9}</p>
                    <p className="publication-detail-subtitle">{publication.content10}</p>
                    <p className='p-20'>{publication.content11}</p>
                    <p className="publication-detail-subtitle">{publication.content12}</p>
                    <p className='p-20'>{publication.content13}</p>
                    <p className="publication-detail-subtitle">{publication.content14}</p>
                    <p className='p-20'>{publication.content15}</p>
                    <p className="publication-detail-subtitle">{publication.content16}</p>
                    <p className='p-20'>{publication.content17}</p>
                    <p className="publication-detail-subtitle">{publication.content18}</p>
                    <p className='p-20'>{publication.content19}</p>
                    <p className="publication-detail-subtitle">{publication.content20}</p>
                    <p className='p-20'>{publication.content21}</p>
                    <p className="publication-detail-subtitle">{publication.content22}</p>
                    <p className='p-20'>{publication.content23}</p>
                </div>
            ) : (
                <div className="publication-detail-content">
                    {publication.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="publication-detail-subtitle">{section.subtitle}</h3>
                            <p className="p-20">{section.text}</p>
                            {section.list && section.list.length > 0 && (
                                <ul className='codex-list'>
                                    {section.list.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PublicationDetail;
