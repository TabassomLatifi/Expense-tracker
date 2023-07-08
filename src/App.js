import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 1, date: new Date(2020, 7, 14), title: "Car Insurance", amount: 297.5 },
  { id: 2, date: new Date(2020, 8, 19), title: "New Tv", amount: 183.75 },
  { id: 3, date: new Date(2021, 10, 28), title: "Travel", amount: 584.83 },
  { id: 4, date: new Date(2021, 11, 3), title: "Medical", amount: 52.36 },
  { id: 5, date: new Date(2022, 2, 4), title: "A Book", amount: 30.99 },
  { id: 6, date: new Date(2022, 5, 18), title: "Restaurant", amount: 83.36 },
];


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpenseHandler = (newExpense) => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]
    });
  }


  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
