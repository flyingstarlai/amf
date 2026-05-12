import { useState, useEffect } from "react"
import { ThemeContext, type Theme } from "./components/ThemeContext"
import { LangContext, type Lang } from "./components/LangContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Summary from "./components/Summary"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "light"
    }
    return "light"
  })

  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as Lang) || "en"
    }
    return "en"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))
  const toggleLang = () => setLang((l) => (l === "en" ? "zh-TW" : "en"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, toggleLang }}>
        <div className="min-h-screen bg-base-100">
          <Navbar />
          <main>
            <Hero />
            <Summary />
            <Experience />
            <Education />
            <Skills />
          </main>
          <Footer />
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}
