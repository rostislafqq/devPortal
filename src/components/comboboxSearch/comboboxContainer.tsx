import React, { useState } from 'react';
import s from './combobox.module.scss'
import { ICompanyInfoFucnk, IResult } from '../../types/combobox';
import Combobox from './combobox/combobox';
import CompanyInfo from './companyInfo/companyInfo';

const ComboboxContainer =() =>{
    const [searchValue, setSearchValue] = useState<string|number>('');
    const [comboboResult,setComboboxResult] = useState<IResult|null>()
    const [companyInfoData,setCompanyInfoData] = useState<IResult|null>()

    //комбобокс
    const searchOnChange =(query:string|number)=>{
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
        const token = "afbd72c870f0fbbe7b4b522d8230d9320fd4fa65";
        const options:RequestInit = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query,count:5})
        }

        fetch(url, options)
        .then(response => response.json())
        .then(result => setComboboxResult(result))
        .catch(error => console.log("error", error));
    }

    //информация о компании
    const companyInfo = (query:ICompanyInfoFucnk)=>{
        console.log(query)
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
        const token = "afbd72c870f0fbbe7b4b522d8230d9320fd4fa65";
        const options:RequestInit = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify(query)
        }

        fetch(url, options)
        .then(response => response.json())
        .then(result => setCompanyInfoData(result))
        .catch(error => console.log("error", error));
    }

    return (
        <div className={s.combContainer}>
            <Combobox searchValue={searchValue} setSearchValue={setSearchValue} searchOnChange={searchOnChange} comboboResult={comboboResult} companyInfo={companyInfo}/>
            {companyInfoData?<CompanyInfo companyInfoData={companyInfoData} companyInfo={companyInfo}/>:''}  
        </div>
    );
};

export default ComboboxContainer