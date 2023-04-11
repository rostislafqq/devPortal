import { PCombobox } from '../../../types/combobox'
import s from '../combobox.module.scss'

const Combobox:React.FC<PCombobox> = ({searchValue,setSearchValue,searchOnChange,comboboResult,companyInfo}) =>{
    return<>
        <h2 className={s.header}>Поиск по:</h2>
            <ul className={s.searchTypes}>
                <li className={s.searchType}>по названию организации</li>
                <li className={s.searchType}>по адресу</li>
                <li className={s.searchType}>по ИНН</li>
            </ul>
            <div className={s.combobox}>
                <input className={s.input} type="text" value={searchValue} onChange={(e)=>{
                    setSearchValue(e.target.value)
                    searchOnChange(e.target.value)
                }} />
                <ul className={s.searchedItems}>
                    {comboboResult?.suggestions?comboboResult.suggestions.map((v,i)=><li key={i} className={s.searchedItem} onClick={()=>{
                        setSearchValue(v.value)
                        searchOnChange('')
                        companyInfo({'query':v.data.inn})
                    }}>{v.value} <br/>{v.data.address.value}<br/>{v.data.inn}</li>):''}
                </ul>
            </div>
    </>
}

export default Combobox