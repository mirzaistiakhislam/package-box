import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import review1 from '../../../assets/review1.png';
import review2 from '../../../assets/review2.png';
import review3 from '../../../assets/review3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Mirza Fuad',
            img: review1,
            review: 'Very pleased with the boxes and the service. Sales support was very good',
            location: 'Mirpur, Dhaka'
        },
        {
            _id: 2,
            name: 'Talha Jubayer',
            img: review2,
            review: 'I love my boxes! It was super easy to have them made and they arrived pretty fast',
            location: 'Shoniakhra, Dhaka'
        },
        {
            _id: 3,
            name: 'Adil Ahmed',
            img: review3,
            review: 'They are true to their word and are 100% trustworthy and reliable',
            location: 'Bikrampur, Munshiganj'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl '>What Our Customer's Say</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>

            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;