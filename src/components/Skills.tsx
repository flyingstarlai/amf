import { useLang } from "./LangContext"
import { getSkills } from "../data"
import { ui } from "../i18n"

export default function Skills() {
  const { lang } = useLang()
  const skills = getSkills(lang)
  const t = ui[lang]

  return (
    <section id="skills" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center">{t.expertise}</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-center">{t.technicalSkills}</h2>
        <div className="divider divider-primary w-16 mx-auto mb-12"></div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="badge badge-lg bg-base-200 border-0 text-base-content/80 px-5 py-3 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
