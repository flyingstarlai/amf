import { useTheme } from "./ThemeContext"
import { useLang } from "./LangContext"
import { ui } from "../i18n"
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline"

const navLinks = [
  { key: "about", href: "#summary" },
  { key: "experience", href: "#experience" },
  { key: "education", href: "#education" },
  { key: "skills", href: "#skills" },
  { key: "interests", href: "#interests" },
] as const

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()
  const t = ui[lang]

  return (
    <nav className="navbar bg-base-100/70 backdrop-blur-xl fixed top-0 z-50 border-b border-base-300/50 px-6 lg:px-12 print:hidden">
      <div className="navbar-start">
        <a href="#hero" className="text-xl font-extrabold tracking-tight">
          <span className="text-primary">A</span>MF
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base-content/60 hover:text-base-content transition-colors duration-200"
              >
                {t[link.key]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle">
            <Bars3Icon className="w-5 h-5" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100 rounded-xl w-48 border border-base-300/50">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="rounded-lg">{t[link.key]}</a>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleLang}
          className="btn btn-ghost btn-sm btn-circle text-xs font-bold"
          aria-label="Toggle language"
        >
          {lang === "en" ? "中" : "EN"}
        </button>
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-sm btn-circle"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  )
}
