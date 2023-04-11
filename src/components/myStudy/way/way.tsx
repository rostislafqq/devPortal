import s from './way.module.scss'
import boldArrow from '../../../assets/img/boldArrow.svg'
import complited from '../../../assets/img/complited.svg'

const Way = () =>{
    return(
        <div className={s.container}>
            <div className={s.headerContainer}>
                <div className={s.headerLeft}>
                    <h2 className={s.header}>Путь Front End Developer</h2>
                    <button className={s.closeBtn}>Скрыть пройденные</button>
                </div>
                <div className={s.arrowContainer}>
                    <button><img src={boldArrow} alt="arrow" /></button>
                    <button><img src={boldArrow} className={s.secondArrow} alt="arrow" /></button>
                </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.card}>
                    <h2 className={s.cardHeader}>Добро пожаловать!</h2>
                    <div className={s.intro}>
                        <p className={s.introText}>Для новичка</p>
                        <div className={s.introCircle}></div>
                        <p className={s.introText}>Основы работы</p>
                    </div>
                    <p className={s.info}>Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете</p>
                    <div className={s.cardFooter}>
                        <button className={s.cardBtn}>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.85314 2.36057L1.5 0.5L0 6H5.5L4.02931 3.97781C4.8599 3.36333 5.88754 2.99999 7.00004 2.99999C9.419 2.99999 11.4368 4.71776 11.9 7H13.9283C13.7711 5.91148 13.3587 4.8686 12.7165 3.95999C11.8091 2.67595 10.4957 1.73483 8.98815 1.28826C7.48057 0.841697 5.86654 0.915695 4.40614 1.49833C3.85028 1.7201 3.32899 2.01064 2.85314 2.36057Z" fill="#0078D2"/>
                                <path d="M1.2835 12.04C0.641349 11.1314 0.228902 10.0885 0.0717773 9H2.10001C2.56327 11.2822 4.58103 13 6.99999 13C8.11249 13 9.14013 12.6367 9.97072 12.0222L8.50004 10H14L12.5 15.5L11.1469 13.6394C10.671 13.9894 10.1498 14.2799 9.59389 14.5017C8.13349 15.0843 6.51946 15.1583 5.01188 14.7117C3.5043 14.2652 2.19096 13.3241 1.2835 12.04Z" fill="#0078D2"/>
                            </svg>
                             Пройти заново
                        </button>
                        <img src={complited} alt="is complited" />
                    </div>
                </div>
                <div className={s.card}>
                    <h2 className={s.cardHeader}>Начало работы</h2>
                    <div className={s.intro}>
                        <p className={s.introText}>Для новичка</p>
                        <div className={s.introCircle}></div>
                        <p className={s.introText}>Основы работы</p>
                    </div>
                    <p className={s.info}>Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете</p>
                    <div className={s.cardFooter}>
                        <button className={s.cardBtnCommon}>
                            Продолжить тему
                        </button>
                        <div className={s.readyContainer}>
                            <p className={s.count}>8/10</p>
                            <p className={s.task}> заданий</p>
                            <svg>
			                	<circle className={s.progessBg} cx="12" cy="12" r="8"></circle>
			                	<circle className={s.progress} cx="12" cy="12" r="8"></circle>
			                </svg>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <h2 className={s.cardHeader}>Введение в рабочую среду </h2>
                    <div className={s.intro}>
                        <p className={s.introText}>Для новичка</p>
                        <div className={s.introCircle}></div>
                        <p className={s.introText}>Основы работы</p>
                    </div>
                    <p className={s.info}>Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете</p>
                    <div className={s.cardFooter}>
                        <button className={s.cardBtnCommon}>
                            Начать
                        </button>
                        <div className={s.readyContainer}>
                            <p className={s.count}>10</p>
                            <p className={s.task}> заданий</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Way