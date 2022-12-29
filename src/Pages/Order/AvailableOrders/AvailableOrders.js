import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import OrderOption from './OrderOption';
import PlacingOrderModal from '../PlacingOrderModal/PlacingOrderModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableOrders = ({ selectedDate, setSelectedDate }) => {

    // const [orderOptions, setOrderOptions] = useState([]);
    const [pack, setPack] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: orderOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['orderOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orderOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/orderOptions')
    //         .then(res => res.json())
    //         .then(data => setOrderOptions(data))
    // }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Orders on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    orderOptions.map(option => <OrderOption
                        key={option._id}
                        orderOption={option}
                        setPack={setPack}
                    ></OrderOption>)
                }
            </div>
            {
                pack &&
                <PlacingOrderModal
                    selectedDate={selectedDate}
                    pack={pack}
                    setPack={setPack}
                    refetch={refetch}
                ></PlacingOrderModal>
            }
        </section>
    );
};

export default AvailableOrders;