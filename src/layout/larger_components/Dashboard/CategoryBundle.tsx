import React, { useState } from 'react';

import CategoryRow from '../../smaller_components/CategoryRow';
import SubCategoryRow from '../../smaller_components/SubCategoryRow';

const CategoryBundle = () => {
    const [subs, setSubs] = useState(true);

    const handleSubs = () => {
        setSubs(!subs);
    };

    return (
        <div>
            <CategoryRow 
                category_name="Immediate Obligations"
                budgeted={863.84}
                activity={710.28}
                available={154.84}
                handleSubs={handleSubs}
                subs={subs}
            />
            { 
                subs ?
                    <SubCategoryRow 
                        sub_name="AT&T"
                        budgeted={315.55}
                        activity={315.55}
                        available={0.00}
                    /> : null
            }
        </div>
    );
};

export default CategoryBundle;