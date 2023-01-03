import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/Banner.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Package Box</h1>
                    <p className="py-6">Make Order & Get Order Comfortably</p>

                    <Link to='/order'><PrimaryButton>Get Started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;