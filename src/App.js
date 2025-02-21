import React from 'react';
import "./app.scss"
import PricingCard from './components/PricingCard';
import Pricing from './components/Pricing';

const pricingPlans = [
  {
    title: "Lite",
    price: "8",
    period: "month",
    features: [
      "For simple sites",
      "Custom domain",
      "Analytics + cookies",
      "Staging environment",
      "1 CMS collection"
    ]
  },
  {
    title: "Premium",
    price: "60",
    period: "month",
    isPopular: true,
    features: [
      "Basic Package",
      "For larger sites",
      "300 pages",
      "Analytics + cookies",
      "Staging environment",
      "10 CMS collections"
    ]
  },
  {
    title: "Basic",
    price: "25",
    period: "month",
    features: [
      "Lite Package",
      "For larger sites",
      "100 pages",
      "Analytics + cookies",
      "Staging environment",
      "5 CMS collections"
    ]
  }
];

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="content">
          <h2 className="content__title">Choose Your Plan</h2>
          <div className="content__grid content__grid--pricing">
            <Pricing />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;