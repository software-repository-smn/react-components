// Pricing.jsx
import React from 'react';
import '../styles/pricing.scss';

const Pricing = () => {
    return (
        <div className="pricing">
            <div className="pricing__header">
                <h1>Premium</h1>
                <h2>$60 <span>per month</span></h2>
            </div>
            <div className="pricing__packages">
                <Package
                    title="Basic Package"
                    price="$25"
                    description="For larger sites"
                    features={["300 pages", "Life", "98perm"]}
                />
                <Package
                    title="Life Package"
                    price="$98"
                    description="Analytics+cookies"
                    features={["For larger sites", "Staging environment", "100 pages", "10 CMS collections"]}
                />
                <Package
                    title="Custom"
                    price="Custom"
                    description="Analytics+C"
                    features={["Staging env", "5CMS collect", "1CMS", "Siteye git"]}
                />
            </div>
        </div>
    );
};

const Package = ({ title, price, description, features }) => {
    return (
        <div className="package">
            <h3 className="package__title">{title}</h3>
            <h4 className="package__price">{price}</h4>
            <p className="package__description">{description}</p>
            <ul className="package__features">
                {features.map((feature, index) => (
                    <li key={index} className="package__feature">{feature}</li>
                ))}
            </ul>
            <button className="package__button">Get Started</button>
        </div>
    );
};

export default Pricing;