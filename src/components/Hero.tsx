import { profile } from "../data"
import { useTheme } from "./ThemeContext"

export default function Hero() {
  const { theme } = useTheme()
  const photo = theme === "dark" ? profile.photoDark : profile.photoLight

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-16">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="shrink-0">
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-base-100 shadow-xl">
            <img
              src={photo}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Hello, I&apos;m</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-base-content/60 font-light leading-relaxed max-w-xl">
            {profile.titles.join(" · ")}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
            <a href="#experience" className="btn btn-primary btn-sm rounded-full px-6">
              View Experience
            </a>
            <a href="#summary" className="btn btn-ghost btn-sm rounded-full px-6">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
