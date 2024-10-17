document.addEventListener('DOMContentLoaded', () => {
    const userDetailsContainer = document.getElementById('user-details-container');
    const bookingHistoryContainer = document.getElementById('booking-history');
    const userNameDisplay = document.getElementById('user-name');
    const logoutButton = document.getElementById('logout-button');
    
    // Fetch user data from the server
    function fetchUserData() {
        return fetch('/api/userProfile')
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                console.error('Error fetching user data:', error);
                return null;
            });
    }

    // Fetch booking data from the server
    function fetchBookings() {
        return fetch('/api/bookings')
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                console.error('Error fetching bookings:', error);
                return [];
            });
    }

    // Display user's name or NIC number
    function displayUserName(user) {
        if (user) {
            userNameDisplay.textContent = `You logged in as ${user.customerName}!`;
        } else {
            userNameDisplay.textContent = `You logged in with NIC Number ${loggedUser.customerNicnumber}!`;
        }
        // Make the user name visible with fade-in effect
        userNameDisplay.style.opacity = 1;
    }

    // Populate user details on the dashboard
    function populateUserDetails(user) {
        userDetailsContainer.innerHTML = ''; // Clear previous content
        if (user) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-details');
            userDiv.innerHTML = `
                <h2>${user.customerName}</h2>
                <p><strong>Email:</strong> ${user.customerEmail}</p>
                <p><strong>Phone:</strong> ${user.customerPhone}</p>
                <p><strong>Address:</strong> ${user.customerAddress || "N/A"}</p>
                <p><strong>License Number:</strong> ${user.licenseNumber}</p>
                <p><strong>Proof Type:</strong> ${user.proofType}</p>
                <p><strong>Postal Code:</strong> ${user.postalCode}</p>
                <p><strong>Profile Status:</strong> ${user.profileStatus}</p>
            `;
            userDetailsContainer.appendChild(userDiv);
        }
    }

    // Render booking data in the table
    function renderBookings(bookings) {
        bookingHistoryContainer.innerHTML = ''; // Clear existing rows

        if (bookings.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="9" style="text-align:center;">No bookings available.</td>';
            bookingHistoryContainer.appendChild(row);
            return;
        }

        bookings.forEach(booking => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${booking.bookingId || "N/A"}</td>
                <td>${booking.customerId || "N/A"}</td>
                <td>${booking.rentalCarId || "N/A"}</td>
                <td>${booking.bookingAmount || "N/A"}</td>
                <td>${booking.availableFrom || "N/A"}</td>
                <td>${booking.availableTo || "N/A"}</td>
                <td>${booking.rentalDateFrom || "N/A"}</td>
                <td>${booking.halfPayment || "N/A"}</td>
                <td>${booking.paymentStatus || "N/A"}</td>
            `;
            bookingHistoryContainer.appendChild(row);
        });
    }

    // Initialize the dashboard by fetching data
    function initializeDashboard() {
        // Fetch and display user data
        fetchUserData().then(userData => {
            if (userData) {
                displayUserName(userData);
                populateUserDetails(userData);
            }
        });

        // Fetch and display bookings
        fetchBookings().then(bookings => {
            renderBookings(bookings);
        });
    }

    // Call the function to initialize the dashboard
    initializeDashboard();

    // Logout Functionality
    logoutButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Clear any session-related data from server if needed
        // Example: await fetch('/api/logout') for server-side logout

        // Redirect to the Landing Page
        window.location.href = '../Landing_Page/index.html';
    });
});
