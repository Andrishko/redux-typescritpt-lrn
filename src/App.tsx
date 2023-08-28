import React, { FC, useState } from 'react';
import './App.css';
import AddPizzForm from './components/AddPizzForm';
import Pizza from './models/PizzaModel';
import { log } from 'console';
import DisplayPizzas from './components/DisplayPizzas';

const App: FC = () => {

  const [pizzasList, setPizzasList] = useState<Pizza[]>([])
  const addPizza = (newPizza: Pizza) => {
    setPizzasList(
      [...pizzasList, newPizza]
    )
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) =>
      (pizza.id === newPizza.id ? newPizza : pizza)))
  }

  console.log(pizzasList);

  return (
    <div className="App">
      <div className='wrapper'>
        <span>
          Наша піцерія
        </span>
        <AddPizzForm addPizza={addPizza} />
        <DisplayPizzas updatePizza={updatePizza} pizzasList={pizzasList} />

      </div>

    </div>
  );
}

export default App;
