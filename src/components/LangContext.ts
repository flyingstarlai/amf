import { createContext, useContext } from "react"

export type Lang = "en" | "zh-TW"

export interface LangContextType {
  lang: Lang
  toggleLang: () => void
}

export const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
})

export function useLang() {
  return useContext(LangContext)
}
