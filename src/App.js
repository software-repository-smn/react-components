import React from 'react';
import "./app.scss"
import Sidebar from './components/Sidebar';
import PricingCard from './components/PricingCard';
import { pricingPlans } from './contents/pricing-data';

function App() {
  return (
    <div className="app">
      <Sidebar isOpen={false} />
      <Sidebar />
      {/* {pricingPlans.map((plan) => (
        <PricingCard
          title={plan.title}
          price={plan.price}
          period={plan.period}
          features={plan.features}
          isPopular={plan.isPopular}
        />
      ))} */}
    </div>
  );
}

export default App;