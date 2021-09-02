import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const expenses = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (value) => {
        setFilteredYear(value);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
            </Card>
        </div>

    )
}

export default Expenses;