/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, ReactNode, useEffect } from 'react'
import './style.css'

interface SelectComboProps {
  children?: ReactNode
  placeholder?: string
  name?: string
  required?: boolean
  disabled?: boolean
  id?: string
  autoComplete?: string
  autoFocus?: boolean
  maxNumber?: number
  onChange?: (arg: string[]) => void
  tagIcon?: React.ReactElement
  tagContainerClass?: string
  tagClass?: string
  tagTextClass?: string
  tagRemoveClass?: string
  selectClass?: string
}

export default function SelectCombo({
  children,
  placeholder,
  name,
  required = false,
  disabled = false,
  id,
  autoComplete,
  autoFocus = false,
  maxNumber,
  onChange,
  tagIcon,
  tagContainerClass,
  tagClass,
  tagTextClass,
  tagRemoveClass,
  selectClass,
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

  useEffect(() => {
    if (selectedOptions) {
      onChange?.(selectedOptions)
    }
  }, [selectedOptions])

  const handleRemoveOptions = (value: string | number) => {
    const modifiedArr = selectedOptions.filter((item: any) => item !== value)
    setSelectedOptions(modifiedArr)
  }

  return (
    <div className='react_select_several'>
      <div className={`rselect_multiple_tag_container ${tagContainerClass}`}>
        {selectedOptions.map((item: string | number) => {
          return (
            <div className={`rselect_tag ${tagClass}`} key={item}>
              <p className={`rselect_tag_text ${tagTextClass}`}>{item}</p>
              <button
                className={`rselect_tag_remove_button ${tagRemoveClass}`}
                onClick={() => handleRemoveOptions(item)}
              >
                {tagIcon ?? <ClearButton />}
              </button>
            </div>
          )
        })}
      </div>

      <select
        onChange={(e: React.FormEvent<HTMLSelectElement>) => handleSelect(e.currentTarget.value)}
        defaultValue='DEFAULT'
        name={name}
        disabled={disabled}
        required={required}
        id={id}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={`rselect_select ${selectClass}`}
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
    <svg width='18' height='18' xmlns='http://www.w3.org/2000/svg' version='1.1'>
      <g stroke='#4a4949' strokeWidth='2'>
        <line x1='4' y1='4' x2='14' y2='14' />
        <line x1='4' y1='14' x2='14' y2='4' />
      </g>
    </svg>
  )
}
