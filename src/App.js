import "./styles.css";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Expenses></Expenses>
    </div>
  );
}
