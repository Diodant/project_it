import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import members from './membersData';
import mainImage from '../img/members-bg.jpg';
import boardImage1 from '../img/boardmember1.png';
import boardImage2 from '../img/boardmember2.png';
import boardImage3 from '../img/boardmember3.png';
import boardImage4 from '../img/boardmember4.jpg';
import boardImage5 from '../img/boardmember5.png';

const ITEMS_PER_PAGE = 28;

const boardMembers = [
{
    id: 1,
    name: 'Александр Галицкий',
    country: 'Украина / Нидерланды',
    description: 'Председатель Международной ассоциации ИТ экспертов (GAITE). Международный технологический предприниматель, венчурный инвестор и один из наиболее известных специалистов в области высоких технологий, информационной безопасности и телекоммуникаций. Является основателем компании ELVIS-PLUS и управляющим партнером международного венчурного фонда Almaz Capital, инвестирующего в компании, работающие в сфере искусственного интеллекта, кибербезопасности, облачных вычислений, корпоративного программного обеспечения и других направлений DeepTech. В профессиональном сообществе Александр Галицкий известен как один из пионеров технологий VPN и Wi-Fi, а также как инвестор, принимавший участие в развитии десятков международных технологических компаний Европы и США.',
    image: boardImage1
},
{
    id: 2,
    name: 'Дмитрий Гришин',
    country: 'Россия',
    description: 'Международный технологический предприниматель, инвестор и один из основателей Mail.ru Group, ныне VK. Под его руководством компания стала одной из крупнейших интернет-компаний Восточной Европы, объединяющей крупнейшие цифровые сервисы, коммуникационные платформы и технологические продукты. Дмитрий Гришин также является основателем инвестиционного фонда Grishin Robotics, специализирующегося на инвестициях в робототехнику, искусственный интеллект и перспективные технологические разработки. В 2013 году он вошел в список MIT Technology Review Innovators Under 35, что подтверждает международное признание его вклада в развитие технологической индустрии.',
    image: boardImage2
},
{
    id: 3,
    name: 'Ольга Ускова',
    country: 'Россия',
    description: 'Российский предприниматель, инженер и основатель компании Cognitive Technologies, одного из ведущих разработчиков решений в области искусственного интеллекта, машинного зрения и интеллектуальных систем управления. На протяжении многих лет она руководит разработкой технологий автономного транспорта, интеллектуальных систем принятия решений и цифровых платформ для промышленности и сельского хозяйства. Ее научная и практическая деятельность внесла значительный вклад в развитие технологий искусственного интеллекта и их внедрение в реальный сектор экономики.',
    image: boardImage3
},
{
    id: 4,
    name: 'Виктор Кислый',
    country: 'Беларусь',
    description: 'Международный предприниматель, разработчик программного обеспечения и основатель компании Wargaming, известной во всем мире благодаря созданию игры World of Tanks и других масштабных цифровых проектов. Под его руководством Wargaming превратилась в международную технологическую компанию с офисами в различных странах мира и миллионами пользователей. Компания внесла значительный вклад в развитие современных технологий разработки программного обеспечения, серверной инфраструктуры и онлайн-платформ мирового уровня.',
    image: boardImage4
},
{
    id: 5,
    name: 'Рауан Кенжеханулы',
    country: 'Казахстан',
    description: 'Казахстанский специалист в области цифровой трансформации, технологического развития и цифрового образования. Он принимал участие в реализации международных проектов по локализации цифровых сервисов и развитию технологической экосистемы Центральной Азии, а также занимался продвижением современных образовательных инициатив в сфере информационных технологий, цифровых платформ и инновационного предпринимательства. Его профессиональная деятельность направлена на развитие цифровой экономики и повышение уровня подготовки специалистов в регионе.',
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
                <div className='title'>Члены правления</div>
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
            <div>
            <div className='title'>Список членов ассоциации</div>
            <div className="members-grid">
                {currentPageData.map(member => (
                  <div key={member.id} className="member-card">
                    <h2 className="member-name">
                      {member.id === 143 
                        ? (
                          <>
                            {/* русская версия, переводимая Google */}
                            <span className="name-ru" lang="ru">
                              {member.name}
                            </span>
                            {/* «запретный» от перевода Google, всегда английская */}
                            <span 
                              className="name-en notranslate" 
                              translate="no" 
                              lang="en"
                            >
                              Bogdan Pan’kovs’ky
                            </span>
                          </>
                        ) 
                        : (
                          member.name
                        )
                      }
                      {" "}({member.country})
                    </h2>
                    <p className="member-description">{member.description}</p>
                    <p className="member-year">Год вступления: {member.year}</p>
                  </div>
                ))}

            </div>
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
