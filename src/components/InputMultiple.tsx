import React, { useState, KeyboardEvent, useEffect, useCallback } from 'react'
import { ClearButton } from './SelectMultiple'
import './styles.css'

interface InputMultipleProps {
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
  tagContainerClass?: string
  inputTagClass?: string
  inputTagTextClass?: string
  inputTagIconClass?: string
  inputClass?: string
}

export default function InputMultiple({
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
  tagContainerClass,
  inputTagClass,
  inputTagTextClass,
  inputTagIconClass,
  inputClass,
}: InputMultipleProps) {
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
      <div className={`rselect_multiple_tag_container ${tagContainerClass}`}>
        {selectedInput.map((item: string | number) => {
          return (
            <div className={`rselect_tag ${inputTagClass}`} key={item} style={{ backgroundColor: tagBackgroundColor }}>
              <p className={`rselect_tag_text ${inputTagTextClass}`} style={{ color: tagTextColor }}>
                {item}
              </p>
              <button
                className={`rselect_tag_remove_button ${inputTagIconClass}`}
                onClick={() => handleRemoveInput(item)}
              >
                {tagIcon ?? <ClearButton />}
              </button>
            </div>
          )
        })}
      </div>

      <div>
        <input
          className={`rselect_input ${inputClass}`}
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
