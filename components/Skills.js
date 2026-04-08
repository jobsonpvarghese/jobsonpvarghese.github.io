const Skills = () => {
  return (
    <section id="skills" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">Technical</h3>
          <p>Windows, macOS, Networking</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">Development</h3>
          <p>React, JavaScript, REST APIs</p>
        </div>
      </div>
    </section>
  )
}
export default Skills
