import Header from '../header/header'
import Catalog from './catalog/catalog'
import s from './myStudyContainer.module.scss'
import Recomended from './recomended/recomended'
import Way from './way/way'

const MyStudyContainer = () =>{
    return(
    <>
        <Header />
        <main className={s.main}>
            <Recomended />
            <Way />
            <Catalog />
        </main>
    </>
        
    )
}

export default MyStudyContainer