import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import members from './membersData';
import mainImage from '../img/members-bg.jpg';

const ITEMS_PER_PAGE = 28;

const Members = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentPageData = members.slice(offset, offset + ITEMS_PER_PAGE);

    return (
        <div className="members-wrapper">
            <div className="main-content">
                <div className="content-overlay">
                    <div className="text-content">
                        <h1 className="main-title">Члены Международной ассоциации ИТ экспертов (GAITE)</h1>
                        <p className="sub-title">Объединяя таланты для цифрового будущего</p>
                    </div>
                    <div className="image-content">
                        <img src={mainImage} alt="IT Specialists" />
                    </div>
                </div>
            </div>
            <div className="members-grid">
                {currentPageData.map(member => (
                    <div key={member.id} className="member-card">
                        <h2 className="member-name">{member.name} ({member.country})</h2>
                        <p className="member-description">{member.description}</p>
                        <p className="member-year">Год вступления: {member.year}</p>
                    </div>
                ))}
            </div>
            <ReactPaginate
                previousLabel={"← Назад"}
                nextLabel={"Вперед →"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(members.length / ITEMS_PER_PAGE)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default Members;
