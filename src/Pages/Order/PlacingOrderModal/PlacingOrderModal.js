import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const PlacingOrderModal = ({ pack, setPack, selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate, refetch }) => {

    const { name: packName } = pack;
    const startDate = format(selectedStartDate, 'PP');
    const endDate = format(selectedEndDate, 'PP');
    const { user } = useContext(AuthContext);

    const handlePlacingOrder = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const deliveryAddress = form.deliveryAddress.value;
        const deliveryTime = form.deliveryTime.value;

        const buying = {
            orderStartDate: startDate,
            orderEndDate: endDate,
            pack: packName,
            buyer: name,
            deliveryTime,
            email,
            phone,
            deliveryAddress,
        }

        // console.log(placingOrder);
        fetch('http://localhost:5000/buyings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buying)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setPack(null);
                    toast.success('Place your order confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                    setPack(null);
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="placing-order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="placing-order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-primary text-center">Package: <strong>{packName}</strong> Taka</h3>

                    <form onSubmit={handlePlacingOrder} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={startDate} className="input w-full input-bordered" disabled />
                        <input type="text" value={endDate} className="input w-full input-bordered" disabled />
                        {/* <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>
                                )
                            }
                        </select> */}
                        <input name='deliveryTime' type="text" placeholder=" Enter Expected Delivery Time (10AM - 10PM)" className="input w-full input-bordered" />
                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='deliveryAddress' type="text" placeholder="Delivery Address" className="input w-full input-bordered" />
                        <br />
                        {
                            user ?
                                <input className='btn btn-accent w-full ' type="submit" value="Submit" />
                                :
                                <input className='btn btn-accent w-full' disabled type="submit" value="Submit" />
                        }
                    </form>
                </div>
            </div>

        </>
    );
};

export default PlacingOrderModal;