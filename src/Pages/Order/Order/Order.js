import React, { useState } from 'react';
import AvailableOrders from '../AvailableOrders/AvailableOrders';
import OrderBanner from '../OrderBanner/OrderBanner';

const Order = () => {
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    return (
        <div>
            <h2 className='text-center text-5xl my-16 text-primary'>Choose Your Subscription Date</h2>
            <OrderBanner
                selectedStartDate={selectedStartDate}
                setSelectedStartDate={setSelectedStartDate}
                selectedEndDate={selectedEndDate}
                setSelectedEndDate={setSelectedEndDate}
            ></OrderBanner>

            <AvailableOrders
                selectedStartDate={selectedStartDate}
                setSelectedStartDate={setSelectedStartDate}
                selectedEndDate={selectedEndDate}
                setSelectedEndDate={setSelectedEndDate}
            ></AvailableOrders>
        </div>
    );
};

export default Order;