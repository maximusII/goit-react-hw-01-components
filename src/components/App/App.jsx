import React from 'react';
import styles from './App.module.css';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import pricingPlanItems from '../PricingPlan/pricing-plan.json';
import PricingPlan from '../PricingPlan/PricingPlan';
import transactions from '../Transactions/transactions.json';
import TransactionHistory from '../Transactions/TransactionHistory';
import user from '../Data/user.json';
import stats from '../Data/stats.json';

const App = () => {
  return (
    <div className={styles.container}>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <PricingPlan items={pricingPlanItems} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
