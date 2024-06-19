import React, { useEffect } from 'react';
import medalImage from '../img/medal.png';

const recipients = [
    { year: 2020, name: "Дмитрий Гришин", country: "Россия" },
    { year: 2020, name: "Володимир Топозли", country: "Украина" },
    { year: 2020, name: "Артем Боровик", country: "Молдова" },
    { year: 2020, name: "Алексей Репик", country: "Узбекистан" },
    { year: 2020, name: "Алексей Чалый", country: "Беларусь" },
    { year: 2021, name: "Олег Макаров", country: "Таджикистан" },
    { year: 2021, name: "Александр Шульгин", country: "Россия" },
    { year: 2021, name: "Александр Волков", country: "Беларусь" },
    { year: 2021, name: "Дмитрий Лебедев", country: "Грузия" },
    { year: 2021, name: "Илья Варламов", country: "Молдова" },
    { year: 2022, name: "Александр Гордеев", country: "Украина" },
    { year: 2022, name: "Дмитрий Денисов", country: "Казахстан" },
    { year: 2022, name: "Игорь Захаров", country: "Грузия" },
    { year: 2022, name: "Сергей Иванов", country: "Россия" },
    { year: 2022, name: "Алексей Кузьмин", country: "Беларусь" },
    { year: 2023, name: "Андрей Зайцев", country: "Молдова" },
    { year: 2023, name: "Антон Егоров", country: "Казахстан" },
    { year: 2023, name: "Иван Григорьев", country: "Россия" },
    { year: 2023, name: "Александр Петров", country: "Беларусь" },
    { year: 2023, name: "Дмитрий Иванов", country: "Россия" },
    { year: 2024, name: "Виктор Иванов", country: "Армения" },
    { year: 2024, name: "Михаил Кузнецов", country: "Казахстан" },
    { year: 2024, name: "Анна Кузнецова", country: "Украина" },
    { year: 2024, name: "Николай Соколов", country: "Беларусь" },
    { year: 2024, name: "Ольга Петрова", country: "Армения" },
];

