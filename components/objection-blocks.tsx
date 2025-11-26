const objections = [
  {
    title: "I'm not comfortable with strangers in my office.",
    solution: "Our Protocol:",
    description: "Security is our priority. All staff undergo rigorous background checks, wear uniforms with ID, and are assigned to specific accounts—so you see the same trusted faces, not a rotating door of strangers.",
    color: "red"
  },
  {
    title: "The quality always drops after the first month.",
    solution: "Our Solution:",
    description: "We use digital QA checklists and dedicated Account Managers who inspect the work before you walk in. We manage the cleaners so you don't have to.",
    color: "yellow"
  },
  {
    title: "The cost is too high compared to cheaper options.",
    solution: "The Hidden Cost:",
    description: "Low-ball quotes mask hidden costs. Subpar cleaning leads to sick employees, increased absenteeism, and rapid degradation of expensive assets like carpeting and flooring.",
    color: "green"
  }
]

export function ObjectionBlocks() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Overcoming Common Objections
      </h2>
      
      {objections.map((objection, index) => (
        <div 
          key={index}
          className={`bg-gradient-to-r from-${objection.color}-50 to-white border-l-4 border-${objection.color}-500 p-6 rounded-r-lg mb-6 shadow-sm`}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            "{objection.title}"
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-[#008B8B]">{objection.solution}</strong> {objection.description}
          </p>
        </div>
      ))}
    </div>
  )
}
