import React from 'react';

import checkbox from '../../assets/checkbox.svg';
import arrow from '../../assets/category/arrow.svg';

interface RowProps {
    category_name: String,
    budgeted: number,
    activity: number,
    available: number,
    handleSubs: Function,
    subs: boolean
}

const CategoryRow: React.FC<RowProps> = (props: RowProps) => {
    return (
        <div className="category-row">
            <img src={checkbox} alt="" />
            <img id={props.subs ? "" : "arrow"} className="arrow" src={arrow} alt="" onClick={() => props.handleSubs()} />
            <div className="category-list--top__c">
                <p className="category-name">{props.category_name}</p>
            </div>
            <div className="category-list--top__b">
                <p className="category-amounts">${props.budgeted}</p>
            </div>
            <div className="category-list--top__ac">
                <p className="category-amounts">-${props.activity}</p>
            </div>
            <div className="category-list--top__av">
                <p className="category-amounts">${props.available}</p>
            </div>
        </div>
    );
};

export default CategoryRow;