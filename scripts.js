document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".close-button");
    const loginInfo = document.querySelector(".login-info");
    const loginForm = document.querySelector(".login-form");
    const registerLink = document.getElementById("registerLink");

    closeButton.addEventListener("click", () => {
        loginInfo.style.display = "none";
    });

    function encryption(password) {
        return btoa(password); // Base64 encoding for demonstration; use a stronger method for production
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
        const password = encryption(document.getElementById("password").value); // Encrypt password for security

        // Validate that NIC and password fields are not empty
        if (!nic || !password) {
            document.getElementById('demo1').innerHTML = "NIC or Password cannot be empty.";
            return;
        }

        try {
            // Send the login data to the server using fetch
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerNicnumber: nic,
                    password: password
                })
            });

            // Parse the response JSON
            const data = await response.json();

            if (data.success) {
                const customer = data.customer; // Customer data from server

                document.getElementById('demo1').innerHTML = "Login successful! Redirecting...";
                document.getElementById('logincontinue').style.display = "none";
                document.getElementById('deleteX').style.display = "none";

                // Delay for 100 milliseconds before redirecting
                setTimeout(() => {
                    const loggedUser = { "customerNicnumber": customer.customerNicnumber, "password": customer.password };
                    localStorage.setItem('loggedUser', JSON.stringify(loggedUser));

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
                }, 100); // Adjust the delay time as needed

            } else {
                document.getElementById('demo1').innerHTML = "Incorrect NIC or password.";
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
