export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-base-300/50 print:hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
        <p className="text-sm text-base-content/40">
          &copy; {new Date().getFullYear()} Andrian Muzakki Firmansyah
        </p>
      </div>
    </footer>
  )
}
