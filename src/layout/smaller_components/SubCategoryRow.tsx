import React from 'react';

import checkbox from '../../assets/checkbox.svg';
import arrow from '../../assets/category/arrow.svg';

interface RowProps {
    sub_name: String,
    budgeted: number,
    activity: number,
    available: number
}

const SubCategoryRow: React.FC<RowProps> = (props: RowProps) => {
    return (
        <div className="sub-row">
            <img src={checkbox} alt="" />
            <img className="arrow" src={arrow} alt="" />
            <div className="category-list--top__c">
                <p className="sub-name">{props.sub_name}</p>
            </div>
            <div className="category-list--top__b">
                <p>${props.budgeted}</p>
            </div>
            <div className="category-list--top__ac">
                <p >-${props.activity}</p>
            </div>
            <div className="category-list--top__av">
                <p className="sub-available zero">${props.available.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default SubCategoryRow;