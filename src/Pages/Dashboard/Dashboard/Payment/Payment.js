import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const buying = useLoaderData();
    const { pack, orderStartDate, orderEndDate, deliveryTime } = buying;
    console.log(buying);

    return (
        <div>
            <h3 className='text-3xl'>Payment for: <strong>{pack}</strong> Package</h3><br />
            <p className='text-xl'>Please pay for your order on {orderStartDate} to {orderEndDate} at {deliveryTime}</p>
        </div>
    );
};

export default Payment;