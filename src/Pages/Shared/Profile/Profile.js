import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className='flex justify-center items-center my-16'>
            <div className="card w-96 bg-base-100 shadow-xl">
                {
                    user?.photoURL ?
                        <figure><img className='w-full' src={user.photoURL} alt="Shoes" /></figure>
                        :
                        <div className='flex justify-center'>
                            <FaUser size={70} />
                        </div>
                }
                <div className="card-body">
                    <input type="text" readOnly defaultValue={user?.displayName} className="input input-bordered input-primary w-full" />
                    <input type="text" readOnly defaultValue={user?.email} className="input input-bordered input-primary w-full" />

                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Profile;