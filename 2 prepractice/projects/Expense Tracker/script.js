document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.querySelector("#Expense-form");
    const ExpenseName = document.querySelector("#Expense-name");
    const ExpenseAmount = document.querySelector("#Expense-amount");
    const expensesList = document.querySelector("#expense-list");
    const totalExpense = document.querySelector(".Total-expense");

    let expenses = [];

    // Add event listener for the form submission
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = ExpenseName.value.trim();
        const amount = parseFloat(ExpenseAmount.value.trim());

        // Validate inputs
        if (name !== "" && amount > 0 && !isNaN(amount)) {
            const currExpense = {
                name: name,
                amount: amount,
            };

            // Add expense to the array and update the list
            expenses.push(currExpense);
            renderExpense(currExpense);
            updateTotal();

            // Clear input fields
            ExpenseName.value = "";
            ExpenseAmount.value = "";
        } else {
            alert("Please enter a valid expense name and amount greater than 0.");
        }
    });

    // Function to calculate total expenses
    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    // Function to update the total displayed
    function updateTotal() {
        totalExpense.textContent = `$${calculateTotal().toFixed(2)}`;
    }

    // Function to render a single expense item
    function renderExpense(expense) {
        const li = document.createElement('li');
        li.classList.add('expense-item');

        li.innerHTML = `
            <p>${expense.name}</p>
            <p>$${expense.amount.toFixed(2)}</p>
            <button class="del-expense">Delete</button>
        `;

        // Add delete functionality
        const deleteButton = li.querySelector('.del-expense');
        deleteButton.addEventListener('click', () => {
            expenses = expenses.filter((e) => e !== expense);
            li.remove();
            updateTotal();
        });

        expensesList.appendChild(li);
    }
});
