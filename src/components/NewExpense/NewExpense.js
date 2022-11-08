import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isEditing, setIsEditing] = useState(false);

  const isEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={isEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelEditing={cancelEditingHandler} />}
    </div>
  );
};

export default NewExpense;
