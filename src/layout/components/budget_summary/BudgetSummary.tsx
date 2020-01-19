import React from 'react';

import tri from '../../../assets/triangle.svg';

const BudgetSummary: React.FC<{}> = () => {
    return(
        <div className="budget-summary">
            <div className="budget-summary--center">
                <div className="tbb">
                    <img id="tri" src={tri} alt="triangle"/>
                    <p className="tbb--amount">$0.00</p>
                    <p className="tbb--tbb">To be Budgeted</p>
                </div>
                <div className="budget-glance">
                    <p className="budget-glance--amount">+$2,680.11</p>
                    <p className="budget-glance--bold"><em><strong>Funds for Jan</strong></em></p>

                    <p className="budget-glance--amount"> -$0.00</p>
                    <p className="budget-glance--bold"><em><strong>Overspent for Dec</strong></em></p>

                    <p className="budget-glance--amount">-$2,457.10</p>
                    <p className="budget-glance--bold"><em><strong>Budgeted in Jan</strong></em></p>

                    <p className="budget-glance--amount">-$223.01</p>
                    <p className="budget-glance--bold"><em><strong>Budgeted in future</strong></em></p>
                </div>
            </div>
        </div>
    );
};

export default BudgetSummary;