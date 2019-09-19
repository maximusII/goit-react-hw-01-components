import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats = [] }) => {
  return (
    <section className={styles.statsSection}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}

      <ul className={styles.statsList}>
        {stats.map(item => (
          <li key={item.id} className={styles.statsItem}>
            <span className={styles.label}>{item.label}</span>
            <span className="percentage">{`${item.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Stats;
