// Notifications toggle functionality
document.getElementById('notification-button').addEventListener('click', function() {
    const dropdown = document.getElementById('notification-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Optional: Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.notification-button')) {
        const dropdown = document.getElementById('notification-dropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
};

// Fetch notifications from localStorage
let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

// Function to update notifications based on formDataArray
function updateNotifications() {
    const dropdown = document.getElementById('notification-dropdown');
    dropdown.innerHTML = ''; // Clear existing notifications

    // If there are no entries, show a message
    if (formDataArray.length === 0) {
        dropdown.innerHTML = '<ul><li>No new notifications</li></ul>';
        document.getElementById('notification-count').textContent = ''; // Clear count
    } else {
        // Populate notifications with the latest form entries
        const notificationList = document.createElement('ul');
        formDataArray.forEach((data) => {
            const listItem = document.createElement('li');
            // Display all the data: name, phone, email, message
            listItem.textContent = `New message from ${data.name}: ${data.message}, Phone: ${data.phone}, Email: ${data.email}`;
            notificationList.appendChild(listItem);
        });
        dropdown.appendChild(notificationList);
        document.getElementById('notification-count').textContent = formDataArray.length; // Update count
    }
}

// Call updateNotifications when the document loads
document.addEventListener('DOMContentLoaded', updateNotifications);

// Example form submission handling to save notifications
const contactForm = document.getElementById('contactForm'); // Assuming this is the ID of your contact form
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission initially for validation

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create an object to store form data
        const formData = {
            name: name,
            phone: phone,
            email: email,
            message: message
        };

        // Add the new form data to the array
        formDataArray.push(formData);

        // Save the updated array back to localStorage
        localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

        // Update notifications after saving the form data
        updateNotifications();

        // Optionally show success message
        alert("Form data has been saved!");
    });
}

// Pie Chart
const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Economy', 'Standard', 'Luxury'],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: ['#3498db', '#2ecc71', '#e74c3c']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Bar Chart
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue ($)',
            data: [10000, 12000, 15000, 18000, 20000, 25000],
            backgroundColor: '#3498db'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Fetch car data from localStorage
const cars = JSON.parse(localStorage.getItem('cars')) || [];
const uniqueBrands = [...new Set(cars.map(car => car.brand))];

// Display total number of unique car brands
document.getElementById('totalBrands').textContent = uniqueBrands.length;

// Fetch user booking data from localStorage
const bookingDatas = JSON.parse(localStorage.getItem('bookingData')) || [];
// Get the booking data from localStorage
const bookings = JSON.parse(localStorage.getItem('bookingData')) || [];

// Count the number of bookings with status 'Approved'
const approvedCount = bookings.filter(booking => booking.statusText === 'Approved').length;

// Set the text content of the element with ID 'todaybooking'
document.getElementById('todaybooking').textContent = approvedCount;



// Fetch customer data from localStorage
const customers = JSON.parse(localStorage.getItem('customers')) || [];

// Display total number of customers
document.getElementById('todayusers').textContent = customers.length;

const carDetails = JSON.parse(localStorage.getItem('car')) || [];

document.getElementById('TotalCars').textContent = carDetails.length;




// Logout functionality
document.getElementById('logout-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    window.location.href = 'index.html'; // Redirect to login page
});
