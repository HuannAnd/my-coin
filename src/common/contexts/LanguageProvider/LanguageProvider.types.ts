import LanguageEnum from "@/common/enums/LanguageEnum"

export type ILanguageContext = LanguageEnum | string
export type ISetLanguageContext = (lang: LanguageEnum) => void