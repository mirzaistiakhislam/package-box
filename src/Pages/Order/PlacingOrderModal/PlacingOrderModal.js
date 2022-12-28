import { format } from 'date-fns';
import React from 'react';

const PlacingOrderModal = ({ pack, setPack, selectedDate }) => {

    const { name, slots } = pack;
    const date = format(selectedDate, 'PP');

    const handlePlacingOrder = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const placingOrder = {
            orderDate: date,
            pack: name,
            buyer: name,
            slot,
            email,
            phone
        }

        console.log(placingOrder);
        setPack(null);
    }

    return (
        <>
            <input type="checkbox" id="placing-order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="placing-order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handlePlacingOrder} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} className="input w-full input-bordered" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>
                                )
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default PlacingOrderModal;