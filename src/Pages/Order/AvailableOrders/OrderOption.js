import React from 'react';

const OrderOption = ({ orderOption, setPack }) => {

    const { name, img1, img2, img3, img4, img5, img6 } = orderOption;
    console.log(orderOption);

    return (
        // <div className="card shadow-xl">
        //     <div className="card-body text-center">
        //         <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
        //         <figure className='w-12 text-center' >
        //             <img src={img1} alt="" />
        //         </figure>
        // <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        // <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} available</p>
        // <div className="card-actions justify-center">
        //     <label disabled={slots.length === 0}
        //         htmlFor="placing-order-modal"
        //         className="btn btn-primary text-white"
        //         onClick={() => setPack(orderOption)}
        //     >Place Order</label>
        // </div>
        //     </div>
        // </div>
        <div className="card lg:card-side shadow-xl w-full h-72 ">
            <figure className='w-1/3'>
                <img src={img1} alt="Album" />
            </figure>
            <div className="card-body flex justify-between">
                <h2 className="card-title flex justify-center text-2xl text-secondary text-center">SUBSCRIPTION PACKAGE: <span className='font-bold'>{name}</span> </h2>
                {/* <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} available</p> */}
                <div className='w-24 flex justify-start'>
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
                <div className="">
                    <label
                        htmlFor="placing-order-modal"
                        className="btn btn-accent text-white w-full flex self-end "
                        onClick={() => setPack(orderOption)}
                    >Place Order</label>
                </div>
            </div>
        </div>
    );
};

export default OrderOption;