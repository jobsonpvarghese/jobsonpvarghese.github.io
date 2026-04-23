"use client"
import { useState, useEffect } from "react"
import { getEducation, addEducation, updateEducation, deleteEducation } from "../../../../lib/adminStore"

const EMPTY = { degree: "", level: "", school: "", location: "", duration: "" }

export default function EducationAdmin() {
  const [items, setItems]     = useState([])
  const [form, setForm]       = useState(EMPTY)
  const [editing, setEditing] = useState(null)
  const [open, setOpen]       = useState(false)
  const [confirm, setConfirm] = useState(null)

  useEffect(() => { setItems(getEducation()) }, [])

  const openAdd  = () => { setForm(EMPTY); setEditing(null); setOpen(true) }
  const openEdit = item => { setForm({ ...item }); setEditing(item.id); setOpen(true) }
  const closeForm = () => { setOpen(false); setEditing(null); setForm(EMPTY) }

  const handleSave = e => {
    e.preventDefault()
    if (editing) setItems(updateEducation(editing, form))
    else setItems(addEducation(form))
    closeForm()
  }

  const f = (k, v) => setForm(p => ({ ...p, [k]: v }))

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-normal text-stone-100 mb-1">Education</h1>
          <p className="text-[11px] text-stone-600">{items.length} entries</p>
        </div>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-amber-600 text-[#0f0d0b] text-[10px] tracking-[0.18em] uppercase px-4 py-2.5 hover:bg-amber-500 transition-colors">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add degree
        </button>
      </div>

      <div className="border border-stone-900 bg-[#0d0b09] divide-y divide-stone-900">
        {items.length === 0 && <p className="px-6 py-8 text-sm text-stone-700 text-center">No education yet.</p>}
        {items.map(item => (
          <div key={item.id} className="flex items-start gap-4 px-5 py-4 hover:bg-white/2 group">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] tracking-widest uppercase text-amber-700/60 border border-amber-700/20 px-2 py-0.5">{item.level}</span>
              </div>
              <p className="text-sm text-stone-300 mb-0.5">{item.degree}</p>
              <p className="text-[11px] text-stone-500">{item.school}</p>
              <p className="text-[10px] text-stone-700 mt-0.5">{item.location} · {item.duration}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0 mt-0.5">
              <button onClick={() => openEdit(item)} className="px-3 py-1.5 text-[10px] tracking-wide uppercase text-stone-600 hover:text-stone-200 border border-stone-800 hover:border-stone-600 transition-colors">Edit</button>
              <button onClick={() => setConfirm(item.id)} className="px-3 py-1.5 text-[10px] tracking-wide uppercase text-stone-700 hover:text-red-400 border border-stone-800 hover:border-red-900 transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60" onClick={closeForm} />
          <div className="relative z-10 w-full max-w-lg bg-[#0d0b09] border-l border-stone-900 h-full overflow-y-auto p-7 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-normal text-stone-200">{editing ? "Edit Degree" : "Add Degree"}</h2>
              <button onClick={closeForm} className="text-stone-700 hover:text-stone-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <form onSubmit={handleSave} className="flex flex-col gap-4">
              {[
                { label: "Degree / Programme", key: "degree",   placeholder: "Post Graduate Diploma in Mobile Application Development" },
                { label: "Level",              key: "level",    placeholder: "Post Graduate" },
                { label: "School",             key: "school",   placeholder: "Fanshawe College" },
                { label: "Location",           key: "location", placeholder: "London, Ontario, Canada" },
                { label: "Duration",           key: "duration", placeholder: "May 2022 — Aug 2023" },
              ].map(({ label, key, placeholder }) => (
                <div key={key}>
                  <label className="block text-[10px] tracking-widest uppercase text-stone-600 mb-1.5">{label}</label>
                  <input value={form[key]} onChange={e => f(key, e.target.value)} placeholder={placeholder} required
                    className="w-full bg-[#0a0907] border border-stone-800 text-stone-200 text-sm px-3 py-2.5 focus:outline-none focus:border-amber-700/50 transition-colors placeholder:text-stone-800" />
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                <button type="submit" className="flex-1 bg-amber-600 text-[#0f0d0b] text-[11px] tracking-[0.15em] uppercase py-3 hover:bg-amber-500 transition-colors">
                  {editing ? "Save changes" : "Add degree"}
                </button>
                <button type="button" onClick={closeForm} className="px-5 border border-stone-800 text-stone-600 text-[11px] tracking-[0.15em] uppercase hover:border-stone-600 hover:text-stone-300 transition-colors">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setConfirm(null)} />
          <div className="relative z-10 bg-[#0d0b09] border border-stone-800 p-7 max-w-sm w-full">
            <p className="text-sm text-stone-300 mb-1">Delete this entry?</p>
            <p className="text-[11px] text-stone-600 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => { setItems(deleteEducation(confirm)); setConfirm(null) }} className="flex-1 bg-red-600/80 text-white text-[11px] tracking-[0.15em] uppercase py-2.5 hover:bg-red-600 transition-colors">Delete</button>
              <button onClick={() => setConfirm(null)} className="flex-1 border border-stone-800 text-stone-600 text-[11px] tracking-[0.15em] uppercase py-2.5 hover:border-stone-600 hover:text-stone-300 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
