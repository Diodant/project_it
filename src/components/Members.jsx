import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import members from './membersData';
import mainImage from '../img/members-bg.jpg';
import boardImage1 from '../img/boardmember1.jpg';
import boardImage2 from '../img/boardmember2.jpg';
import boardImage3 from '../img/boardmember2.jpg';
import boardImage4 from '../img/boardmember2.jpg';
import boardImage5 from '../img/boardmember2.jpg';

const ITEMS_PER_PAGE = 28;

const boardMembers = [
    {
        id: 1,
        name: 'Максим Коновалов',
        country: 'Узбекистан',
        description: 'Сооснователь и управляющий директор NGINX, компании-разработчика веб-серверов.',
        image: boardImage1
    },
    {
        id: 2,
        name: 'Игорь Ашманов',
        country: 'Таджикистан',
        description: 'Известный специалист в области IT-консалтинга и интернет-маркетинга.',
        image: boardImage2
    },
    {
        id: 3,
        name: 'Евгений Касперский',
        country: 'Грузия',
        description: 'Основатель и генеральный директор компании «Лаборатория Касперского», одного из ведущих производителей антивирусного ПО.',
        image: boardImage3
    },
    {
        id: 4,
        name: 'Гарри Каспаров',
        country: 'Армения',
        description: 'Легендарный шахматист и IT-предприниматель, известный своими вкладом в технологии искусственного интеллекта.',
        image: boardImage4
    },
    {
        id: 5,
        name: 'Дмитрий Гришин',
        country: 'Россия',
        description: 'Сооснователь и генеральный директор Mail.ru Group, одного из крупнейших интернет-холдингов в России.',
        image: boardImage5
    }
];

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
            <div className="board-members">
                {boardMembers.map(member => (
                    <div key={member.id} className="board-member-card">
                        <img src={member.image} alt={member.name} className="board-member-image" />
                        <div className="board-member-content">
                            <h2 className="board-member-name">{member.name} ({member.country})</h2>
                            <p className="board-member-description">{member.description}</p>
                        </div>
                    </div>
                ))}
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
