import React from 'react'

const LoginAndRegister = () => {
    return (
        <div className='lr-wrapper'>
            <div className='lr-wrapper__login'>
                <label className='lr-wrapper__title'>Login</label>
                <div className='lr-wrapper__fields'>
                    <div className='lr-wrapper__field'>
                        <label className='lr-wrapper__field-title'></label>
                        <input className='lr-wrapper__field-input' placeholder='User name' />
                    </div>
                    <div className='lr-wrapper__field'>
                        <label className='lr-wrapper__field-title'></label>
                        <input type='password' className='lr-wrapper__field-input' placeholder='Password' />
                    </div>
                </div>
                <div className='lr-wrapper__tologin'></div>
            </div>
            <div className='lr-wrapper__register'>
                <div className='lr-wrapper__toregister'>A have an account</div>
                <label className='lr-wrapper__title'>Register</label>
                <div className='lr-wrapper__fields'>
                    <div className='lr-wrapper__field'>
                        <input className='lr-wrapper__field-input' placeholder='First Name' />
                    </div>
                    <div className='lr-wrapper__field'>
                        <input className='lr-wrapper__field-input' placeholder='Last Name' />
                    </div>
                    <div className='lr-wrapper__field'>
                        <input className='lr-wrapper__field-input' placeholder='Email' />
                    </div>
                    <div className='lr-wrapper__field'>
                        <input type='password' className='lr-wrapper__field-input' placeholder='Password' />
                    </div>
                    <div className='lr-wrapper__field'>
                        <input type='password' className='lr-wrapper__field-input' placeholder='Password Again' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginAndRegister