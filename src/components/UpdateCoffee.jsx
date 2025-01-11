import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;


        const updateCoffee = (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const quantity = form.quantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            const updateCoffee = { name, quantity, supplier, taste, category, details, photo };
            console.log(updateCoffee);


            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(updateCoffee)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'success!',
                            text: 'Coffee Update Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }

        return (
            <section>
                <form onSubmit={updateCoffee} className="lg:w-[1095px] mt-10 mx-auto p-10 bg-base-300">
                    <div className="grid md:grid-cols-2 gap-6 mx-auto grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" placeholder="Enter coffee name" className="input input-bordered" name="name" defaultValue={name} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" placeholder="Enter coffee Quantity" className="input input-bordered" name="quantity" defaultValue={quantity} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" placeholder="Enter coffee supplier" className="input input-bordered" name="supplier" defaultValue={supplier} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" placeholder="Enter coffee taste" className="input input-bordered" name="taste" defaultValue={taste} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Enter coffee category" className="input input-bordered" name="category" defaultValue={category} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Enter coffee details" className="input input-bordered" name="details" defaultValue={details} />
                        </div>

                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" placeholder="Enter photo URL" className="input input-bordered" name="photo" defaultValue={photo} />
                            <input type="submit" value="Update Coffee" className="input cursor-pointer mt-4 input-bordered" />
                        </div>
                    </div>
                </form>

            </section>
        );
    };

    export default UpdateCoffee;