document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.modal .close');
    const userTableBody = document.getElementById('user-requests');
    const messageArea = document.getElementById('message-area');
    let userRequests = [];

    // Fetch user data from server instead of localStorage
    function fetchUserRequests() {
        fetch('/api/users') // Use your server API endpoint here
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                userRequests = data; // Store the fetched user data
                populateUserTable(); // Populate the user table
            })
            .catch(error => console.error('Error fetching user data:', error));
    }

    // Populate the user table with fetched data
    function populateUserTable() {
        userTableBody.innerHTML = ''; // Clear previous data before populating
        userRequests.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.customerId}</td>
                <td>${user.customerName}</td>
                <td>${user.customerPhone}</td>
                <td>${user.licenseNumber}</td>
                <td>${user.profileStatus}</td>
                <td>
                    <button class="view-btn" data-user-id="${user.id}">View</button>
                    <button class="verify-btn" data-user-id="${user.id}">Verify</button>
                    <button class="reject-btn" data-user-id="${user.id}">Reject</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    // Fetch and display user details in the modal
    function openModal(userId) {
        const user = userRequests.find(u => String(u.id) === userId); // Compare as strings
        if (!user) {
            console.error(`No user found with ID ${userId}`);
            return;
        }

        document.getElementById('name').textContent = user.customerName;
        document.getElementById('email').textContent = user.customerEmail;
        document.getElementById('phone').textContent = user.customerPhone;
        document.getElementById('customerNicnumber').textContent = user.customerNicnumber;
        document.getElementById('address').textContent = user.customerAddress;
        document.getElementById('license-number').textContent = user.licenseNumber;
        document.getElementById('proof-type').textContent = user.proofType;
        document.getElementById('proof-number').textContent = user.SelectedIDProofNumber;
        document.getElementById('postal-code').textContent = user.postalCode;
        document.getElementById('license-front').src = user.licenseFrontImage;
        document.getElementById('license-back').src = user.licenseBackImage;

        modal.style.display = 'block';
    }

    // Close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Update user status using Fetch API
    function updateUserStatus(userId, status) {
        fetch(`/api/users/${userId}/status`, { // Replace with your API endpoint
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ profileStatus: status }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update user status');
            }
            return response.json();
        })
        .then(updatedUser => {
            const userIndex = userRequests.findIndex(u => String(u.id) === userId);
            if (userIndex !== -1) {
                userRequests[userIndex] = updatedUser; // Update the local user data
                populateUserTable(); // Refresh the table with updated data

                messageArea.textContent = `User ${updatedUser.customerName} has been ${status.toLowerCase()}.`;
                messageArea.style.color = status === 'Verified' ? 'green' : 'red';
            }
        })
        .catch(error => console.error('Error updating user status:', error));
    }

    // Handle button clicks within the user table
    userTableBody.addEventListener('click', (e) => {
        const userId = e.target.getAttribute('data-user-id');
        if (!userId) {
            console.error('No user ID found on clicked element.');
            return;
        }

        console.log(`Button clicked for user ID: ${userId}`);

        if (e.target.classList.contains('view-btn')) {
            console.log(`Opening modal for user ID: ${userId}`);
            openModal(userId);
        } else if (e.target.classList.contains('verify-btn')) {
            console.log(`Verifying user with ID: ${userId}`);
            updateUserStatus(userId, 'Verified');
        } else if (e.target.classList.contains('reject-btn')) {
            console.log(`Rejecting user with ID: ${userId}`);
            updateUserStatus(userId, 'Rejected');
        }
    });

    // Event listeners for modal close
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Fetch user data from the server on page load
    fetchUserRequests();
});
