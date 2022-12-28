import React, { useState } from 'react';
import banner from '../../../assets/Banner.jpg';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const OrderBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content lg:w-1/2 flex-col lg:flex-row-reverse">
                    <img src={banner} className='' alt='' />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default OrderBanner;