import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import '../../styles/dropdown.scss';

const Dropdown = ({ 
  options, 
  defaultOption = "Select an option",
  onSelect 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className={`dropdown__trigger ${isOpen ? 'dropdown__trigger--active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="dropdown__selected">
          {selectedOption ? selectedOption.label : defaultOption}
        </span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`dropdown__icon ${isOpen ? 'dropdown__icon--rotated' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="dropdown__menu">
          {options.map((option, index) => (
            <button
              key={index}
              className={`dropdown__item ${selectedOption?.value === option.value ? 'dropdown__item--selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              <span className="dropdown__item-label">{option.label}</span>
              {selectedOption?.value === option.value && (
                <FontAwesomeIcon icon={faCheck} className="dropdown__check" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown; 