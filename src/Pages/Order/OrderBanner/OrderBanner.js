import React, { useState } from 'react';
import banner from '../../../assets/Banner.jpg';
import { DayPicker, DateRange } from 'react-day-picker';
// import { format } from 'date-fns';
import { addDays, format } from 'date-fns';
// import { , DayPicker } from 'react-day-picker';

// const pastMonth = new Date(2020, 10, 15);

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
// import { addDays } from 'date-fns';

const OrderBanner = ({ selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate }) => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    // console.log(format(state[0].startDate, 'PP'));
    setSelectedStartDate(state[0].startDate);
    setSelectedEndDate(state[0].endDate);
    // const date = format(selectedDate, 'PP');

    return (
        <DateRangePicker
            onChange={item => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
        />
    );


    // return (
    //     <header className='my-6'>
    //         <div className="hero">
    //             <div className="hero-content lg:w-1/2 flex-col lg:flex-row-reverse">
    //                 <img src={banner} className='' alt='' />
    //                 <div className='mr-6'>
    //                     <DayPicker
    //                         mode="range"
    //                         defaultMonth={pastMonth}
    //                         selected={range}
    //                         footer={footer}
    //                         onSelect={setRange}
    //                     // mode='range'
    //                     // selected={selectedDate}
    //                     // onSelect={setSelectedDate}
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </header>
    // );
};

export default OrderBanner;