import { useState } from 'react'

const filters = {
  metal: {
    label: 'Metal',
    options: [
      { label: 'Gold', count: 452 },
      { label: 'Platinum', count: 128 },
      { label: 'Silver', count: 89 },
    ],
  },
  purity: {
    label: 'Purity',
    options: [
      { label: '14k', count: 112 },
      { label: '18k', count: 340 },
      { label: '22k', count: 85 },
    ],
  },
  price: {
    label: 'Price',
    options: [],
  },
  category: {
    label: 'Category',
    options: [
      { label: 'Rings', count: 234 },
      { label: 'Necklaces', count: 189 },
      { label: 'Earrings', count: 156 },
      { label: 'Bangles', count: 98 },
    ],
  },
}

export default function SidebarFilters() {
  const [openSections, setOpenSections] = useState({ metal: true, purity: true, price: false, category: false })

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <aside className="w-full md:w-64 flex-shrink-0 space-y-8 hidden md:block">
      {Object.entries(filters).map(([key, filter]) => (
        <div key={key}>
          <h3
            className="font-headline-md text-sm font-semibold text-charcoal-text uppercase tracking-widest mb-4 border-b border-outline-variant pb-2 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(key)}
          >
            {filter.label}
            <span className="material-symbols-outlined text-[18px]">{openSections[key] ? 'remove' : 'add'}</span>
          </h3>
          {openSections[key] && (
            <div className="space-y-3">
              {filter.options.map((option) => (
                <label key={option.label} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    defaultChecked={key === 'metal' && option.label === 'Gold'}
                    className="form-checkbox h-4 w-4 text-deep-emerald border-outline-variant rounded-none focus:ring-deep-emerald"
                  />
                  <span className="text-on-surface-variant group-hover:text-charcoal-text transition-colors">
                    {option.label} ({option.count})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <button className="w-full py-3 bg-surface border border-outline-variant text-charcoal-text text-sm font-semibold hover:bg-surface-variant transition-colors mt-8">
        CLEAR ALL FILTERS
      </button>
    </aside>
  )
}
