import React from 'react';

import checkbox from '../../assets/checkbox.svg'
import CategoryBundle from './CategoryBundle';

const CategoryList: React.FC<{}> = () => {
    return (
        <div className="category-list">
            <div className="category-list--top">
                <img src={checkbox} alt="" />
                <div className="category-list--top__c">
                    <p className="category" >Category</p>
                </div>
                <div className="category-list--top__b" style={{marginLeft: '1.7rem'}}>
                    <p>Budgeted</p>
                </div>
                <div className="category-list--top__ac">
                    <p>Activity</p>
                </div>
                <div className="category-list--top__av">
                    <p className="available">Available</p>
                </div>
            </div>
            <CategoryBundle />
            <CategoryBundle />
        </div>
    );
};

export default CategoryList;