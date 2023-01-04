import React, { useEffect, useState } from 'react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';


const OrderBanner = ({ selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate }) => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    useEffect(() => {
        setSelectedStartDate(state[0].startDate);
        setSelectedEndDate(state[0].endDate);
    }, [state]);


    return (
        <DateRangePicker
            className='w-full flex justify-center'
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