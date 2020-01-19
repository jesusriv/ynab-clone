import React, { useState } from 'react';
import '../../../styles/main.scss';

import { Link } from 'react-router-dom';

import budget from '../../../assets/icons/budget.svg';
import accounts from '../../../assets/icons/accounts.svg';
import reports from '../../../assets/icons/reports.svg';
import down from '../../../assets/icons/down_arrow.svg'
import top from '../../../assets/icons//modal_top.svg';
import add from '../../../assets/icons/add_blue.svg';
import open from '../../../assets/icons/open.svg';
import fresh from '../../../assets/icons/fresh.svg';
import work from '../../../assets/icons/work.svg';
import power from '../../../assets/icons/power.svg';
import person from '../../../assets/icons/person.svg';
import people from '../../../assets/icons/people.svg';
import accounts_blue from '../../../assets/icons/accounts_blue.svg';



interface ISelect {
    selected: String
}

const MainNavigation: React.FC<{}> = () => {
    const [selected, setSelected] = useState<ISelect>({selected: 'budget'});
    
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    };

    const settings = 
    (
        <div className="settings-modal">
            <img className="top" src={top} alt="" />
            <div className="settings-modal--btns">
                <ul>
                    <li><img src={add} alt="" /></li>
                    <li><p>New Budget</p></li>
                </ul>
                <ul>
                    <li><img src={open} alt="" /></li>
                    <li><p>Open Budget</p></li>
                </ul>
                <ul>
                    <li><img src={fresh} alt="" /></li>
                    <li><p>Make A Fresh Start</p></li>
                </ul>
            </div>
            <div className="settings-modal--btns">
                <ul>
                    <li><img src={add} alt="" /></li>
                    <li><p>Budget Settings</p></li>
                </ul>
                <ul>
                    <li><img src={people} alt="" /></li>
                    <li><p>Manage Payees</p></li>
                </ul>
                <ul>
                    <li><img src={accounts_blue} alt="" /></li>
                    <li><p>Manage Connections</p></li>
                </ul>
                <ul>
                    <li><img src={fresh} alt="" /></li>
                    <li><p>Export Budget</p></li>
                </ul>
            </div>
            <div className="settings-modal--btns last">
                <ul>
                    <li><img src={person} alt="" /></li>
                    <li><p>My Account</p></li>
                </ul>
                <ul>
                    <li><img src={work} alt="" /></li>
                    <li><p>Join a Workshop</p></li>
                </ul>
                <ul>
                    <li><img src={power} alt="" /></li>
                    <li><p>Log Out</p></li>
                </ul>
            </div>
        </div>
    )

    const selectorHandle = (section: String) => {
        return setSelected({selected: section});
    };
    return (
        <div className="main-navigation">
            <div className="budget">
                <p className="budget--title">Rivera Family</p>
                <p className="budget--email">sihumara.soria@gmail.com</p>
                <img className="down" onClick={() => handleModal()} src={down} alt="" />
                { modal ? settings : null}
            </div>
            <div className="bottom">
                <Link 
                    to="/dashboard/budget" 
                    className={selected.selected === 'budget' ? "bottom--navBtn selected" : "bottom--navBtn"}>
                    <img src={budget} alt="budget" />   
                    <p className="bottom--navBtn__text">Budget</p>
                </Link>
                <Link 
                    to="/dashboard/#" 
                    className={selected.selected === 'reports' ? "bottom--navBtn selected" : "bottom--navBtn"}>
                    <img src={reports} alt="reports" />
                    <p className="bottom--navBtn__text">Reports</p>
                </Link>
                <Link 
                    to="/dashboard/#" 
                    className={selected.selected === 'accounts' ? "bottom--navBtn selected" : "bottom--navBtn"}>
                    <img src={accounts} alt="accounts" />
                    <p className="bottom--navBtn__text">All Accounts</p>
                </Link>
            </div>
        </div>
    );
}

export default MainNavigation;