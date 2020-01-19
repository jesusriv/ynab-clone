import React, { useState } from 'react';

import exit from '../../../assets/icons/exit.svg';

interface IAccountForm {
    name: string,
    type: string,
    balance: number
}

interface props {
    closeAccount: Function
}

const AddAccount: React.FC<props> = (props: props) => {
    const handleForm = (e: any) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const [values, setValues] = useState<IAccountForm>({name: '', type: '', balance: 0}); 
    return (
        <div className="overlay">
            <div className="modal">
                <div className="modal--top">
                    <p className="modal--top__title">Add Unlinked Account</p>
                    <img onClick={() => props.closeAccount()} src={exit} alt="exit" />
                </div>
                <div className="modal--bottom">
                    <p className="modal--bottom__desc"><span>Let’s go!</span> And don’t worry — if you change your mind, you can link your 
                        account at any time.</p>
                    <form>
                        <p>
                            <label>What type of account are you adding?</label>
                            <select value={values.type} onChange={handleForm} name="accountType">
                                <option disabled selected>Select an Account Type...</option>
                                <option value="checking">Checking</option>
                                <option value="savings">Savings</option>
                            </select>
                        </p>
                        <p>
                            <label>Give it a nickname</label>
                            <input type="text" value={values.name} />
                        </p>
                        <p>
                            <label>What is your current account balance?</label>
                            <input type="number" step="any" value={values.balance} />
                            <p className="note">Go ahead—estimate! You can edit it later.</p>
                        </p>
                    </form>
                    <div className="modal--bottom__buttons">
                        <button>Back</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAccount;