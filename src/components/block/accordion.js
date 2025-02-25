import React, { useState } from 'react';
import '../../styles/accordion.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items?.map((item, index) => (
        <div key={index} className="accordion__item">
          <button
            className={`accordion__trigger ${activeIndex === index
              ? 'accordion__trigger--active' : ''}`
            }
            onClick={() => handleClick(index)}
          >
            <span className="accordion__title">{item.title}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`accordion__icon ${activeIndex === index
                ? 'accordion__icon--rotated' : ''}`
              }
            />
          </button>
          <div className={`accordion__content ${activeIndex === index
            ? 'accordion__content--active' : ''}`
          }>
            <div className="accordion__panel">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion; 