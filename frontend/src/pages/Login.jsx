import { useState, useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
    const [formData, serFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData
    
    const onChange = (e) => {
        serFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
     }
    
    const onSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <section className='heading'>
                <h1>
                <FaSignInAlt /> Login
                </h1>
                <p>Login and start goal</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                 <div className="form-group">

                    <input
                        type="email"
                        id='email'
                        name='email'
                        value={email}
                        className="form-control"
                        onChange={onChange}
                        placeholder='Enter your email'
                        />
                    </div>
                    <div className="form-group">
                    <input
                        type="password"
                        id='password'
                        name='password'
                        value={password}
                        className="form-control"
                        onChange={onChange}
                        placeholder='Enter your password'
                        />
                    </div>
                    <div className="form-group">
                    <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
