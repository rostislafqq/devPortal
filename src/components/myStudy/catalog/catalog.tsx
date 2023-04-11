import s from './catalog.module.scss'

const Catalog = () =>{



    return(
        <div className={s.container}>
            <h2 className={s.header}>Каталог тем</h2>
            <ul className={s.themeContainer}>
                <li className={s.item}>
                    <button className={`${s.theme__active}`}>Все</button>
                </li>
                <li className={s.item}>
                    <button className={s.theme}>Рабочая среда</button>
                </li>
                <li className={s.item}>
                    <button className={s.theme}>Библиотеки</button>
                </li>
                <li className={s.item}>
                    <button className={s.theme}>Библиотеки</button>
                </li>
                <li className={s.item}>
                    <button className={`${s.theme} ${s.lastBtn}`}>Не пройденные</button></li>  
            </ul>
            <div className={s.cardContainer}>
                <div className={s.card}>
                    <h2 className={s.cardHeader}>
                        Начало работы
                    </h2>
                    <div className={s.introContainer}>
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
                    <h2 className={s.cardHeader}>
                        Работа с библиотеками GPN
                    </h2>
                    <div className={s.introContainer}>
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
                            <p className={s.count}>255</p>
                            <p className={s.task}> заданий</p>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <h2 className={s.cardHeader}>
                        Введение в рабочую среду 
                    </h2>
                    <div className={s.introContainer}>
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
                <div className={s.card}>
                    <h2 className={s.cardHeader}>
                        Начало работы
                    </h2>
                    <div className={s.introContainer}>
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
                    <h2 className={s.cardHeader}>
                        Работа с библиотеками GPN
                    </h2>
                    <div className={s.introContainer}>
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
                            <p className={s.count}>255</p>
                            <p className={s.task}> заданий</p>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <h2 className={s.cardHeader}>
                        Введение в рабочую среду 
                    </h2>
                    <div className={s.introContainer}>
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

export default Catalog