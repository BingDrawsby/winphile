// JavaScript functionality

// Function to get current date and time in UTC
function getCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
    return formattedDate;
}

// Example usage
console.log('Current Date and Time (UTC):', getCurrentDateTime());
