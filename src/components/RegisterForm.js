import React from 'react'

const RegisterForm = () => {
    return (
        <div className='register'>
            <h3 className='register__title'>Sign Up</h3>
            <form className='register__form' autocomplete="off">
                <div className='register__form-group'>
                    <label className='register__form-label' htmlFor='email'>Email</label>
                    <input required className='register__form-input' id='email' type='email' />
                </div>
                <div className='register__form-group'>
                    <label className='register__form-label' htmlFor='username'>Username</label>
                    <input required className='register__form-input' id='username' type='text' />
                </div>
                <div className='register__form-group'>
                    <label className='register__form-label' htmlFor='password'>Password</label>
                    <input required className='register__form-input' id='password' type='password' />
                </div>
                <button type='submit' className='register__form-submit'>Sign Up</button>
            </form>
        </div>
    )
}
export default RegisterForm