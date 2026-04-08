const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md sticky top-0 z-50">
      <h1 className="font-bold text-lg">Jobson</h1>
      <div className="space-x-4 text-sm">
        <a href="#experience" className="hover:text-blue-500">
          Experience
        </a>
        <a href="#skills" className="hover:text-blue-500">
          Skills
        </a>
        <a href="#education" className="hover:text-blue-500">
          Education
        </a>
      </div>
    </nav>
  )
}
export default Navbar
