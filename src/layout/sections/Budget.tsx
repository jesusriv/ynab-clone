import React from 'react';

import StatusBar from '../larger_components/StatusBar';
import CategoryList from '../larger_components/CategoryList';
import BudgetOverview from '../components/budget_overview/BudgetOverview';

const Budget: React.FC<{}> = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <StatusBar />
            <div style={{display: "flex", flexGrow: 1, overflow: 'hidden'}}>
                <CategoryList />
                <BudgetOverview />
            </div>
        </div>
    );
};

export default Budget;