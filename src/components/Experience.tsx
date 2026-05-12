import { useLang } from "./LangContext"
import { getExperience } from "../data"
import { ui } from "../i18n"

export default function Experience() {
  const { lang } = useLang()
  const experience = getExperience(lang)
  const t = ui[lang]

  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center">{t.career}</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-center">{t.workExperience}</h2>
        <div className="divider divider-primary w-16 mx-auto mb-12"></div>

        <ul className="timeline timeline-vertical timeline-compact">
          {experience.map((job, index) => (
            <li key={index}>
              {index > 0 && <hr />}
              <div className="timeline-middle">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-content"></div>
                </div>
              </div>
              <div className={`timeline-${index % 2 === 0 ? "start" : "end"} mb-10`}>
                <div className="timeline-box border border-dashed border-base-300/50 bg-base-100 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <span className="text-xs text-base-content/50 font-mono">{job.period}</span>
                  </div>
                  <div className="text-primary font-medium text-sm">
                    {job.company}{job.type && <span className="text-base-content/40"> · {job.type}</span>}
                  </div>
                  {job.location && (
                    <p className="text-xs text-base-content/40 mt-1">{job.location}</p>
                  )}
                  <ul className="mt-3 space-y-1.5">
                    {job.descriptions.map((desc, i) => (
                      <li key={i} className="text-sm text-base-content/70 flex gap-2">
                        <span className="text-primary mt-0.5 shrink-0">›</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {job.skills.map((skill) => (
                      <span key={skill} className="badge badge-sm badge-primary/10 text-primary border-0">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
