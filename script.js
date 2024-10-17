document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".close-button");
    const loginInfo = document.querySelector(".login-info");
    const loginForm = document.querySelector(".login-form");
    const registerLink = document.getElementById("registerLink");

    closeButton.addEventListener("click", () => {
        loginInfo.style.display = "none";
    });

    function encryption(password) {
        return btoa(password); // Base64 encoding; you should use a stronger encryption method for production
    }

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const carId = getQueryParam('carid');

    // Update register link if carId is present
    if (carId) {
        registerLink.href = `../Customer_Register/Register.html?carid=${carId}`;
    }

    // Login form submission event listener
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nic = document.getElementById("nic").value.trim();
        const password = encryption(document.getElementById("password").value.trim()); // Encrypt password

        // Validate that NIC and password fields are not empty
        if (!nic || !password) {
            document.getElementById('demo1').innerHTML = "NIC or Password cannot be empty.";
            return;
        }

        try {
            // Send login request to the server
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nic, password })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Successful login
                const customer = data.customer; // Assume server returns customer details

                document.getElementById('demo1').innerHTML = "Login successful! Redirecting...";
                document.getElementById('logincontinue').style.display = "none";
                document.getElementById('deleteX').style.display = "none";

                // Delay for 100 milliseconds before redirecting
                setTimeout(() => {
                    // Optionally store the logged-in user details in localStorage if needed
                    localStorage.setItem('loggedUser', JSON.stringify({
                        customerNicnumber: customer.customerNicnumber,
                        customerId: customer.customerId
                    }));

                    // Redirect based on verification status and carId presence
                    if (!carId && customer.profileStatus === "Verified") {
                        window.location.href = `../Landing_Page/index.html`;
                    } else {
                        if (customer.profileStatus === "Verified") {
                            window.location.href = `../Verified_Customer/Verified_Customer.html?carid=${carId}&customerid=${customer.customerId}`;
                        } else {
                            window.location.href = `../Profile_Details/profileupdateform.html?carid=${carId}&customerid=${customer.customerId}`;
                        }
                    }
                }, 100); // Adjust the time as needed
            } else {
                // Login failed
                document.getElementById('demo1').innerHTML = data.message || "Incorrect NIC or password.";
                document.getElementById('logincontinue').style.display = "none";
                document.getElementById('deleteX').style.display = "none";
            }
        } catch (error) {
            console.error("Login error:", error);
            document.getElementById('demo1').innerHTML = "An error occurred during login. Please try again.";
        }

        // Clear the form fields after submission
        event.target.reset();
    });
});
