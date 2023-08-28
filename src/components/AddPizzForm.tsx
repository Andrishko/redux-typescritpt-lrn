import { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/PizzaModel";


const initialState = {
    title: '',
    price: '',
    image: ''
}

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void
}
 
const AddPizzForm: FC<AddPizzaFormProps> = ({addPizza}) => {

    const [newPizza, setNewPizza] = useState<{ title: string, price: string, image: string }>(initialState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = (e.target)
        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {title, price, image} = newPizza;
        if (title && price && image) {
            addPizza({title, price: Number(price), image, id: Date.now()})
        }
        setNewPizza(initialState)
    }

    console.log(newPizza);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="title" type="text" placeholder="title" onChange={handleChange} value={newPizza.title} />
                <input name="price" type="text" placeholder="price" onChange={handleChange} value={newPizza.price} />
                <input name="image" type="text" placeholder="image" onChange={handleChange} value={newPizza.image} />
                <button>Add pizza</button>
            </form>
        </>
    );
}

export default AddPizzForm;