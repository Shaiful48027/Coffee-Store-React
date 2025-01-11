import React from 'react';
import { GrFormView } from "react-icons/gr";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelet = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !==_id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    };



    return (
        <div className="rounded-[8px] border-2 border-white-700 card card-side  shadow-xl items-center lg:p-[30px] px-[15px] pt-[25px]">
            <figure className='w-2/3'>
                <img className='w-[185px] h-[240px]'
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className='w-2/3'>
                <div className=' flex gap-2'>
                    <span className='font-semibold text-slate-100'>Name :</span>
                    <span className='font-normal text-slate-300'> {name}</span>

                </div>
                <div className=' flex gap-2'>
                    <span className='font-semibold text-slate-100'>Supplier :</span>
                    <span className='font-normal text-slate-300'> {supplier}</span>

                </div>
                <div className=' flex gap-2'>
                    <span className='font-semibold text-slate-100'>Quantity :</span>
                    <span className='font-normal text-slate-300'> {quantity}</span>

                </div>
            </div>
            <div className='w-.1/3 space-y-3 justify-end'>
                <button className='w-[40px] h-[40px] bg-[#D2B48C] text-[35px] text-center text-white content-center pl-[2px] rounded-sm'><GrFormView /></button>

                <Link to={`updatecoffee/${_id}`}>
                    <button className='w-[40px] h-[40px] bg-[#3C393B] items-center text-[25px] text-white content-center pl-2 rounded-sm'><VscEdit /></button>
                </Link>

                <button onClick={() => handleDelet(_id)} className='w-[40px] h-[40px] bg-[#EA4744] text-[25px] text-white content-center pl-2 rounded-sm'><RiDeleteBinLine /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;