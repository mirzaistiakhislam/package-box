import React from 'react';
import snackbox from '../../../assets/snackbox.png';
import birthdaygiftbox from '../../../assets/birthdaygiftbox.png';
import surprisebox from '../../../assets/surprisebox.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Snack Box',
            description: 'Personalized snack & swag boxes | Office & event snack trays | Bulk snacks and drinks',
            img: snackbox
        },
        {
            id: 2,
            name: 'Birthday Gift Box',
            description: 'A birthday box is a perfect way to bring some excitement to her birthday',
            img: birthdaygiftbox
        },
        {
            id: 3,
            name: 'Surprise Box',
            description: 'Welcome to the Surprise Box, Everyone loves a surprise',
            img: surprisebox
        }
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>

            </div>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;