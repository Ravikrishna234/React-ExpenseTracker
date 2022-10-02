import "./ExpenseDate.css";

function ExpenseDate(props) {
  
  const dt = new Date(props.date);
  const month = dt.toLocaleString("en-US", { month: "long" });
  const day = dt.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year"> {year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
