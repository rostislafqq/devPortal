import { PCompanyInfo } from '../../../types/combobox'
import s from '../combobox.module.scss'
import {Link} from 'react-router-dom'

const CompanyInfo:React.FC<PCompanyInfo> =({companyInfoData,companyInfo}) =>{
    return(
        <>
            <div className={s.companyInfo}>
                <h2 className={s.companyInfoHeader}>Информация о компании:</h2>
                <p className={s.commonText}>Инн:{companyInfoData?.suggestions[0].data.inn}</p>
                <p className={s.commonText}>Наименование:{companyInfoData?.suggestions[0].value}</p>
                <p className={s.commonText}>Адресс:{companyInfoData?.suggestions[0].data.address.value}</p>
                <p className={s.commonText}>Статус:{companyInfoData?.suggestions[0].data.state.status}</p>
                <p className={s.commonText}>	Организационно-правовая форма:{companyInfoData?.suggestions[0].data.opf.full}</p>
                <h2 className={s.branchesHeader}>Фелиалы:</h2>
                <ul className={s.branches}>
                    {companyInfoData?.suggestions.slice(1).map((v,i)=><Link  to='/combobox' key={v.value} className={`${s.branch} ${s.commonLink}`} onClick={()=>{
                        companyInfo({
                            "query": v.data.inn,
                            "kpp": v.data.kpp
                        })
                    }}>{v.value}</Link>)}
                </ul>
                
            </div>
            <Link className={s.commonLink} to='/geolacation'>Предыдущее задание</Link>
        </>
    )
}

export default CompanyInfo