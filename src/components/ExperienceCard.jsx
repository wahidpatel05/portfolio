import React from 'react'
import PropTypes from 'prop-types'

function ExperienceCard({ company, roles }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 ring-1 ring-inset ring-zinc-50/5 transition-colors">
      <h3 className="title-1 mb-4">{company}</h3>

      <div className="space-y-6">
        {roles.map(({ role, duration, desc, tags }, key) => (
          <div key={key} className="border-l-2 border-zinc-600 pl-4 relative">
            <span className="absolute -left-[7px]  w-3 h-3 bg-indigo-400 rounded-full"></span>
            <h4 className="font-semibold text-lg text-zinc-100">{role}</h4>
            <p className="text-sm text-zinc-400 mb-1">{duration}</p>
            <p className="text-zinc-300 mb-3">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((label, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-zinc-50/5 text-xs text-zinc-400"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
    })
  ).isRequired,
}

export default ExperienceCard
