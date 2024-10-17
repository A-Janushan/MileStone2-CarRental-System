document.addEventListener("DOMContentLoaded", () => {
    const initialCars = [
        {
            id: 'Car_01',
            brand: 'Nissan',
            bodyType: 'Coupe',
            model: 'GT-R',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 4,
            price: 300,
            image: 'NissanGT-R.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-15'
        },
        {
            id: 'Car_02',
            brand: 'Lamborghini',
            bodyType: 'Coupe',
            model: 'Revuelto',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 3,
            price: 650,
            image: 'LamborghiniRevuelto.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-22'
        },
        {
            id: 'Car_03',
            brand: 'Toyota',
            bodyType: 'Coupe',
            model: 'GR Supra',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 5,
            price: 200,
            image: 'car1.png',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-20'
        },
        {
            id: 'Car_04',
            brand: 'Lamborghini',
            bodyType: 'Coupe',
            model: 'Revuelto',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 3,
            price: 650,
            image: 'LamborghiniRevuelto.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-22'
        },
        {
            id: 'Car_05',
            brand: 'Toyota',
            bodyType: 'Coupe',
            model: 'Corolla',
            transmission: 'Manual',
            fuel: 'Petrol',
            seats: 5,
            price: 200,
            image: 'ToyotaCorolla.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-10'
        },
        {
            id: 'Car_06',
            brand: 'Nissan',
            bodyType: 'Coupe',
            model: 'Altima',
            transmission: 'Automatic',
            fuel: 'Diesel',
            seats: 5,
            price: 300,
            image: 'NissanAltima.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-28'
        },
        {
            id: 'Car_07',
            brand: 'Lamborghini',
            bodyType: 'Coupe',
            model: 'Aventador',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 2,
            price: 700,
            image: 'LamborghiniAventador.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-23'
        },
        {
            id: 'Car_08',
            brand: 'Toyota',
            bodyType: 'Coupe',
            model: 'Camry',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 5,
            price: 200,
            image: 'ToyotaCamry.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-13'
        },
        {
            id: 'Car_09',
            brand: 'Nissan',
            bodyType: 'Coupe',
            model: '370Z',
            transmission: 'Manual',
            fuel: 'Petrol',
            seats: 2,
            price: 300,
            image: 'Nissan370Z.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-17'
        },
        {
            id: 'Car_10',
            brand: 'Lamborghini',
            bodyType: 'SUV',
            model: 'Huracan',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 2,
            price: 700,
            image: 'LamborghiniHuracan.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-30'
        },
        {
            id: 'Car_11',
            brand: 'Toyota',
            bodyType: 'SUV',
            model: 'GR Supra',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 5,
            price: 200,
            image: 'ToyotaGR Supra.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-20'
        },
        {
            id: 'Car_12',
            brand: 'Nissan',
            bodyType: 'SUV',
            model: 'GT-R',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 4,
            price: 300,
            image: 'NissanGT-R.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-15'
        },
        {
            id: 'Car_13',
            brand: 'Audi',
            bodyType: 'SUV',
            model: 'A8',
            transmission: 'Automatic',
            fuel: 'Diesel',
            seats: 5,
            price: 200,
            image: 'AudiA8.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-10'
        },
        {
            id: 'Car_14',
            brand: 'Audi',
            bodyType: 'SUV',
            model: 'Sedans',
            transmission: 'Automatic',
            fuel: 'Diesel',
            seats: 4,
            price: 400,
            image: 'AudiSedans.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-10'
        },
        {
            id: 'Car_15',
            brand: 'BMW',
            bodyType: 'SUV',
            model: 'X5',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 5,
            price: 400,
            image: 'BMWX5.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-25'
        },
        {
            id: 'Car_16',
            brand: 'Mercedes-Benz',
            bodyType: 'SUV',
            model: 'S-Class',
            transmission: 'Automatic',
            fuel: 'Diesel',
            seats: 5,
            price: 500,
            image: 'Mercedes-BenzS-CLASS.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-18'
        },
        {
            id: 'Car_17',
            brand: 'Tesla',
            bodyType: 'SUV',
            model: 'Model S',
            transmission: 'Automatic',
            fuel: 'Electric',
            seats: 5,
            price: 300,
            image: 'TeslaModel S.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-30'
        },
        {
            id: 'Car_18',
            brand: 'Ford',
            bodyType: 'SUV',
            model: 'Mustang',
            transmission: 'Manual',
            fuel: 'Petrol',
            seats: 4,
            price: 300,
            image: 'FordMustang.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-15'
        },
        {
            id: 'Car_19',
            brand: 'Toyota',
            bodyType: 'SUV',
            model: 'GR Supra',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 5,
            price: 200,
            image: 'ToyotaGR Supra.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-20'
        },
        {
            id: 'Car_20',
            brand: 'Nissan',
            bodyType: 'Sedan',
            model: 'GT-R',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 4,
            price: 300,
            image: 'NissanGT-R.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-15'
        },
        {
            id: 'Car_21',
            brand: 'Lamborghini',
            bodyType: 'Sedan',
            model: 'Revuelto',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 3,
            price: 650,
            image: 'LamborghiniRevuelto.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-22'
        },
        {
            id: 'Car_22',
            brand: 'Audi',
            bodyType: 'Sedan',
            model: 'A8',
            transmission: 'Automatic',
            fuel: 'Diesel',
            seats: 5,
            price: 300,
            image: 'AudiA8.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-10'
        },
        {
            id: 'Car_23',
            brand: 'BMW',
            bodyType: 'Sedan',
            model: 'X5',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 5,
            price: 500,
            image: 'BMWX5.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-30'
        },
        {
            id: 'Car_24',
            brand: 'Mercedes-Benz',
            bodyType: 'Sedan',
            model: 'S-Class',
            transmission: 'Automatic',
            fuel: 'Diesel',
            seats: 5,
            price: 600,
            image: 'Mercedes-BenzS-CLASS.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-20'
        },  {
            id: 'Car_25',
            brand: 'Ferrari',
            bodyType: 'Sedan',
            model: 'Portofino',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 2,
            price: 700,
            image: 'FerrariPortofino.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-25'
        },
        {
            id: 'Car_26',
            brand: 'Tesla',
            bodyType: 'Sedan',
            model: 'Model S',
            transmission: 'Automatic',
            fuel: 'Electric',
            seats: 5,
            price: 400,
            image: 'TeslaModel S.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-30'
        },
        {
            id: 'Car_27',
            brand: 'Rolls-Royce',
            bodyType: 'Sedan',
            model: 'Phantom',
            transmission: 'Automatic',
            fuel: 'Petrol',
            seats: 5,
            price: 1200,
            image: 'Rolls-RoycePhantom.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-20'
        },
        {
            id: 'Car_28',
            brand: 'Jaguar',
            bodyType: 'Sedan',
            model: 'XF',
            transmission: 'Automatic',
            fuel: 'Diesel',
            seats: 5,
            price: 600,
            image:'JaguarXF.jpeg',
            availableFrom: '2024-09-23',
            availableTo: '2024-10-28'
        }
    ];
    
       
   
        const carTableBody = document.querySelector(".car-table tbody");
        const carForm = document.getElementById("carForm");
        const modal = document.getElementById("modal");
        const closeBtn = document.querySelector(".closeBtn");
        const addCarBtn = document.querySelector(".add-car");
        const searchInput = document.getElementById("searchInput");
        
        let cars = [];
        let editingIndex = -1;
    
        // Fetch cars from the backend
        function fetchCars() {
            fetch('/api/cars')
                .then(response => response.json())
                .then(data => {
                    cars = data;
                    renderCars();
                })
                .catch(error => {
                    console.error('Error fetching cars:', error);
                });
        }
    
        // Function to render cars
        function renderCars() {
            carTableBody.innerHTML = "";
            const searchTerm = searchInput.value.toLowerCase();
            const filteredCars = cars.filter(car => 
                car.brand.toLowerCase().includes(searchTerm) ||
                car.bodyType.toLowerCase().includes(searchTerm) ||
                car.model.toLowerCase().includes(searchTerm)
            );
    
            filteredCars.forEach((car, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${car.id}</td>
                    <td>${car.brand}</td>
                    <td>${car.bodyType}</td>
                    <td>${car.model}</td>
                    <td>${car.transmission}</td>
                    <td>${car.fuel}</td>
                    <td>${car.seats}</td>
                    <td>Rs ${car.price}</td>
                    <td><img src="${car.image}" alt="${car.model}" style="width: 100px; height: auto;" /></td>
                    <td>${car.availableFrom}</td>
                    <td>${car.availableTo}</td>
                    <td>
                        <button class="edit-btn" onclick="editCar(${index})"><i class="fa fa-pencil"></i> Edit</button>
                        <button class="delete-btn" onclick="deleteCar(${index})"><i class="fa fa-trash"></i> Delete</button>
                    </td>
                `;
                carTableBody.appendChild(row);
            });
        }
    
        // Function to validate form inputs
        function validateForm() {
            const priceValue = parseFloat(carForm.price.value);
            const seatsValue = parseInt(carForm.seats.value);
    
            if (isNaN(priceValue) || isNaN(seatsValue) || priceValue <= 0 || seatsValue <= 0) {
                alert("Please enter valid numerical values for price and seats.");
                return false;
            }
            return true;
        }
    
        // Form submission handler
        carForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!validateForm()) return;
    
            const newCar = {
                id: editingIndex >= 0 ? cars[editingIndex].id : null,
                brand: carForm.brand.value,
                bodyType: carForm.bodyType.value,
                model: carForm.model.value,
                transmission: carForm.transmission.value,
                fuel: carForm.fuelType.value,
                seats: parseInt(carForm.seats.value),
                price: parseFloat(carForm.price.value),
                image: carForm.image.value,
                availableFrom: carForm.availableFrom.value,
                availableTo: carForm.availableTo.value
            };
    
            // Fetch API to save or update car
            const url = editingIndex >= 0 ? `/api/cars/${cars[editingIndex].id}` : '/api/cars';
            const method = editingIndex >= 0 ? 'PUT' : 'POST';
    
            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCar)
            })
            .then(response => response.json())
            .then(() => {
                fetchCars(); // Refresh car list
                carForm.reset();
                modal.style.display = "none"; // Hide the modal
            })
            .catch(error => {
                console.error('Error saving car:', error);
            });
        });
    
        // Edit car function
        window.editCar = function(index) {
            editingIndex = index;
            const car = cars[index];
            carForm.brand.value = car.brand;
            carForm.bodyType.value = car.bodyType;
            carForm.model.value = car.model;
            carForm.transmission.value = car.transmission;
            carForm.fuelType.value = car.fuel;
            carForm.seats.value = car.seats;
            carForm.price.value = car.price;
            carForm.image.value = car.image;
            carForm.availableFrom.value = car.availableFrom;
            carForm.availableTo.value = car.availableTo;
    
            modal.style.display = "block"; // Display the modal
        };
    
        // Delete car function
        window.deleteCar = function(index) {
            const carId = cars[index].id;
            if (confirm("Are you sure you want to delete this car?")) {
                fetch(`/api/cars/${carId}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(() => {
                    fetchCars(); // Refresh car list after deletion
                })
                .catch(error => {
                    console.error('Error deleting car:', error);
                });
            }
        };
    
        // Close modal on click
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
            carForm.reset();
        });
    
        // Add car button to open modal
        addCarBtn.addEventListener("click", () => {
            carForm.reset();
            editingIndex = -1; // Reset the editing index
            modal.style.display = "block";
        });
    
        // Initial fetching of cars
        fetchCars();
    });
    