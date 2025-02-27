import React from 'react';
import "./app.scss"
import Sidebar from './components/layouts/sidebar';
import PricingCard from './components/block/pricing-card';
import { pricingPlans } from './contents/pricing-data'
import Auth from './components/auth/auth';

function App() {
  return (
    <div className="app">
      <Auth />
      {/* <Sidebar isOpen={false} />
      <Sidebar /> */}
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