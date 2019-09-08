import React from "react";
import PricingItem from "./PricingItem";
import PropTypes from "prop-types";

const PricingPlan = ({ items }) => {
  return (
    <ul className="pricing-plan">
      {items.map(item => (
        <li key={item.id} className="item">
          <PricingItem {...item} />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.array.isRequired
};

export default PricingPlan;
