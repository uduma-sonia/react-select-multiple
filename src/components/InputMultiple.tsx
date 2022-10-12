import React, { useState, KeyboardEvent, useEffect, useCallback } from 'react'
import { ClearButton } from './SelectMultiple'

interface InputProps {
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
  type?: string
  tagBackgroundColor?: string
  tagTextColor?: string
}

export default function TextCombo({
  placeholder = 'Type and enter',
  name,
  required = false,
  disabled = false,
  id,
  autoComplete,
  autoFocus = false,
  maxNumber,
  onChange,
  tagIcon,
  type = 'text',
  tagBackgroundColor,
  tagTextColor,
}: InputProps) {
  const [selectedInput, setSelectedInput] = useState<string[]>([])

  const handleSelect = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (maxNumber) {
        if (selectedInput.length >= maxNumber) {
          setSelectedInput(selectedInput)
        } else {
          if (event.key === 'Enter') {
            const value = (event.target as HTMLInputElement).value

            setSelectedInput((prev: any) => {
              const isOptionSelected = prev.find((item: any) => item === value)
              if (!isOptionSelected) {
                return [...prev, value]
              } else {
                return [...prev]
              }
            })
            ;(event.currentTarget as HTMLInputElement).value = ''
          }
        }
      } else {
        if (event.key === 'Enter') {
          const value = (event.target as HTMLInputElement).value

          setSelectedInput((prev: any) => {
            const isOptionSelected = prev.find((item: any) => item === value)
            if (!isOptionSelected) {
              return [...prev, value]
            } else {
              return [...prev]
            }
          })
          ;(event.currentTarget as HTMLInputElement).value = ''
        }
      }
    },
    [maxNumber, selectedInput],
  )

  const handleRemoveInput = (value: string | number) => {
    const modifiedArr = selectedInput.filter((item: any) => item !== value)
    setSelectedInput(modifiedArr)
  }

  useEffect(() => {
    if (selectedInput) {
      onChange?.(selectedInput)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedInput])

  return (
    <div className='react_select_several'>
      <div className={`rselect_multiple_tag_container`}>
        {selectedInput.map((item: string | number) => {
          return (
            <div className={`rinput_tag`} key={item} style={{ backgroundColor: tagBackgroundColor }}>
              <p className={`rinput_tag_text`} style={{ color: tagTextColor }}>
                {item}
              </p>
              <button className={`rinput_tag_remove_button`} onClick={() => handleRemoveInput(item)}>
                {tagIcon ?? <ClearButton />}
              </button>
            </div>
          )
        })}
      </div>

      <div>
        <input
          className='rselect_input'
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          required={required}
          id={id}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          type={type}
          onKeyDown={(event: KeyboardEvent<HTMLElement>) => handleSelect(event)}
        />
      </div>
    </div>
  )
}
