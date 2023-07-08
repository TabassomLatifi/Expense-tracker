import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");

  const selectFilterHandler = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filter}
          onSelectFilter={selectFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
