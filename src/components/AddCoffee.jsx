
import Swal from 'sweetalert2';


const AddCoffee = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);


        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="lg:w-[1095px] mt-10 mx-auto p-10 bg-base-300">
                <div className="grid md:grid-cols-2 gap-6 mx-auto grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" placeholder="Enter coffee name" className="input input-bordered" name="name" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" placeholder="Enter coffee Quantity" className="input input-bordered" name="quantity" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Enter coffee supplier" className="input input-bordered" name="supplier" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Enter coffee taste" className="input input-bordered" name="taste" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Enter coffee category" className="input input-bordered" name="category" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Enter coffee details" className="input input-bordered" name="details" />
                    </div>

                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="url" placeholder="Enter photo URL" className="input input-bordered" name="photo" />
                        <input type="submit" value="Submit" className="input cursor-pointer mt-4 input-bordered" />
                    </div>
                </div>
            </form>

        </section>
    );
};

export default AddCoffee;