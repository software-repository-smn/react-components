import React, { useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const ReactSelect = () => {
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef()

    const countries = [
        'Turkey',
        'Georgia',
        'Azerbaijan',
        'Russia',
        'United States',
        'Canada',
        'China'
    ]

    const selectValue = (event) => {
        inputRef.current.value = event.target.outerText
        setIsOpen(false)
    }
    return (
        <div className='select'>
            <input
                className='select__input'
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
                placeholder='Choose your country'
                ref={inputRef}
                readOnly
            />
            <span className={`select__icon${isOpen ? ' select__icon--active' : ''}`}>
                <IoIosArrowDown />
            </span>
            <div className={`select__options${isOpen ? ' select__options--active' : ''}`}>
                {countries.map((item, idx) => (
                    <li key={idx} onClick={selectValue}>{item}</li>
                ))}
            </div>
        </div>
    )
}
export default ReactSelect