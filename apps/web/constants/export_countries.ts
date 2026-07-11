import { AU, CA, DE, ES, FlagComponent, FR, GB, ID, IN, JP, KR, PL, RU, SG, TW, US } from 'country-flag-icons/react/1x1';

export type ExportCountry = {
    name: string,
    flag: FlagComponent,
    code: string,
    alias?: string
}

export const exportCountries: ExportCountry[] = [
    {
        name: "india",
        flag: IN,
        code: "IN"
    },
    {
        name: "australia",
        flag: AU,
        code: "AU"
    },
    {
        name: "france",
        flag: FR,
        code: "FR"
    },
    {
        name: "canada",
        flag: CA,
        code: "CA"
    },
    {
        name: "united states of america",
        flag: US,
        code: "US",
        alias: "united states"
    },
    {
        name: "singapore",
        flag: SG,
        code: "SG"
    },
    {
        name: "poland",
        flag: PL,
        code: "PL"
    },
    {
        name: "indonesia",
        flag: ID,
        code: "ID"
    },
    {
        name: "united kingdom",
        flag: GB,
        code: "GB",
        alias: "england"
    },
    {
        name: "japan",
        flag: JP,
        code: "JP"
    },
    {
        name: "south korea",
        flag: KR,
        code: "KR"
    },
    {
        name: "taiwan",
        flag: TW,
        code: "TW"
    },
    {
        name: "russia",
        flag: RU,
        code: "RU"
    },
    {
        name: "germany",
        flag: DE,
        code: "DE"
    },
    {
        name: "spain",
        flag: ES,
        code: "ES"
    },
]