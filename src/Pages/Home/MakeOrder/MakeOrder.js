import React from 'react';
import { Link } from 'react-router-dom';
import makeorderbox from '../../../assets/makeorderbox.png';
import makeorderboxbg from '../../../assets/makeorderboxbg.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeOrder = () => {
    return (
        <section className='mt-32'
            style={{
                backgroundColor: '#3a4256',
            }}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={makeorderbox} alt='' className="-mt-32 lg:w-1/2 rounded-lg" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Order</h4>
                        <h1 className="text-4xl font-bold text-white">Make An Order Today</h1>
                        <p className="py-6 text-white">It meets all of the needs of modern-day package delivery, has the highest quality based on customer reviews, and is very simple to use for the owner</p>
                        <Link to='order'><PrimaryButton>Order</PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeOrder;