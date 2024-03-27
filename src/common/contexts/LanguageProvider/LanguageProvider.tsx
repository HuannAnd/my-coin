import { createContext, useCallback, useState } from "react"

import {
  ILanguageContext,
  ISetLanguageContext
} from "./LanguageProvider.types"
import LanguageEnum from "@/common/enums/LanguageEnum"

interface Props extends React.PropsWithChildren {}

export const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext)
export const SetLanguageProviderContext = createContext<ISetLanguageContext>(() => {})

export default function LanguageProvider({children}: Props){ 
  const [language, setLanguage] = useState<ILanguageContext>(
    localStorage.getItem("MetaMaskSDKLang") || 
    (navigator.language) || 'en'
  )

  const setMetamaskLanguage = useCallback((lang: LanguageEnum) => setLanguage(lang), [])

  return (
    <SetLanguageProviderContext.Provider value={setMetamaskLanguage}>
      <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>)
    </SetLanguageProviderContext.Provider>
  )
}