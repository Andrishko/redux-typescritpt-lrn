import { FC } from "react";
import Pizza from "../models/PizzaModel";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
    pizzasList: Pizza[],
    updatePizza: (newPizza: Pizza) => void,

}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza }) => {

    return (
        <>
            {pizzasList.map((pizza) => {
                return (
                    <SinglePizza updatePizza={updatePizza} pizza={pizza} key={pizza.id} />
                )
            })}
        </>
    );
}

export default DisplayPizzas;