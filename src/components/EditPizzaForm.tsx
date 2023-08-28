import { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/PizzaModel";



interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza }) => {

    const [editPizza, setEditPizza] = useState<Pizza>(data)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = (e.target)
        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { title, price, image } = editPizza;
        if (title && price && image) {
            console.log(editPizza)
            updatePizza(editPizza)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="title" type="text" placeholder="title" onChange={handleChange} value={editPizza.title} />
                <input name="price" type="text" placeholder="price" onChange={handleChange} value={editPizza.price} />
                <input name="image" type="text" placeholder="image" onChange={handleChange} value={editPizza.image} />
                <button>Change</button>
            </form>
        </>
    );
}


export default EditPizzaForm