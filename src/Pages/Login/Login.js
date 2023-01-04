// import { GoogleAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';


const Login = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleSignin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const emailField = useRef();


    const from = location.state?.from?.pathname || '/';
    console.log(from);
    const { user } = useContext(AuthContext);


    if (token) {
        navigate(from, { replace: true });
    }
    if (user) {
        navigate(from, { replace: true });
    }

    // const googleProvider = new GoogleAuthProvider();

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                // useok(user?.email);
                // useToken(user?.email);
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);
            })
    }

    const handleGoogleSign = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user.email);
                setLoginUserEmail(user.email);
                toast.success('Signin successfully!');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);
            })
    }

    // const handleForgetPassword = () => {
    //     const email = emailField.current.focus();
    //     console.log(email);
    // }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" ref={emailField}
                            {...register("email", {
                                required: "Email Address is Required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is Required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label"><span className="label-text">Forget Password? <button className='text-secondary'><strong><Link to='/resetpassword'>Please Reset</Link></strong></button></span></label><br />

                    </div>

                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='text-center'>New to Package Box?<Link className='text-secondary' to='/signup'> <strong>Create new account</strong></Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSign} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;