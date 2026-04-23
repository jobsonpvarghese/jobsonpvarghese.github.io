import { AdminAuthProvider } from "../../context/AdminAuthContext"

export const metadata = { title: "Admin — Jobson Portfolio" }

export default function AdminLayout({ children }) {
  return (
    <AdminAuthProvider>
      {children}
    </AdminAuthProvider>
  )
}
