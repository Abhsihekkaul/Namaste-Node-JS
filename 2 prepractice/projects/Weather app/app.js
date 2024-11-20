import ApiCall from "./script.js";

const listOfDates = document.querySelector('.Date-List');

// Ensure the element exists
if (!listOfDates) {
    console.error("Element with class 'Date-List' not found in the DOM.");
} else {
    // Function to render dates
    async function renderDates() {
        try {
            const data = await ApiCall(); // Await the API response
            console.log(data);
            // Ensure `data.list` is valid
            if (!data?.list || !Array.isArray(data.list)) {
                console.error("Invalid or missing 'list' in API response:", data);
                return;
            }

            // Loop through the data and render
            for (let i = 0; i < data.list.length; i++) {
                const dateItem = document.createElement('li');
                dateItem.textContent = data.list[i].dt_txt;
                listOfDates.appendChild(dateItem);
            }
        } catch (error) {
            console.error("Error rendering dates:", error.message);
        }
    }

    renderDates();
}
