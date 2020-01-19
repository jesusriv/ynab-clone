import React from 'react';

import checkbox from '../../assets/checkbox.svg'
import CategoryRow from '../smaller_components/CategoryRow';
import SubCategoryRow from '../smaller_components/SubCategoryRow';

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
            <CategoryRow 
                category_name="Immediate Obligations"
                budgeted={863.84}
                activity={710.28}
                available={154.84}
            />
            <SubCategoryRow 
                sub_name="AT&T"
                budgeted={315.55}
                activity={315.55}
                available={0.00}
            />
            <CategoryRow 
                category_name="True Expenses"
                budgeted={435.25}
                activity={419.43}
                available={15.82}
            />
            <SubCategoryRow 
                sub_name="AT&T"
                budgeted={315.55}
                activity={315.55}
                available={0.00}
            />
        </div>
    );
};

export default CategoryList;