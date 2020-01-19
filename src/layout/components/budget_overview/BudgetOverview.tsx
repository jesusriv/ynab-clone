import React from 'react';

const BudgetOverview: React.FC<{}> = () => {
    return (
        <div className="budget-overview">
            <div className="budget-overview--amounts">
                <p className="budget-overview--amounts__title">Total Budgeted</p>
                <p className="budget-overview--amounts__amount">$2,457.10</p>
            </div>
            <div className="budget-overview--amounts">
                <p className="budget-overview--amounts__title">Total Activity</p>
                <p className="budget-overview--amounts__amount">-$2,216.64</p>
            </div>
            <div className="budget-overview--amounts">
                <p className="budget-overview--amounts__title">Total Available</p>
                <p className="budget-overview--amounts__amount">$10,982.10</p>
            </div>
            <div className="budget-overview--amounts">
                <p className="budget-overview--amounts__title">Total Inflows</p>
                <p className="budget-overview--amounts__amount">$1,379.60</p>
            </div>

            <div className="budget-overview--bottom">
                <p className="quick">Quick Budget</p>
                <div className="quick-budget--component">
                    <p>Underfunded: <span>$576.39</span></p>
                </div>
                <div className="quick-budget--component">
                    <p>Budgeted Last Month: <span>$576.39</span></p>
                </div>
                <div className="quick-budget--component">
                    <p>Spent Last Month: <span>$576.39</span></p>
                </div>
                <div className="quick-budget--component">
                    <p>Average Budgeted: <span>$576.39</span></p>
                </div>
                <div className="quick-budget--component">
                    <p>Average Spent: <span>$576.39</span></p>
                </div>
            </div>

            <div className="budget-overview--bottom b">
                <div className="quick-budget--component">
                    <p>Set Available Amount to <span>$0.00</span></p>
                </div>
                <div className="quick-budget--component">
                    <p>Reset Budget Amounts</p>
                </div>
            </div>
        </div>
    );
};

export default BudgetOverview;