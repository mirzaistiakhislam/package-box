import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {

    const { logOut } = useContext(AuthContext);

    const error = useRouteError();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <p className='text-red-500'>Something Went Wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handleLogOut}>Sign Out</button> and log back in </h4>
        </div>
    );
};

export default DisplayError;