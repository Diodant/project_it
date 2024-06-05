import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../img/main-bg.jpg';
import documentImage from '../img/Folder-Mockup.webp';

import goal1 from '../img/goals/goal1.png';
import goal2 from '../img/goals/goal2.png';
import goal3 from '../img/goals/goal3.png';
import goal4 from '../img/goals/goal4.png';
import goal5 from '../img/goals/goal5.png';
import goal6 from '../img/goals/goal6.png';
import goal7 from '../img/goals/goal7.png';
import goal8 from '../img/goals/goal8.png';

const MainContent = () => {
    return (
        <div>
            <div className="main-content">
                <div className="content-overlay">
                    <div className="text-content">
                        <h1 className="main-title">Международная ассоциация ИТ экспертов (GAITE)</h1>
                        <p className="sub-title">Объединяя таланты для цифрового будущего</p>
                        <Link to="/about" className="main-button">Подробнее</Link>
                    </div>
                    <div className="image-content">
                        <img src={mainImage} alt="IT Specialists" />
                    </div>
                </div>
            </div>

            <div className="info-section">
                <div className="info-content">
                    <div className="info-title">Кто мы и что мы делаем</div>
                    <div className="info-text">
                        <p className="info-description">
                            Global Association of IT Experts (GAITE) является международной ассоциацией, и в нее входят профессионалы из различных уголков мира, включая страны Россия, Украина, Беларусь, Казахстан, Узбекистан, Таджикистан, Грузия, Армения, Молдавия и многие другие. Мы гордимся тем, что объединяем лучших из лучших, создавая глобальную сеть экспертов, готовых решать самые сложные задачи и внедрять инновационные решения в различных сферах IT.
                        </p>
                    </div>
                </div>
            </div>

            <div className="goals-section">
                <h2>Наши цели</h2>
                <div className="goals-grid">
                    <div className="goal-item">
                        <div className="goal-icon">
                            <img src={goal1} alt="Содействие развитию IT-индустрии" />
                        </div>
                        <h3>Содействие развитию IT-индустрии</h3>
                        <p>Мы стремимся способствовать прогрессу и инновациям в области информационных технологий, поддерживая и развивая новые идеи и технологии.</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-icon">
                            <img src={goal2} alt="Обмен знаниями и опытом" />
                        </div>
                        <h3>Обмен знаниями и опытом</h3>
                        <p>Обеспечиваем платформу для обмена знаниями и опытом между специалистами из различных стран, что способствует профессиональному росту и развитию членов ассоциации.</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-icon">
                            <img src={goal3} alt="Укрепление международных связей" />
                        </div>
                        <h3>Укрепление международных связей</h3>
                        <p>Развиваем и укрепляем международные профессиональные связи, создавая глобальную сеть IT-экспертов, готовых к сотрудничеству и совместным проектам.</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-icon">
                            <img src={goal4} alt="Поддержка высоких стандартов" />
                        </div>
                        <h3>Поддержка высоких стандартов</h3>
                        <p>Ставим высокие профессиональные стандарты для своих членов, обеспечивая их соответствие лучшим мировым практикам и требованиям индустрии.</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-icon">
                            <img src={goal5} alt="Обучение и профессиональное развитие" />
                        </div>
                        <h3>Обучение и профессиональное развитие</h3>
                        <p>Организуем тренинги, семинары, конференции и мастер-классы для повышения квалификации и профессионального роста наших членов.</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-icon">
                            <img src={goal6} alt="Признание и награды" />
                        </div>
                        <h3>Признание и награды</h3>
                        <p>Признаем и поощряем достижения и вклад IT-специалистов на национальном и международном уровне через награды и премии.</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-icon">
                            <img src={goal7} alt="Сотрудничество с образовательными учреждениями" />
                        </div>
                        <h3>Сотрудничество с образовательными учреждениями</h3>
                        <p>Сотрудничаем с ведущими университетами и образовательными учреждениями для поддержки подготовки новых поколений IT-специалистов.</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-icon">
                            <img src={goal8} alt="Поддержка инновационных проектов" />
                        </div>
                        <h3>Поддержка инновационных проектов</h3>
                        <p>Оказываем поддержку перспективным и инновационным проектам в сфере IT, предоставляя экспертные знания и ресурсы для их реализации.</p>
                    </div>
                </div>
            </div>

            <div className="documents-wrapper">
            <h2>Наши документы</h2>
            <div className="document-sub-block">
                <img src={documentImage} alt="Document" className="document-image" />
                <div className="document-text">
                    <div className="document-title">Документы Ассоциации Global Association of IT Experts (GAITE)</div>
                    <Link to="/documents" className="main-button">Перейти</Link>
                </div>
                </div>
            </div>

        </div>
    );
};

export default MainContent;
