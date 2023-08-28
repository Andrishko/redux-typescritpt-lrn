import { FC, useState } from "react";
import Pizza from "../models/PizzaModel";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzaProps {
    pizza: Pizza
    updatePizza: (newPizza: Pizza) => void
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza}) => {
    const [edit, setEdit] = useState<boolean>(false)

    const handleEdit = () => {
        console.log('click');
        
        setEdit(!edit)
    }
    return (
        <>
            <div>
                <img src="" alt={pizza.title} />
                <h2>{pizza.title}</h2>
                <span>{pizza.price}</span>
                <div>
                    <AiFillEdit onClick={handleEdit} />
                    <AiFillDelete />
                </div>
                {edit ? <EditPizzaForm updatePizza={updatePizza} data={pizza} /> : null}
            </div>
        </>
    );
}

export default SinglePizza;