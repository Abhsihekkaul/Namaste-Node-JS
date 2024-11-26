const DirectoryList = document.querySelector('#userTable'); // The main user table
const Filter = document.querySelector('#filterUsers'); // The input field for filtering

let users = []; // To hold fetched data globally

// Function to fetch user data
async function fetchData() {
    const FetchingData = await fetch('./dummy_users.json'); // Fetch the file
    const Data = await FetchingData.json(); // Parse the JSON
    users = Data; // Assign fetched data to the global users variable
    renderUsers(users); // Render all users initially
}

// Function to render users
function renderUsers(userArray) {
    DirectoryList.innerHTML = ''; // Clear previous data
    userArray.forEach(user => {
        const temp = document.createElement('li');
        temp.classList.add('TableItem');
        temp.innerHTML = `
            <p>${user.id}</p>
            <p>${user.name}</p>
            <p>${user.email}</p>
            <p>${user.phone}</p>
        `;
        DirectoryList.appendChild(temp); // Append the item to the list
    });
}

// Event listener for filtering users
Filter.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
    renderUsers(filteredUsers); // Re-render the filtered users
});

// Fetch and display data when the page loads
fetchData();
