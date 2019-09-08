import React from "react";
import PropTypes from "prop-types";

const PricingItem = ({ label, icon, capacity, price, description }) => {
  return (
    <div className="pricing-item">
      <i className="icon">
        <img src={icon} alt={icon} />
      </i>
      <h2 className="label">{label}</h2>
      <p className="capacity">{capacity} Storage</p>
      <p className="description">{description}</p>
      <p className="price">{price}/MO</p>
      <button className="button">Get Started</button>
    </div>
  );
};

PricingItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  capacity: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
};

export default PricingItem;
