import React from 'react';
import MainNavigation from '../../components/main_navigation/MainNavigation';
import MainAccountPanel from '../../components/main_account_panel/MainAccountPanel';

interface props {
    addAccount: Function
}

const MainSideBar: React.FC<props> = (props: props) => {
    
    return (
        <div className="main-sidebar">
            
            <MainNavigation />
            <MainAccountPanel 
                addAccount={props.addAccount}
            />
        </div>
    ); 
};

export default MainSideBar;