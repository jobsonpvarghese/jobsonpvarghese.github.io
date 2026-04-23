"use client"
import { createContext, useContext, useState, useEffect } from "react"

// ── Credentials (swap with Firebase Auth later) ──────────────────────────────
const ADMIN_USER = "admin"
const ADMIN_PASS = "portfolio2025"
const TOKEN_KEY  = "admin_auth_token"
const TOKEN_VAL  = "jv_admin_authenticated"

const AuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY)
    setIsAuthenticated(token === TOKEN_VAL)
    setLoading(false)
  }, [])

  const login = (username, password) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem(TOKEN_KEY, TOKEN_VAL)
      setIsAuthenticated(true)
      return { success: true }
    }
    return { success: false, error: "Invalid credentials" }
  }

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAdminAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAdminAuth must be used inside AdminAuthProvider")
  return ctx
}
