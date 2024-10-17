// Function to load booking details from the server using fetch API
async function loadBookingDetails() {
    try {
        // Fetch booking, car, and customer details from API endpoints
        const bookingResponse = await fetch('/api/bookings');
        const carResponse = await fetch('/api/cars');
        const customerResponse = await fetch('/api/customers');

        // Parse the JSON data from the responses
        const bookingData = await bookingResponse.json();
        const carData = await carResponse.json();
        const customerData = await customerResponse.json();

        const bookingTableBody = document.getElementById('booking-requests');
        bookingTableBody.innerHTML = '';

        if (Array.isArray(bookingData) && bookingData.length > 0) {
            bookingData.forEach(booking => {
                // Find the corresponding car and customer based on the booking details
                const car = carData.find(c => c.carId === booking.rentalCarId);
                const customer = customerData.find(cust => cust.customerId === booking.customerId);

                const bookingRow = document.createElement('tr');
                bookingRow.innerHTML = `
                    <td>${booking.paymentId || 'N/A'}</td>
                    <td>${new Date(booking.paymentDate).toLocaleDateString() || 'N/A'}</td>
                    <td>${customer ? customer.customerId : 'N/A'}</td>
                    <td>${booking.rentalCarId || 'N/A'}</td>
                    <td>${booking.bookingAmount || '0'}</td>
                    <td>${car ? new Date(car.bookingStartDate).toLocaleDateString() : 'N/A'}</td>
                    <td>${car ? new Date(car.bookingEndDate).toLocaleDateString() : 'N/A'}</td>
                    <td>${booking.paymentStatus || 'Pending'}</td>
                    <td>
                        <button class="action-button approve" onclick="updateBookingStatus('${booking.paymentId}', 'Approved')">Approve</button>
                        <button class="action-button reject" onclick="updateBookingStatus('${booking.paymentId}', 'Rejected')">Reject</button>
                        <button class="action-button view" onclick="openBookingModal('${booking.paymentId}')">View Details</button>
                    </td>
                    <td>
                        <button class="rentalBtn" onclick="openRentalModal('${booking.paymentId}')">Rental</button>
                    </td>
                `;
                bookingTableBody.appendChild(bookingRow);
            });
        } else {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="10">No booking requests available.</td>`;
            bookingTableBody.appendChild(row);
        }
    } catch (error) {
        console.error('Error loading booking details:', error);
    }
}

// Function to update booking status using fetch API
async function updateBookingStatus(paymentId, status) {
    try {
        // Send PUT request to update the booking status
        const response = await fetch(`/api/bookings/${paymentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ paymentStatus: status })
        });

        if (response.ok) {
            // Reload booking details after successful status update
            loadBookingDetails();
        } else {
            console.error('Failed to update booking status');
        }
    } catch (error) {
        console.error('Error updating booking status:', error);
    }
}

// Load booking details when the page is loaded
window.onload = loadBookingDetails;
