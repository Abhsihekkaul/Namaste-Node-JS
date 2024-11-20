const apiKey = '0f01f8b6d20576b36b9836e8bf6075f4';
const lon = '75.8573'; // Longitude of London
const lat = '30.9010'; // Latitude of London
const Api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`; // Updated URL

export default async function ApiCall() {
    try {
        const fetchApi = await fetch(Api);
        
        if (!fetchApi.ok) {
            throw new Error(`Error: ${fetchApi.status}`);
        }
        
        const data = await fetchApi.json(); // Parse the response to JSON
        return data
    } catch (error) {
        console.error('API Call Failed:', error.message);
    }
}



