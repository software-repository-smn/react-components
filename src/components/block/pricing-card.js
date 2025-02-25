import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../../styles/pricing-card.scss';

const PricingCard = ({ 
  title, 
  price, 
  period, 
  features, 
  isPopular,
  buttonText = "Get Started" 
}) => {
  return (
    <div className={`pricing-card ${isPopular ? 'pricing-card--popular' : ''}`}>
      {isPopular && <div className="pricing-card__badge">Popular</div>}
      
      <div className="pricing-card__header">
        <h3 className="pricing-card__title">{title}</h3>
        <div className="pricing-card__price-container">
          <span className="pricing-card__currency">$</span>
          <span className="pricing-card__price">{price}</span>
          <span className="pricing-card__period">/{period}</span>
        </div>
      </div>

      <ul className="pricing-card__features">
        {features.map((feature, index) => (
          <li key={index} className="pricing-card__feature">
            <FontAwesomeIcon icon={faCheck} className="pricing-card__check" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="pricing-card__button">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard; 