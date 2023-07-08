import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const Date = {
    month: props.date.toLocaleString("en-US", { month: "long" }),
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
    year: props.date.getFullYear(),
  };
  return (
    <div className="expense-date">
      <div className="expense-date__month">{Date.month}</div>
      <div className="expense-date__year">{Date.year}</div>
      <div className="expense-date__day">{Date.day}</div>
    </div>
  );
};

export default ExpenseDate;
