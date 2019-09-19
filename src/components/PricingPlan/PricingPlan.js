import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => {
  return (
    <ul className={styles.pricingPlan}>
      {items.map(item => (
        <li key={item.id} className="item">
          <PricingItem
            label={item.label}
            icon={item.icon}
            capacity={item.capacity}
            price={item.price}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
