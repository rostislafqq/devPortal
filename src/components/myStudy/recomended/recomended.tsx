import s from './recomended.module.scss'
import arrow from '../../../assets/img/arrow.svg'

const Recomended =() =>{
    return(
        <div className={s.container}>
            <h1 className={s.header}>Рекомендуемые темы</h1>
            <div className={s.card}>
                <div className={s.circleBig}>
			        <div className={s.circleText}>
			        	<p className={s.progressNum}>8/10</p>
                        <p className={s.progressText}>заданий</p>
			        </div>
			        <svg>
			        	<circle className={s.progessBg} cx="77" cy="77" r="72"></circle>
			        	<circle className={s.progress} cx="77" cy="77" r="72"></circle>
			        </svg>
		        </div>
                <div className={s.start}>
                    <h2 className={s.startHeader}>Начало работы</h2>
                    <div className={s.introContainer}>
                        <p className={s.introText}>Для новичка</p>
                        <div className={s.introCircle}></div>
                        <p className={s.introText}>Основы работы</p>
                    </div>
                    <p className={s.info}>
                    Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете
                    </p>
                    <button className={s.btn}>Продолжить тему</button>
                </div>
            </div>
            <div className={s.show}>
                <button className={s.showBtn}>Показать ещё <img src={arrow} alt="arrow" /></button>
            </div>
        </div>
    )
}

export default Recomended