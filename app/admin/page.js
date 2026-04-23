"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAdminAuth } from "../../context/AdminAuthContext"

export default function AdminLogin() {
  const { login, isAuthenticated, loading } = useAdminAuth()
  const router = useRouter()
  const [form, setForm]     = useState({ username: "", password: "" })
  const [error, setError]   = useState("")
  const [busy, setBusy]     = useState(false)

  useEffect(() => {
    if (!loading && isAuthenticated) router.replace("/admin/dashboard")
  }, [isAuthenticated, loading, router])

  const handleSubmit = async e => {
    e.preventDefault()
    setBusy(true)
    setError("")
    const res = login(form.username, form.password)
    if (res.success) {
      router.replace("/admin/dashboard")
    } else {
      setError(res.error)
      setBusy(false)
    }
  }

  if (loading) return (
    <div className="min-h-screen bg-[#0f0d0b] flex items-center justify-center">
      <div className="w-4 h-4 border border-amber-600/40 border-t-amber-600 rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0f0d0b] flex items-center justify-center px-4 relative overflow-hidden">
      {/* bg glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-amber-700/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-amber-800/6 blur-[100px]" />

      {/* grid */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="login-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e7e5e4" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#login-grid)" />
      </svg>

      <div className="relative w-full max-w-sm">
        {/* logo / brand */}
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-600 mb-3">Portfolio Admin</p>
          <h1 className="text-2xl font-normal text-stone-100">
            J<span className="text-amber-600">V</span>
          </h1>
        </div>

        {/* card */}
        <div className="bg-[#1a1713] border border-stone-800 p-8">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-600/30" />

          <p className="text-[11px] tracking-widest uppercase text-stone-600 mb-6">Sign in to continue</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-stone-600 mb-2">Username</label>
              <input
                type="text"
                autoComplete="username"
                value={form.username}
                onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
                className="w-full bg-[#0f0d0b] border border-stone-800 text-stone-200 text-sm px-4 py-3
                           focus:outline-none focus:border-amber-700/60 transition-colors placeholder:text-stone-700"
                placeholder="admin"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-stone-600 mb-2">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                className="w-full bg-[#0f0d0b] border border-stone-800 text-stone-200 text-sm px-4 py-3
                           focus:outline-none focus:border-amber-700/60 transition-colors placeholder:text-stone-700"
                placeholder="••••••••••"
                required
              />
            </div>

            {error && (
              <p className="text-[11px] text-red-400/80 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-red-400/80 inline-block" />
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="mt-2 w-full bg-amber-600 text-[#0f0d0b] text-[11px] tracking-[0.2em] uppercase py-3.5
                         hover:bg-amber-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {busy ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center text-[10px] text-stone-800 mt-6 tracking-wide">
          ← <a href="/" className="hover:text-stone-600 transition-colors">Back to portfolio</a>
        </p>
      </div>
    </div>
  )
}
