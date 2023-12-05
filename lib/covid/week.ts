import axios, { AxiosResponse } from "axios"

export async function getDataPerWeek() {
    const { data }: AxiosResponse<DataPerWeek[]> = await axios.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces")
    return data.filter((x) => !(x.province.includes("ประเทศ") || x.province.includes("ไม่ระบุ")))
}
export interface DataPerWeek {
    year: number
    weeknum: number
    province: string
    new_case: number
    total_case: number
    new_case_excludeabroad: number
    total_case_excludeabroad: number
    new_death: number
    total_death: number
    update_date: string
}
