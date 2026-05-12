import { education } from "../data"

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center">Background</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-center">Education</h2>
        <div className="divider divider-primary w-16 mx-auto mb-12"></div>
        <div className="grid gap-4">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start gap-4 p-5 rounded-xl border border-base-300/50 bg-base-100 hover:border-primary/30 transition-colors duration-200">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 5.94.75.75 0 01-.794 0 49.948 49.948 0 00-9.902-5.94.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M14.764 14.088a49.12 49.12 0 00-2.764-1.08 49.12 49.12 0 00-2.764 1.08c-.244.1-.487.204-.729.31v2.582c0 .462.27.868.69 1.054a19.44 19.44 0 005.598.508 19.44 19.44 0 005.598-.508.75.75 0 00.69-1.054v-2.582a34.55 34.55 0 00-.73-.31 49.12 49.12 0 00-2.764-1.08z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base">{edu.school}</h3>
                <p className="text-sm text-base-content/60 mt-0.5">{edu.degree}</p>
              </div>
              <span className="text-xs text-base-content/40 font-mono shrink-0 pt-1">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
