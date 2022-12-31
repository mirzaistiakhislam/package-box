import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManagePackages = () => {

    const [deletingPackage, setDeletingPackage] = useState(null);

    const closeModal = () => {
        setDeletingPackage(null);
    }


    const { data: packages, isLoading, refetch } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/orderOptions', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                console.log(data);
                return data;
            }
            catch (error) {

            }
        }
    });


    const handleDeletePackage = (pack) => {
        fetch(`http://localhost:5000/orderOptions/${pack._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Package ${pack.name} Deleted Successfully`);
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl mb-8'>Manage Packages: {packages?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Subscription Package</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            packages?.map((pack, i) => <tr key={pack._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={pack.img1} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{pack.name}</td>
                                <td>
                                    <label onClick={() => setDeletingPackage(pack)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingPackage && <ConfirmationModal
                    title={`Are you sure, you want to delete?`}
                    message={`If you delete ${deletingPackage.name} package, it cannot be undone. `}
                    successAction={handleDeletePackage}
                    successButtonName='Delete'
                    modalData={deletingPackage}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManagePackages;