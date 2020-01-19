import React, {useState} from 'react';

import MainSideBar from '../larger_components/MainSideBar';
import { Switch, Route } from 'react-router-dom';
import Budget from '../sections/Budget';
import AddAccount from '../components/add_account/AddAccount';

const Dashboard: React.FC<{}> = () => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    };
    return (
        <div className="dashboard" style={{position: "relative"}}>
            {
                modal ?
                    <AddAccount closeAccount={handleModal} /> : null
            }
            <MainSideBar addAccount={handleModal} />
            <Switch>
                <Route path="/dashboard/budget">
                    <Budget />
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;