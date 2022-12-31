import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../../context/AuthProvider';

const MyOrder = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/buyings?email=${user?.email}`;

    const { data: buyings = [] } = useQuery({
        queryKey: ['buyings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Order</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Package</th>
                            <th>Date</th>
                            <th>Delivery Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyings &&
                            buyings?.map((buy, i) => <tr key={buy._id}>
                                <th>{i + 1}</th>
                                <td>{buy.buyer}</td>
                                <td>{buy.pack} TAKA</td>
                                <td>{buy.orderStartDate} - {buy.orderEndDate}</td>
                                <td>{buy.deliveryTime}</td>
                                <td>
                                    {
                                        !buy.paid && <Link
                                            to={`/dashboard/payment/${buy._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'

                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        buy.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;