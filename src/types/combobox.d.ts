export interface ICompanyInfoFucnk{
    query: number
    kpp?: number
}

export interface IResult {
    suggestions:[{
            data:{
                address:{
                    value:string
                }
                inn:number,
                kpp:number
                state:{
                    status:string
                }
                opf:{
                    full:string
                }
            }
            value:string
         }
    ]
}

export interface PCombobox{
    searchValue:string|number,
    setSearchValue:React.Dispatch<React.SetStateAction<string | number>>,
    searchOnChange:(query: string | number) => void,
    comboboResult: IResult | null | undefined,
    companyInfo:(query: ICompanyInfoFucnk) => void
}

export interface PCompanyInfo{
    companyInfoData:IResult | null | undefined,
    companyInfo: (query: ICompanyInfoFucnk) => void
}