document.addEventListener('DOMContentLoaded', () => {
    const apiUrlInput = document.getElementById('apiUrl');
    const loadButton = document.getElementById('loadButton');
    const statusElement = document.getElementById('status');

    loadButton.addEventListener('click', async () => {
        const url = apiUrlInput.value;
        statusElement.textContent = 'Loading...';

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            statusElement.textContent = 'Success!';
        } catch (error) {
            console.error('Error fetching data:', error);
            statusElement.textContent = 'Failed to load data.';
        }
    });
});
