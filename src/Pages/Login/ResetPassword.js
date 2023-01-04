import React, { useContext, useRef } from 'react';
import { toast } from 'react-hot-toast';
import AuthProvider, { AuthContext } from '../../context/AuthProvider';

const ResetPassword = () => {

    const emailField = useRef();
    const { user, resetPassword } = useContext(AuthContext);

    const handleForgetPassword = () => {
        const email = emailField.current.value;
        console.log(email);
        resetPassword(email)
            .then(res => {
                toast.success('email send successfully');
                emailField.current.value = '';
            })
    }
    return (
        <div>
            <input type="text" ref={emailField} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /> <br />
            <button onClick={handleForgetPassword} className="btn btn-primary">Button</button>
        </div>
    );
};

export default ResetPassword;