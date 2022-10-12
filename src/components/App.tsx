import React, { useState, ReactNode } from 'react'

interface SelectComboProps {
  children?: ReactNode
  placeholder?: string
  name?: string
  required?: boolean
  disabled?: boolean
  id?: string
  autoComplete?: boolean
  autoFocus?: boolean
  maxNumber?: number
}

export default function SelectCombo({
  children,
  placeholder,
  name,
  required,
  disabled,
  id,
  autoComplete,
  autoFocus,
  maxNumber,
}: SelectComboProps) {
  const [selectedOptions, setSelectedOptions] = useState<any>([])

  const handleSelect = (value: string | number) => {
    if (maxNumber) {
      if (selectedOptions.length >= maxNumber) {
        setSelectedOptions(selectedOptions)
      } else {
        setSelectedOptions((prev: any) => {
          const isOptionSelected = prev.find((item: any) => item === value)
          if (!isOptionSelected) {
            return [...prev, value]
          } else {
            return [...prev]
          }
        })
      }
    } else {
      setSelectedOptions((prev: any) => {
        const isOptionSelected = prev.find((item: any) => item === value)
        if (!isOptionSelected) {
          return [...prev, value]
        } else {
          return [...prev]
        }
      })
    }
  }

  const handleRemoveOptions = (value: string | number) => {
    const modifiedArr = selectedOptions.filter((item: any) => item !== value)
    setSelectedOptions(modifiedArr)
  }

  return (
    <div className='combo_container'>
      <div>
        {selectedOptions.map((item: string | number) => {
          return (
            <div className='tag_button' key={item}>
              {item}
              <button className='tag_clear_button' onClick={() => handleRemoveOptions(item)}>
                <ClearButton />
              </button>
            </div>
          )
        })}
      </div>

      <select
        onChange={(e: React.FormEvent<HTMLSelectElement>) => handleSelect(e.currentTarget.value)}
        defaultValue='DEFAULT'
      >
        <option value='DEFAULT' disabled>
          {placeholder ?? 'Select options'}
        </option>
        {children ?? <option>No options</option>}
      </select>
    </div>
  )
}

const ClearButton = () => {
  return (
    <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg' version='1.1'>
      <g stroke='#000' strokeWidth='2'>
        <line x1='5' y1='5' x2='15' y2='15' />
        <line x1='5' y1='15' x2='15' y2='5' />
      </g>
    </svg>
  )
}
