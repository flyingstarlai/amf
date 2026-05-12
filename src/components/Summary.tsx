import { useLang } from "./LangContext"
import { getProfile } from "../data"
import { ui } from "../i18n"

export default function Summary() {
  const { lang } = useLang()
  const profile = getProfile(lang)
  const t = ui[lang]

  return (
    <section id="summary" className="py-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{t.about}</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-8">{t.professionalSummary}</h2>
        <div className="divider divider-primary w-16 mx-auto mb-8"></div>
        <p className="text-base-content/70 text-lg leading-relaxed">{profile.summary}</p>
      </div>
    </section>
  )
}
