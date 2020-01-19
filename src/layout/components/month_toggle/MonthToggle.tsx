import React from 'react';

import right from '../../../assets/icons/month_right.svg';
import left from '../../../assets/icons/month_left.svg';

const MonthToggle: React.FC<{}> = () => {
    return(
        <div className="month-toggle">
            <img src={left} alt="left" />
            <div className="middle">
                <p className="middle--current_month">Jan 2020</p>
                <p className="middle--note">Enter a note...</p>
            </div>
            <img src={right} alt="right" />
        </div>
    );
};

export default MonthToggle;