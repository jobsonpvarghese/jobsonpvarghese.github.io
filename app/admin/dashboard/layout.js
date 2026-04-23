"use client"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAdminAuth } from "../../../context/AdminAuthContext"
import Link from "next/link"

const navItems = [
  { label: "Overview",       href: "/admin/dashboard",                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
  { label: "Projects",       href: "/admin/dashboard/projects",       icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg> },
  { label: "Experience",     href: "/admin/dashboard/experience",     icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
  { label: "Skills",         href: "/admin/dashboard/skills",         icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { label: "Education",      href: "/admin/dashboard/education",      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg> },
  { label: "Certifications", href: "/admin/dashboard/certifications", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg> },
]

export default function DashboardLayout({ children }) {
  const { isAuthenticated, loading, logout } = useAdminAuth()
  const router   = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!loading && !isAuthenticated) router.replace("/admin")
  }, [isAuthenticated, loading, router])

  if (loading || !isAuthenticated) return (
    <div className="min-h-screen bg-[#0f0d0b] flex items-center justify-center">
      <div className="w-4 h-4 border border-amber-600/40 border-t-amber-600 rounded-full animate-spin" />
    </div>
  )

  const handleLogout = () => { logout(); router.replace("/admin") }

  return (
    <div className="min-h-screen bg-[#0f0d0b] flex" style={{ fontFamily: "'Raleway', sans-serif" }}>

      {/* ── Sidebar ── */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-56 bg-[#0a0907] border-r border-stone-900 flex flex-col
        transition-transform duration-300 lg:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>

        {/* brand */}
        <div className="px-6 py-5 border-b border-stone-900 flex items-center justify-between">
          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-stone-700 mb-0.5">Admin Panel</p>
            <p className="text-sm font-normal text-stone-300">J<span className="text-amber-600">V</span> Portfolio</p>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-stone-700 hover:text-stone-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map(item => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-6 py-2.5 text-[11px] tracking-[0.12em] uppercase transition-all duration-200 relative
                  ${active
                    ? "text-amber-500 bg-amber-600/8"
                    : "text-stone-600 hover:text-stone-300 hover:bg-white/3"}`}
              >
                {active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-600" />}
                <span className={active ? "text-amber-600" : "text-stone-700"}>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* footer */}
        <div className="px-6 py-4 border-t border-stone-900 space-y-3">
          <a href="/" target="_blank" className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-stone-700 hover:text-stone-400 transition-colors">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
            View site
          </a>
          <button onClick={handleLogout}
            className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-stone-700 hover:text-red-400 transition-colors">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign out
          </button>
        </div>
      </aside>

      {/* sidebar overlay — mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Main ── */}
      <div className="flex-1 lg:ml-56 flex flex-col min-h-screen">
        {/* topbar */}
        <header className="sticky top-0 z-20 bg-[#0a0907]/90 backdrop-blur border-b border-stone-900 px-6 py-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-stone-600 hover:text-stone-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <p className="text-[10px] tracking-widest uppercase text-stone-600 hidden lg:block">
            {navItems.find(n => n.href === pathname)?.label ?? "Dashboard"}
          </p>
          <div className="flex items-center gap-2 text-[10px] tracking-wide text-stone-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
            admin
          </div>
        </header>

        {/* page content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
