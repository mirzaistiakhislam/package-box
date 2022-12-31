import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';

const AddPackage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    // const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: packages, isLoading } = useQuery({
        queryKey: ['package'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/orderPackage');
            const data = await res.json();
            return data;
        }
    });


    const handleAddProduct = data => {


        const pack = {
            name: data.package,
            img1: data.img1,
            img2: data.img2,
            img3: data.img3,
            img4: data.img4,
            img5: data.img5,
            img6: data.img6,
        }

        fetch('http://localhost:5000/orderOptions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(pack)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Package is added successfully');
            })


    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Package</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"
                        {...register("name", {
                            required: "Name is Required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                </div> */}

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Package</span></label>
                    <select
                        {...register('package')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            packages.map(pack => <option
                                key={pack._id}
                                value={pack.name}
                            >{pack.name}</option>)
                        }

                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Cover Image (Image Link)</span></label>
                    <input type="text"
                        {...register("img1", {
                            required: "Photo is Required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img1 && <p className='text-red-600'>{errors.img1?.message}</p>}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Item 1 (Image Link)</span></label>
                    <input type="text"
                        {...register("img2")}
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Item 2 (Image Link)</span></label>
                    <input type="text"
                        {...register("img3")}
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Item 3 (Image Link)</span></label>
                    <input type="text"
                        {...register("img4")}
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Item 4 (Image Link)</span></label>
                    <input type="text"
                        {...register("img5")}
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Item 5 (Image Link)</span></label>
                    <input type="text"
                        {...register("img6")}
                        className="input input-bordered w-full max-w-xs" />
                </div>


                <input className='btn btn-accent w-full mt-6' value='Add Package' type="submit" />
                <div>
                    {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                </div>
            </form>
        </div>
    );
};

export default AddPackage;