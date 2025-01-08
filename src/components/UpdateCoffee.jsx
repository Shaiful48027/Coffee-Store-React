import { useLoaderData } from "react-router-dom";


const UpdateCoffee = ({coffee}) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const coffee = useLoaderData();


    return (
        <div>
            <h2>Update Coffee {name}</h2>
        </div>
    );
};

export default UpdateCoffee;