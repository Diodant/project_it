import React, { useState } from 'react';
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
    const [formState, setFormState] = useState({ name: '', phone: '', email: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.name && formState.phone && formState.email) {
            setSubmitted(true);
        }
    };

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
                    {[
                        { img: goal1, title: 'Содействие развитию IT-индустрии', desc: 'Мы стремимся способствовать прогрессу и инновациям в области информационных технологий, поддерживая и развивая новые идеи и технологии.' },
                        { img: goal2, title: 'Обмен знаниями и опытом', desc: 'Обеспечиваем платформу для обмена знаниями и опытом между специалистами из различных стран, что способствует профессиональному росту и развитию членов ассоциации.' },
                        { img: goal3, title: 'Укрепление международных связей', desc: 'Развиваем и укрепляем международные профессиональные связи, создавая глобальную сеть IT-экспертов, готовых к сотрудничеству и совместным проектам.' },
                        { img: goal4, title: 'Поддержка высоких стандартов', desc: 'Ставим высокие профессиональные стандарты для своих членов, обеспечивая их соответствие лучшим мировым практикам и требованиям индустрии.' },
                        { img: goal5, title: 'Обучение и профессиональное развитие', desc: 'Организуем тренинги, семинары, конференции и мастер-классы для повышения квалификации и профессионального роста наших членов.' },
                        { img: goal6, title: 'Признание и награды', desc: 'Признаем и поощряем достижения и вклад IT-специалистов на национальном и международном уровне через награды и премии.' },
                        { img: goal7, title: 'Сотрудничество с образовательными учреждениями', desc: 'Сотрудничаем с ведущими университетами и образовательными учреждениями для поддержки подготовки новых поколений IT-специалистов.' },
                        { img: goal8, title: 'Поддержка инновационных проектов', desc: 'Оказываем поддержку перспективным и инновационным проектам в сфере IT, предоставляя экспертные знания и ресурсы для их реализации.' }
                    ].map((goal, index) => (
                        <div className="goal-item" key={index}>
                            <div className="goal-icon">
                                <img src={goal.img} alt={goal.title} />
                            </div>
                            <h3>{goal.title}</h3>
                            <p>{goal.desc}</p>
                        </div>
                    ))}
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

            <div className="contact-form-section">
                <h2>Свяжитесь с нами</h2>
                {submitted ? (
                    <div className="thank-you-message">
                        <h3>Спасибо за вашу заявку!</h3>
                        <p>Мы свяжемся с вами в ближайшее время.</p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Имя</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Отправить</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default MainContent;
