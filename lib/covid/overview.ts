import axios, { AxiosResponse } from "axios";

export async function getDataOverview() {
    const response: AxiosResponse<DataOverview> = await axios.get("https://static.easysunday.com/covid-19/getTodayCases.json")
    return response.data
}

export interface DataOverview {
    updated: number
    country: string
    cases: number
    todayCases: number
    deaths: number
    todayDeaths: number
    recovered: number
    todayRecovered: number
    active: number
    critical: number
    casesPerOneMillion: number
    deathsPerOneMillion: number
    tests: number
    testsPerOneMillion: number
    population: number
    continent: string
    oneCasePerPeople: number
    oneDeathPerPeople: number
    oneTestPerPeople: number
    activePerOneMillion: number
    recoveredPerOneMillion: number
    criticalPerOneMillion: number
    Confirmed: number
    Recovered: number
    Hospitalized: number
    Deaths: number
    NewConfirmed: number
    NewRecovered: number
    NewHospitalized: number
    NewDeaths: number
    UpdateDate: string
    DevBy: string
}
