import React, { Fragment, useState } from 'react'
import "../../styles/auth.scss"
import TabSwitch from '../elements/tab-switch';
import mail from "../../assets/svg/email.svg"
import key from "../../assets/svg/key.svg"
import check from "../../assets/svg/check-circle.svg"
import google from "../../assets/svg/google.svg"
import facebook from "../../assets/svg/facebook.svg"
import apple from "../../assets/svg/apple.svg"
import user from "../../assets/svg/user.svg"
import { isValidEmail, isValidPassword } from '../../utils/validator'
import { useInputHandler } from '../../utils/utils';

const customerTypeTabs = [{ id: 1, name: 'Sign In' }, { id: 2, name: 'Sign Up' }];
const Auth = () => {
    const [customerTypeTab, setCustomerTypeTab] = useState(customerTypeTabs[0]);
    const [userName, setUserName] = useInputHandler("");
    const [email, setEmail] = useInputHandler("");
    const [passowrd, setPassowrd] = useInputHandler("");
    const [passowrdAgain, setPassowrdAgain] = useInputHandler("");

    return (
        <div className='auth'>
            <span className='auth__title'>Welcome</span>
            <span className='auth__subtitle'>Hi <b>buddy</b>, Please enter your details</span>
            <TabSwitch
                tabs={customerTypeTabs}
                currentTab={customerTypeTab}
                changeTab={tab => setCustomerTypeTab(tab)}
            />
            <div className='auth__login'>
                {customerTypeTab.id === 1 ?
                    <Fragment>
                        <div className='auth__input-wrapper'>
                            <div className='auth__input-icon'>
                                <img src={mail} alt='' />
                            </div>
                            <input
                                value={email}
                                onChange={setEmail}
                                className='auth__input'
                                placeholder='Enter your email'
                            />
                            <div className='auth__input-check'>
                                {isValidEmail(email) && (
                                    <img src={check} alt='' />
                                )}
                            </div>
                        </div>
                        <div className='auth__input-wrapper'>
                            <div className='auth__input-icon'>
                                <img src={key} alt='' />
                            </div>
                            <input
                                type='password'
                                value={passowrd}
                                className='auth__input'
                                onChange={setPassowrd}
                                placeholder='Enter your password'
                            />
                            <div className='auth__input-check'>
                                {isValidPassword(passowrd) && (
                                    <img src={check} alt='' />
                                )}
                            </div>
                        </div>
                        <button className='auth__button'>Sign In</button>
                    </Fragment> :
                    <Fragment>
                        <div className='auth__input-wrapper'>
                            <div className='auth__input-icon'>
                                <img src={user} alt='' />
                            </div>
                            <input value={userName}
                                onChange={setUserName}
                                className='auth__input'
                                placeholder='Username'
                            />
                        </div>
                        <div className='auth__input-wrapper'>
                            <div className='auth__input-icon'>
                                <img src={mail} alt='' />
                            </div>
                            <input
                                value={email}
                                onChange={setEmail}
                                className='auth__input'
                                placeholder='Enter your email'
                            />
                            <div className='auth__input-check'>
                                {isValidEmail(email) && (
                                    <img src={check} alt='' />
                                )}
                            </div>
                        </div>
                        <div className='auth__input-wrapper'>
                            <div className='auth__input-icon'>
                                <img src={key} alt='' />
                            </div>
                            <input
                                type='password'
                                value={passowrd}
                                className='auth__input'
                                onChange={setPassowrd}
                                placeholder='Password'
                            />
                            <div className='auth__input-check'>
                                {isValidPassword(passowrd) && (
                                    <img src={check} alt='' />
                                )}
                            </div>
                        </div>
                        <div className='auth__input-wrapper'>
                            <div className='auth__input-icon'>
                                <img src={key} alt='' />
                            </div>
                            <input
                                type='password'
                                value={passowrdAgain}
                                className='auth__input'
                                onChange={setPassowrdAgain}
                                placeholder='Password agan'
                            />
                            <div className='auth__input-check'>
                                {isValidPassword(passowrdAgain) && (
                                    <img src={check} alt='' />
                                )}
                            </div>
                        </div>
                        <button className='auth__button'>Sign Up</button>
                    </Fragment>}
            </div>
            <div className='auth__continue-with'>
                <div className='auth__icon-box'>
                    <img src={google} alt='' />
                </div>
                <div className='auth__icon-box'>
                    <img src={facebook} alt='' />
                </div>
                <div className='auth__icon-box'>
                    <img src={apple} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Auth
