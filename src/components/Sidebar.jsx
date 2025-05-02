import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const sidebarLinks = [
  { label: 'Balloons', icon: '/icons/balloons-(active).svg', inactiveIcon: '/icons/balloons.svg', to: '/balloons' },
  { label: 'Flowers', icon: '/icons/flower-(active).svg', inactiveIcon: '/icons/flower.svg', to: '/flowers' },
]

function Sidebar({ className = '' }) {
  const [active, setActive] = useState('Balloons');

  return (
    <div
      style={{ gridArea: 'sidebar' }}
      className={`bg-white flex flex-col items-center gap-4 p-2 rounded-lg ${className}`}
    >
      {sidebarLinks.map((link) => (
        <button
          key={link.label}
          className="flex flex-col items-center focus:outline-none"
          onClick={() => setActive(link.label)}
          type="button"
        >
          <div className={`p-1 rounded-xl hover:bg-side-hover transition duration-300 ${active === link.label ? 'bg-side-active' : ''}`}>
            <img
              className='h-8'
              src={active === link.label ? link.icon : link.inactiveIcon}
              alt={link.label}
            />
          </div>
          <span className={`text-[0.7rem] font-bold ${active === link.label ? 'text-active' : 'text-side-text'}`}>
            {link.label}
          </span>
        </button>
      ))}
    </div>
  )
}

export default Sidebar