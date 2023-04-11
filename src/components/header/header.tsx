import s from './header.module.scss'
import bell from '../../assets/img/bell.svg'
import qw from '../../assets/img/qw.svg'
import sun from '../../assets/img/Sun.svg'
import avatar from '../../assets/img/avatar.png'
import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <header className={s.header}>
            <div className={s.left}>
                <div className={s.pageHeader}>
                    <h2 className={s.headerFirst}>Портал</h2>
                    <h2 className={s.headerSecond}>Разработчика</h2>
                </div>
                <nav className={s.nav}>
                    <Link className={s.nav__active} to="/geolacation">Моё обучение</Link>
                    <Link to="/">Задачи</Link>
                </nav>
            </div>
            <div className={s.right}>
                <div className={s.iconsContainer}>
                    <button className={s.iconBtn}>
                        <img className={s.icon} src={bell} alt="колокольчик" />
                    </button>
                    <button className={s.iconBtn}>
                        <img className={s.icon} src={qw} alt="инфо" />
                    </button>
                    <button className={s.iconBtn}>
                        <img className={s.icon} src={sun} alt="свет" />
                    </button>
                </div>
                <div className={s.user}>
                    <img className={s.userAvatar} src={avatar} alt="avatar" />
                    <p className={s.userName}>Михаил Романов</p>
                </div>
            </div>
        </header>
    )
}

export default Header