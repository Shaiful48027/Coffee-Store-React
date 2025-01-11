import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../coffeeCard/CoffeeCard";
import { useState } from "react";


const Home = () => {

    const loadcoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadcoffees);

    return (
        <section>
            <div className="grid lg:grid-cols-3 gap-10 lg:my-20 m-10" >
                {
                    loadcoffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }
            </div>
        </section>
    );
};

export default Home;