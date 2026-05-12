import { useState, useEffect } from "react"
import { ThemeContext, type Theme } from "./components/ThemeContext"
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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
    </ThemeContext.Provider>
  )
}
