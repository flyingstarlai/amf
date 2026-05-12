import { useLang } from "./LangContext"
import { getInterests } from "../data"
import { ui } from "../i18n"

export default function Interests() {
  const { lang } = useLang()
  const interests = getInterests(lang)
  const t = ui[lang]

  return (
    <section id="interests" className="py-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center">{t.passions}</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-center">{t.interests}</h2>
        <div className="divider divider-primary w-16 mx-auto mb-12"></div>
        <div className="grid gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="p-6 rounded-xl border border-base-300/50 bg-base-100 hover:border-primary/30 transition-colors duration-200">
              <h3 className="text-lg font-bold text-primary mb-3">{interest.title}</h3>
              <p className="text-base-content/70 leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
