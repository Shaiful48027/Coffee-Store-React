import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../coffeeCard/CoffeeCard";


const Home = () => {

    const coffees = useLoaderData();

    return (
        <section>
            <div className="grid lg:grid-cols-3 gap-10 lg:my-20 m-10" >
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </section>
    );
};

export default Home;