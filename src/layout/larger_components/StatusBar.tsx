import React from 'react';

import BudgetSummary from '../components/budget_summary/BudgetSummary';
import MonthlyToggle from '../components/month_toggle/MonthToggle';
import AgeOfMoney from '../components/age_of_money/AgeOfMoney';

const StatusBar: React.FC<{}> = () => {
    return(
        <div className="statusBar">
            <MonthlyToggle />
            <BudgetSummary />
            <AgeOfMoney />
        </div>
    );
};

export default StatusBar;