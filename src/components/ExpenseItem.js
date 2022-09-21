import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props}></ExpenseDate>
      <div className=".expense-item__description">
        <div className=".expense-item__price"></div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
