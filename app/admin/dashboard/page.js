"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { getProjects, getExperience, getSkills, getEducation, getCertifications } from "../../../lib/adminStore"

const sections = [
  { label: "Projects",       href: "/admin/dashboard/projects",       color: "text-amber-500",  bg: "bg-amber-600/8",  border: "border-amber-700/20" },
  { label: "Experience",     href: "/admin/dashboard/experience",     color: "text-sky-400",    bg: "bg-sky-600/8",    border: "border-sky-700/20" },
  { label: "Skills",         href: "/admin/dashboard/skills",         color: "text-violet-400", bg: "bg-violet-600/8", border: "border-violet-700/20" },
  { label: "Education",      href: "/admin/dashboard/education",      color: "text-emerald-400",bg: "bg-emerald-600/8",border: "border-emerald-700/20" },
  { label: "Certifications", href: "/admin/dashboard/certifications", color: "text-rose-400",   bg: "bg-rose-600/8",   border: "border-rose-700/20" },
]

export default function DashboardOverview() {
  const [counts, setCounts] = useState({ projects: 0, experience: 0, skills: 0, education: 0, certifications: 0 })

  useEffect(() => {
    setCounts({
      projects:       getProjects().length,
      experience:     getExperience().length,
      skills:         getSkills().length,
      education:      getEducation().length,
      certifications: getCertifications().length,
    })
  }, [])

  const countMap = {
    Projects: counts.projects, Experience: counts.experience,
    Skills: counts.skills, Education: counts.education, Certifications: counts.certifications
  }

  return (
    <div>
      {/* heading */}
      <div className="mb-8">
        <h1 className="text-xl font-normal text-stone-100 mb-1">Overview</h1>
        <p className="text-[11px] tracking-wide text-stone-600">Manage your portfolio content from here.</p>
      </div>

      {/* stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
        {sections.map(s => (
          <Link key={s.href} href={s.href}
            className={`group ${s.bg} border ${s.border} p-5 hover:brightness-125 transition-all duration-200`}>
            <p className={`text-2xl font-normal ${s.color} mb-1`}>{countMap[s.label]}</p>
            <p className="text-[10px] tracking-widest uppercase text-stone-600 group-hover:text-stone-400 transition-colors">{s.label}</p>
          </Link>
        ))}
      </div>

      {/* quick links */}
      <div className="border border-stone-900 bg-[#0d0b09]">
        <div className="px-6 py-4 border-b border-stone-900">
          <p className="text-[10px] tracking-widest uppercase text-stone-600">Quick Actions</p>
        </div>
        <div className="divide-y divide-stone-900">
          {sections.map(s => (
            <Link key={s.href} href={s.href}
              className="flex items-center justify-between px-6 py-4 hover:bg-white/2 transition-colors group">
              <div className="flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${s.color.replace("text-", "bg-")} opacity-60`} />
                <span className="text-sm text-stone-400 group-hover:text-stone-200 transition-colors">{s.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-stone-700">{countMap[s.label]} items</span>
                <svg className="text-stone-800 group-hover:text-stone-500 transition-colors" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* firebase note */}
      <div className="mt-6 border border-amber-700/20 bg-amber-600/4 px-5 py-4 flex items-start gap-3">
        <svg className="text-amber-600/60 shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p className="text-[11px] text-stone-600 leading-relaxed">
          Data is currently stored in <span className="text-stone-400">localStorage</span>. Replace <code className="text-amber-600/70 text-[10px]">lib/adminStore.js</code> read/write functions with Firestore calls to connect Firebase.
        </p>
      </div>
    </div>
  )
}
