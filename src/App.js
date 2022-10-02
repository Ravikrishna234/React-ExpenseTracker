import React, { useState } from "react";
import "./styles.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const EXPENSE_INITIAL = [
  {
    id: "e1",
    title: "Book",
    amount: "22",
    date: new Date(2022, 2, 10),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(EXPENSE_INITIAL);

  const addExpenseHandler = (expenses) => {
    setExpenses((prev_expenses) => {
      return [expenses, ...prev_expenses];
    });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}