const Medal = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="codex-wrapper">
            <div className='medal-image'>
            <img src={medalImage} alt="Medal" />
            </div>
            <h1 className="codex-title">Устав Почетного Вручения Медали "За Вклад в Развитие IT Индустрии"</h1>


            <div className="codex-section">
                <h2 className="codex-subtitle">1. Общие положения</h2>
                <p className="codex-text">
                    1.1. Медаль "За вклад в развитие IT индустрии" (далее - Медаль) учреждена Global Association of IT Experts (GAITE) с целью признания и награждения выдающихся специалистов, внесших значительный вклад в развитие информационных технологий.
                </p>
                <p className="codex-text">
                    1.2. Медаль вручается IT-специалистам, научным деятелям, предпринимателям и общественным деятелям за выдающиеся достижения в области IT, которые способствуют прогрессу и инновациям в индустрии.
                </p>
                <p className="codex-text">
                    1.3. Вручение Медали проводится ежегодно только трем наиболее выдающимся членам ассоциации на торжественной церемонии, организуемой GAITE.
                </p>
            </div>

            <div className="codex-section">
                <h2 className="codex-subtitle">2. Критерии награждения</h2>
                <p className="codex-text">2.1. Кандидаты на получение Медали должны соответствовать следующим критериям:</p>
                <ul className="codex-list">
                    <li>Достижение значимых успехов в области IT, подтвержденных профессиональными наградами и признанием в отрасли.</li>
                    <li>Опыт работы не менее трех лет на руководящей должности.</li>
                    <li>Внесение инновационных решений и технологий, оказывающих существенное влияние на развитие IT-индустрии.</li>
                    <li>Активное участие в образовательных и научных проектах, направленных на развитие IT.</li>
                    <li>Долгосрочный и устойчивый вклад в развитие профессионального сообщества IT.</li>
                </ul>
                <p className="codex-text">
                    2.2. Кандидаты могут быть предложены к награждению как членами GAITE, так и внешними организациями и предприятиями, работающими в сфере IT.
                </p>
            </div>

            <div className="codex-section">
                <h2 className="codex-subtitle">3. Порядок выдвижения и отбора кандидатов</h2>
                <p className="codex-text">
                    3.1. Выдвижение кандидатов на награждение Медалью осуществляется путем подачи заявки в установленной форме на имя исполнительного комитета GAITE.
                </p>
                <p className="codex-text">
                    3.2. Заявка должна содержать:
                </p>
                <ul className="codex-list">
                    <li>Подробное описание заслуг кандидата.</li>
                    <li>Список наград и достижений.</li>
                    <li>Рекомендации от профессиональных ассоциаций, организаций или отдельных специалистов.</li>
                </ul>
                <p className="codex-text">
                    3.3. Исполнительный комитет GAITE рассматривает поступившие заявки и формирует список номинантов.
                </p>
                <p className="codex-text">
                    3.4. Окончательное решение о награждении принимается Советом GAITE на основании голосования.
                </p>
            </div>

            <div className="codex-section">
                <h2 className="codex-subtitle">4. Номинации вручения Медали "За вклад в развитие IT индустрии"</h2>
                <h3 className="codex-text"><b>4.1. Инновационные технологии и разработки</b></h3>
                <p className="codex-text">
                    В этой номинации награждаются специалисты, которые внесли значительный вклад в разработку и внедрение инновационных технологий. Это могут быть новые запатентированные программные продукты, аппаратные решения, уникальные алгоритмы или методы, которые существенно изменили или улучшили существующие процессы и технологии в ИТ-индустрии.
                </p>
                <h3 className="codex-text"><b>4.2. Лидерство и управление в ИТ-проектах</b></h3>
                <p className="codex-text">
                    В этой номинации награждаются специалисты, которые продемонстрировали выдающиеся лидерские качества и управленческие способности в рамках крупных ИТ-проектов. Вручение медали происходит за успешное руководство проектами, которые внесли значительный вклад в цифровую трансформацию компаний или государственных структур.
                </p>
                <h3 className="codex-text"><b>4.3. Вклад в развитие ИТ-образования и популяризацию науки</b></h3>
                <p className="codex-text">
                    В этой номинации отмечаются специалисты, внесшие значительный вклад в образование и популяризацию знаний в области ИТ. Медаль вручается за выдающиеся достижения в преподавательской деятельности, разработке учебных программ, а также за активное участие в менторстве и подготовке новых поколений ИТ-специалистов.
                </p>
            </div>

            <div className="codex-section">
                <h2 className="codex-subtitle">5. Порядок вручения Медали “За вклад в развитие IT индустрии”</h2>
                <p className="codex-text">
                    5.1. Вручение Медали производится на торжественной церемонии, проводимой GAITE, с участием членов ассоциации, представителей IT-индустрии, научного сообщества и СМИ.
                </p>
                <p className="codex-text">
                    5.2. Лауреаты Медали получают нагрудный знак, сертификат о вручении Медали с фото, заверенный печатью Global Association of IT Experts (GAITE).
                </p>
                <p className="codex-text">
                    5.3. Информация о лауреатах публикуется на официальном сайте GAITE globalitassociation.com, а также в специализированных изданиях.
                </p>
            </div>

            <div className="codex-section">
                <h2 className="codex-subtitle">6. Права и обязанности лауреатов</h2>
                <p className="codex-text">
                    6.1. Лауреаты Медали имеют право использовать звание "Лауреат Медали 'За вклад в развитие IT индустрии'" в своих профессиональных и общественных выступлениях, публикациях и официальных документах.
                </p>
                <p className="codex-text">
                    6.2. Лауреаты обязаны способствовать продвижению и поддержке инициатив GAITE, направленных на развитие IT-индустрии.
                </p>
            </div>

            <div className="codex-section">
                <h2 className="codex-subtitle">7. Заключительные положения</h2>
                <p className="codex-text">
                    7.1. Настоящий Устав вступает в силу с момента его утверждения Советом GAITE.
                </p>
                <p className="codex-text">
                    7.2. Изменения и дополнения в Устав могут вноситься по решению Совета GAITE.
                </p>
                <p className="codex-text">
                    7.3. Контроль за соблюдением настоящего статута возлагается на исполнительный комитет GAITE.
                </p>
            </div>

            <div className="codex-section">
                <h2 className="codex-title">Лауреаты Медали</h2>
                <table className="recipients-table">
                    <thead>
                        <tr>
                            <th>Год</th>
                            <th>Имя</th>
                            <th>Страна</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipients.map((recipient, index) => (
                            <tr key={index}>
                                <td>{recipient.year}</td>
                                <td>{recipient.name}</td>
                                <td>{recipient.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Medal;
