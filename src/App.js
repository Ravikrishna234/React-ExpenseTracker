import "./styles.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

export default function App() {
  const addExpenseHandler = (expense) => {};
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses></Expenses>
    </div>
  );
}
