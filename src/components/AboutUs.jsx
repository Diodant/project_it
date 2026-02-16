import React from 'react';
import aboutImage from '../img/about-bg.jpg';
import goal1 from '../img/goals/goal1.png';
import goal2 from '../img/goals/goal2.png';
import goal3 from '../img/goals/goal3.png';
import goal4 from '../img/goals/goal4.png';
import goal5 from '../img/goals/goal5.png';
import goal6 from '../img/goals/goal6.png';
import goal7 from '../img/goals/goal7.png';
import goal8 from '../img/goals/goal8.png';
import icon1 from '../img/goals/goal9.png';
import icon2 from '../img/goals/goal10.png';
import icon3 from '../img/goals/goal11.png';
import icon4 from '../img/goals/goal12.png';

const AboutUs = () => {
    return (
        <div>
            <div className="main-content">
                <div className="content-overlay">
                    <div className="text-content">
                        <h1 className="main-title">О нас</h1>
                        <p className="sub-title">Добро пожаловать на сайт Global Association of IT Experts (GAITE) – Международной Ассоциации, объединяющей профессионалов в сфере информационных технологий со всего мира. Наша ассоциация создана в 2018 году для того, чтобы способствовать развитию IT-индустрии, обмену знаниями и опытом, а также для укрепления профессиональных связей на международном уровне.</p>
                    </div>
                    <div className="image-content">
                        <img src={aboutImage} alt="IT Specialists" />
                    </div>
                </div>
            </div>

            <div className="criteria-section">
                <h2 className="criteria-title">Критерии членства</h2>
                <div className="criteria-grid">
                    <div className="criteria-item">
                        <div className="criteria-icon">
                            <img src={icon1} alt="Criteria Icon" />
                        </div>
                        <h3>Достижение высокого уровня</h3>
                        <p>Достижение высокого уровня в области информационных технологий, подтвержденное национальными и международными наградами.</p>
                    </div>
                    <div className="criteria-item">
                        <div className="criteria-icon">
                            <img src={icon2} alt="Criteria Icon" />
                        </div>
                        <h3>Значительный опыт</h3>
                        <p>Обладание значительным (не менее 3х лет) опытом работы в IT-индустрии, включая руководящие позиции и управленческие навыки.</p>
                    </div>
                    <div className="criteria-item">
                        <div className="criteria-icon">
                            <img src={icon3} alt="Criteria Icon" />
                        </div>
                        <h3>Активное участие</h3>
                        <p>Активное участие в развитии профессионального сообщества, включая обучающие мастер-классы и семинары.</p>
                    </div>
                    <div className="criteria-item">
                        <div className="criteria-icon">
                            <img src={icon4} alt="Criteria Icon" />
                        </div>
                        <h3>Публикации</h3>
                        <p>Наличие публикаций в рейтинговых технических и научных изданиях.</p>
                    </div>
                </div>
            </div>


            <div className='about-block-text'>
            <div className="main-title">Эксклюзивное членство</div>
            <div className="sub-title">Членство в GAITE – это знак высочайшего профессионализма и признания. Только самые выдающиеся специалисты, доказавшие свои навыки и знания на международной арене, могут стать членами нашей ассоциации. Это подчеркивает наш высокий стандарт и стремление поддерживать исключительно высокий уровень компетентности среди наших членов.</div>
            </div>

            <div className="professions-section">
                <h2 className="professions-title">Профессии и специалисты</h2>
                <div className="sub-title">Членами GAITE могут стать специалисты различных профессий в сфере IT, включая, но не ограничиваясь:</div>
                <ul className="professions-list">
                    <li>Программисты и разработчики программного обеспечения</li>
                    <li>Системные аналитики и архитекторы</li>
                    <li>Специалисты по кибербезопасности</li>
                    <li>Инженеры по данным и аналитики данных</li>
                    <li>Разработчики и дизайнеры пользовательского интерфейса (UI/UX)</li>
                    <li>Инженеры по тестированию и качеству программного обеспечения</li>
                    <li>Администраторы сетей и систем</li>
                    <li>IT-менеджеры и руководители проектов</li>
                    <li>Специалисты по искусственному интеллекту и машинному обучению</li>
                    <li>Разработчики мобильных приложений</li>
                    <li>Инженеры DevOps и специалисты по облачным технологиям</li>
                </ul>
            </div>
            <div className='about-block-text'>
            <div className="main-title">Почет и значимость</div>
            <div className="sub-title">Стать членом Global Association of IT Experts (GAITE) – это не только большая честь, но и значимое достижение в карьере любого IT-профессионала. Наши члены пользуются уважением и признанием в профессиональной среде, получая уникальные возможности для профессионального роста и развития.</div>
            </div>
            <div className='about-block-text'>
            <div className="main-title">Возможности для членов</div>
            <div className="sub-title">Члены GAITE получают доступ к эксклюзивным ресурсам, включая специализированные тренинги, семинары и конференции. Мы обеспечиваем платформу для обмена опытом и знаниями, способствуя развитию новых технологий и инновационных решений. Наши члены также имеют возможность участвовать в совместных проектах и исследованиях, что открывает новые горизонты в профессиональной деятельности.</div>
            </div>
            <div className='about-block-text'>
            <div className="main-title">Сеть профессионалов</div>
            <div className="sub-title">Global Association of IT Experts (GAITE) – это сообщество единомышленников, объединенных общими целями и интересами. Мы поддерживаем атмосферу сотрудничества и взаимопомощи, где каждый член может найти поддержку и советы от ведущих экспертов отрасли. Это неоценимое преимущество помогает нашим членам расти и развиваться в своих профессиональных начинаниях.</div>
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
            <div className='about-block-text'>
            <div className="main-title">Мероприятия GAITE</div>
            <div className="sub-title">Global Association of IT Experts (GAITE) ежегодно организует конкурсы, премии и чемпионаты в IT индустрии, являющиеся событиями мирового масштаба. Эти мероприятия собирают лучших профессионалов в сфере IT со всех стран СНГ, предоставляя уникальные возможности для демонстрации передовых технологий, обмена опытом и признания выдающихся достижений в области информационных технологий. Участвуя в наших событиях, специалисты подтверждают свой высокий уровень мастерства и получают признание на международной арене.</div>
            </div>
            <div className='about-block-text'>
            <div className="main-title">Присоединяйтесь к нам</div>
            <div className="sub-title">Мы приглашаем всех выдающихся IT-специалистов присоединиться к GAITE и стать частью престижного международного сообщества. Вместе мы сможем достигнуть новых высот в IT-индустрии и внести значимый вклад в развитие технологий будущего.</div>
            </div>
        </div>

    );
};

export default AboutUs;
