import React from "react";
import PropTypes from "prop-types";

const Stats = ({ title, stats = [] }) => {
  return (
    <section className="stats-section">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(item => (
          <li key={item.id} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number
    })
  ).isRequired
};

export default Stats;
