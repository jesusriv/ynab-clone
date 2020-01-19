import React, { useState } from 'react';

import right from '../../../assets/icons/right_arrow.svg';
import bullet from '../../../assets/icons/account-selected.svg'
import add from '../../../assets/icons/add.svg';

interface IAddFunction {
    addAccount: Function
}

const MainAccountPanel: React.FC<IAddFunction> = (props: IAddFunction) => {
    const [accounts, setAccounts] = useState(false);

    const clicked = () => {
        accounts ? setAccounts(false) : setAccounts(true);
    };

    return (
        <div className="main-account-panel">
            <div className={accounts ? "budget budget--down" : "budget"} onClick={clicked}>
                <img id="right" className={accounts ? 'down' : 'right'} src={right} alt="right_arrow" />
                <p className="budget--title">Budget</p>
                <p className="budget--amount">$10,223.23</p>
            </div>
            {
                accounts ?
                    (
                        <div className="accounts-container">
                            <div className="accounts-container--account">
                                <img src={bullet} alt="" />
                                <p className="accounts-container--account__name">Joint Chase C...</p>
                                <p className="accounts-container--account__amount">$1,668.02</p>
                            </div>
                        </div>
                    ) : null
            }
            <button className="add-btn" onClick={() => props.addAccount()}><img src={add} alt="" /> Add Account</button>
        </div>
    );
}

export default MainAccountPanel;