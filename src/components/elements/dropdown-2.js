import React, { useCallback, useRef, useState } from 'react'
import '../../styles/dropdown-2.scss'
import arrowDown from '../../assets/svg/arrow-down.svg'
import { getClassName } from '../../utils/utils'

const DropdownTwo = ({
    options
}) => {
    const optionRef = useRef(null);
    const [isOpen, setOpen] = useState(false)
    const [selected, setSelected] = useState([])

    const setSelectedOption = (option) => () => {
        if (selected.length === 0) {
            setSelected(selected.concat(option))
            return null
        }
        if (selected.every(x => x.value != option.value)) {
            setSelected(
                selected.concat(option)
            )
        } else {
            setSelected(
                selected.filter(x => x.value != option.value)
            )
        }
    }

    const handleClick = useCallback(() => {
        setOpen((prev) => !prev)
    }, [isOpen])

    return (
        <div className='dropdown'>
            <div className={getClassName("dropdown__container", "",
                { condition: isOpen, className: "dropdown__container--active" }
            )}>
                {/* {selected.length > 0 && (
                    <div className='dropdown__selected'>
                        {selected.map(option => (
                            <span key={option.value}>{option.label}</span>
                        ))}
                    </div>
                )} */}
                {selected.length > 0 && (
                    <span className='dropdown__count'>{`${selected.length} Selected`}</span>
                )}
                <input
                    className='dropdown__input'
                    placeholder='Select an item'
                // onFocus={onInputFocus}
                // onBlur={onInputBlur}
                />
                <img src={arrowDown} onClick={handleClick} />
            </div>
            <div className={getClassName("dropdown__options", "",
                { condition: isOpen, className: "dropdown__options--active" }
            )} style={{
                height: isOpen
                    ? optionRef?.current?.offsetHeight
                    : 0
            }}>
                <ul className='dropdown__options-wrapper' ref={optionRef}>
                    {options.map(option => (
                        <li className={selected.some(x => x.value == option.value) ? "selected" : ""}
                            onClick={setSelectedOption(option)}
                            key={option.value}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default DropdownTwo