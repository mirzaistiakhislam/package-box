import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {

    const buying = useLoaderData();
    const navigation = useNavigation();
    const { pack, orderStartDate, orderEndDate, deliveryTime } = buying;

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className='text-3xl'>Payment for: <strong>{pack} TAKA</strong> Package</h3><br />
            <p className='text-xl'>Please pay {pack} taka for your order on {orderStartDate} to {orderEndDate} at {deliveryTime}</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        buying={buying}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;