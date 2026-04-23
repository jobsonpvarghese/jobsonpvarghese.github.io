// lib/adminStore.js
// ── Firebase-ready data layer ─────────────────────────────────────────────────
// All reads/writes go through these helpers.
// When connecting Firebase, replace the localStorage body with Firestore calls.

// ── Default seed data ─────────────────────────────────────────────────────────
const DEFAULTS = {
  projects: [
    { id: "01", number: "01", title: "Cloud Dashboard UI", subtitle: "UI/UX Design · Web App", year: "2021", description: "A cloud-based web application dashboard designed collaboratively using Adobe XD and Photoshop.", stack: ["Adobe XD", "Adobe Photoshop", "UI Design", "UX"], image: "https://mir-s3-cdn-cf.behance.net/projects/404/a90777119191285.Y3JvcCwxMjI3LDk2MCwyNyww.jpeg", link: "https://www.behance.net/gallery/119191285/Cloud-Dashboard-UI" },
    { id: "02", number: "02", title: "Hospital Web UI", subtitle: "UI/UX Design · Healthcare", year: "2021", description: "A multi-page hospital web interface covering Home, Departments, Department Details, and Booking.", stack: ["Adobe XD", "Photoshop", "Illustrator", "UI Design"], image: "https://mir-s3-cdn-cf.behance.net/projects/404/97e14e121424269.Y3JvcCwxMzgwLDEwODAsMjcsMA.png", link: "https://www.behance.net/gallery/121424269/Hospital-Web-UI" },
    { id: "03", number: "03", title: "Fashion Dark UI", subtitle: "UI/UX Design · Fashion", year: "2021", description: "A dark-themed fashion landing page UI concept with a bold, editorial aesthetic.", stack: ["Adobe XD", "UI Design", "UX", "Dark Theme"], image: "https://mir-s3-cdn-cf.behance.net/projects/404/18bd8f121425425.Y3JvcCwxMzgwLDEwODAsMjMsMA.png", link: "https://www.behance.net/gallery/121425425/Fashion-Dark-UI" },
    { id: "04", number: "04", title: "Pet Adoption App", subtitle: "UI/UX Design · Mobile", year: "2021", description: "A mobile application UI concept for pet adoption.", stack: ["Adobe XD", "Photoshop", "Mobile UI", "UX"], image: "https://mir-s3-cdn-cf.behance.net/projects/404/cedc62116392691.Y3JvcCw4MDgsNjMyLDAsMA.jpg", link: "https://www.behance.net/gallery/116392691/Pet-adoption-app" },
    { id: "05", number: "05", title: "Web Design Concept", subtitle: "UI/UX Design · Concept", year: "2021", description: "A clean and modern web design concept exploring layout composition and colour hierarchy.", stack: ["Adobe XD", "Photoshop", "UI Design", "Concept"], image: "https://mir-s3-cdn-cf.behance.net/projects/404/569fbd116394451.Y3JvcCwxMjI3LDk2MCwyNCww.jpeg", link: "https://www.behance.net/gallery/116394451/Web-design-concept" }
  ],
  experience: [
    { id: "1", title: "Maintenance/IT Technician", company: "Comfort Suites", location: "London, Ontario", duration: "June 2025 - Present", responsibilities: ["Inspect, troubleshoot, and maintain building systems", "Respond to guest service requests and resolve technical issues", "Communicate repair status clearly to guests and management", "Perform preventive maintenance", "Maintain high service standards"] },
    { id: "2", title: "Powder Blender / Setup Technician", company: "Johnson Electric Canada Ltd.", location: "Stratford, Ontario", duration: "June 2024 - June 2025", responsibilities: ["Maintain accurate production records", "Perform testing, quality checks, and documentation", "Follow strict safety and quality management standards", "Conduct inspections and operate equipment safely"] },
    { id: "3", title: "IT System Technician Co-op", company: "Diamond Canada Hospitality Inc.", location: "London, Ontario", duration: "May 2023 - August 2023", responsibilities: ["Managed and supported a network of over 20 computers", "Implemented infrastructure maintenance procedures reducing downtime by 25%", "Installed and configured operating systems and desktop applications"] },
    { id: "4", title: "UI Engineer", company: "Banyan Cloud Inc.", location: "San Jose, CA", duration: "May 2021 - May 2022", responsibilities: ["Planned and engineered RESTful web services", "Developed reusable UI components using React and Redux", "Conducted unit testing to ensure optimal browser functionality"] }
  ],
  skills: [
    { id: "1", number: "01", title: "Technical Support & Troubleshooting", category: "Core Strength", pills: ["Hardware Diagnostics", "Windows", "macOS", "System Patching", "Mobile Devices", "OS Configuration", "Preventive Maintenance"] },
    { id: "2", number: "02", title: "Customer Service", category: "Ticketing", pills: ["Jira", "GitHub Projects", "Agile", "Incident Management", "Remote Assistance"] },
    { id: "3", number: "03", title: "Systems & Networks", category: "Cloud & Infra", pills: ["Azure", "AWS", "GCP", "Nginx", "VPC", "Wi-Fi Config", "Load Balancers"] },
    { id: "4", number: "04", title: "Tools & Tech", category: "Dev Tools", pills: ["HTML · CSS · JS", "REST APIs", "JWT Auth", "Git", "Front-end Debugging"] },
    { id: "5", number: "05", title: "Compliance & Docs", category: "Security", pills: ["Data Protection", "Access Control", "IT Compliance", "Asset Management"] }
  ],
  education: [
    { id: "1", degree: "Post Graduate Diploma in Mobile Application Development", level: "Post Graduate", school: "Fanshawe College", location: "London, Ontario, Canada", duration: "May 2022 — Aug 2023" },
    { id: "2", degree: "Bachelor of Technology in Computer Science & Engineering", level: "Bachelor's", school: "St. Joseph's College of Engineering & Technology", location: "Palai, Kerala, India", duration: "Aug 2017 — May 2021" }
  ],
  certifications: [
    { id: "1", name: "UX Design Fundamentals", issuer: "Coursera · California Institute of the Arts" },
    { id: "2", name: "Planning a Career in User Experience", issuer: "LinkedIn Learning" },
    { id: "3", name: "Adobe XD for Designers", issuer: "LinkedIn Learning" },
    { id: "4", name: "UX Design Series", issuer: "LinkedIn Learning · Overview, User Data & Personas" }
  ]
}

