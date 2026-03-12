'use client'

import Select from 'react-select'

const options = [
  { value: 'total_points', label: 'Total Points' },
  { value: 'price', label: 'Price' },
  { value: 'value', label: 'Value' },
  { value: 'name', label: 'Name (A-Z)' },
]

export const PlayerSortBySelect = () => {
  return (
    <div>
      <p className="mb-2">Sort By</p>
      <Select
        options={options}
        defaultValue={options[0]}
        classNames={{
          control: () => 'border border-gray-300 rounded shadow-sm',
          menu: () => 'z-20',
        }}
        styles={{
          control: (base) => ({
            ...base,
            padding: '2px ',
            borderRadius: '0.5rem',
          }),
        }}
      />
    </div>
  )
}
