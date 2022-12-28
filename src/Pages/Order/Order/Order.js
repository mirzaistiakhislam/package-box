import React, { useState } from 'react';
import AvailableOrders from '../AvailableOrders/AvailableOrders';
import OrderBanner from '../OrderBanner/OrderBanner';

const Order = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <OrderBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></OrderBanner>
            <AvailableOrders
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableOrders>
        </div>
    );
};

export default Order;