// ── Generic helpers ───────────────────────────────────────────────────────────
function read(key) {
  if (typeof window === "undefined") return DEFAULTS[key]
  try {
    const raw = localStorage.getItem(`admin_data_${key}`)
    return raw ? JSON.parse(raw) : DEFAULTS[key]
  } catch { return DEFAULTS[key] }
}

function write(key, data) {
  if (typeof window === "undefined") return
  localStorage.setItem(`admin_data_${key}`, JSON.stringify(data))
}

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
}

// ── Projects ──────────────────────────────────────────────────────────────────
export const getProjects    = ()         => read("projects")
export const saveProjects   = (data)     => write("projects", data)
export const addProject     = (item)     => { const d = [...read("projects"), { ...item, id: genId() }]; write("projects", d); return d }
export const updateProject  = (id, item) => { const d = read("projects").map(p => p.id === id ? { ...p, ...item } : p); write("projects", d); return d }
export const deleteProject  = (id)       => { const d = read("projects").filter(p => p.id !== id); write("projects", d); return d }

// ── Experience ────────────────────────────────────────────────────────────────
export const getExperience   = ()         => read("experience")
export const saveExperience  = (data)     => write("experience", data)
export const addExperience   = (item)     => { const d = [...read("experience"), { ...item, id: genId() }]; write("experience", d); return d }
export const updateExperience= (id, item) => { const d = read("experience").map(e => e.id === id ? { ...e, ...item } : e); write("experience", d); return d }
export const deleteExperience= (id)       => { const d = read("experience").filter(e => e.id !== id); write("experience", d); return d }

// ── Skills ────────────────────────────────────────────────────────────────────
export const getSkills    = ()         => read("skills")
export const saveSkills   = (data)     => write("skills", data)
export const addSkill     = (item)     => { const d = [...read("skills"), { ...item, id: genId() }]; write("skills", d); return d }
export const updateSkill  = (id, item) => { const d = read("skills").map(s => s.id === id ? { ...s, ...item } : s); write("skills", d); return d }
export const deleteSkill  = (id)       => { const d = read("skills").filter(s => s.id !== id); write("skills", d); return d }

// ── Education ─────────────────────────────────────────────────────────────────
export const getEducation   = ()         => read("education")
export const saveEducation  = (data)     => write("education", data)
export const addEducation   = (item)     => { const d = [...read("education"), { ...item, id: genId() }]; write("education", d); return d }
export const updateEducation= (id, item) => { const d = read("education").map(e => e.id === id ? { ...e, ...item } : e); write("education", d); return d }
export const deleteEducation= (id)       => { const d = read("education").filter(e => e.id !== id); write("education", d); return d }

// ── Certifications ────────────────────────────────────────────────────────────
export const getCertifications   = ()         => read("certifications")
export const saveCertifications  = (data)     => write("certifications", data)
export const addCertification    = (item)     => { const d = [...read("certifications"), { ...item, id: genId() }]; write("certifications", d); return d }
export const updateCertification = (id, item) => { const d = read("certifications").map(c => c.id === id ? { ...c, ...item } : c); write("certifications", d); return d }
export const deleteCertification = (id)       => { const d = read("certifications").filter(c => c.id !== id); write("certifications", d); return d }
