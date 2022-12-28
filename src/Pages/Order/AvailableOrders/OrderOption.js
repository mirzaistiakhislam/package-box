import React from 'react';

const OrderOption = ({ orderOption, setPack }) => {

    const { name, slots } = orderOption;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} available</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0}
                        htmlFor="placing-order-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setPack(orderOption)}
                    >Place Order</label>
                </div>
            </div>
        </div>
    );
};

export default OrderOption;