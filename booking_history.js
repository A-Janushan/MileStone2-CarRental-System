// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const bookingHistoryTable = document.getElementById("booking-history");

    // Function to load booking history from the server
    async function loadBookingHistory() {
        try {
            // Fetch booking history from the server (example endpoint: '/api/booking-history')
            const response = await fetch('/api/booking-history', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                    // 'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to load booking history.');
            }

            const rentalCarDetail = await response.json();

            // Check if booking history exists
            if (rentalCarDetail && rentalCarDetail.length > 0) {
                rentalCarDetail.forEach(detail => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${detail.bookingId || 'N/A'}</td>
                        <td>${detail.customerId || 'N/A'}</td>
                        <td>${detail.rentalCarId || 'N/A'}</td>
                        <td>${new Date(detail.date || Date.now()).toLocaleDateString() || 'N/A'}</td>
                        <td>${detail.availableFrom || 'N/A'}</td>
                        <td>${detail.availableTo || 'N/A'}</td>
                        <td>${detail.halfPayment || '0'}</td>
                        <td>${detail.paymentStatus || 'Pending'}</td>
                        <td>${(detail.paymentStatus === "Approved") ? "Confirmed" : "Pending"}</td>
                    `;
                    bookingHistoryTable.appendChild(row);
                });
            } else {
                // Display a message if no bookings are found
                const row = document.createElement("tr");
                row.innerHTML = `<td colspan="9">No booking history available.</td>`;
                bookingHistoryTable.appendChild(row);
            }
        } catch (error) {
            console.error('Error fetching booking history:', error);
            // Show error message in the table if fetching fails
            const row = document.createElement("tr");
            row.innerHTML = `<td colspan="9">Unable to load booking history. Please try again later.</td>`;
            bookingHistoryTable.appendChild(row);
        }
    }

    // Call the function to load the booking history when the page is loaded
    loadBookingHistory();
});
