// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

const bookingSection = document.querySelector(".booking-section");
const methodsBox = document.querySelector(".booking-methods");
const proceduresBox = document.querySelector(".booking-procedures");
const procedureText = document.getElementById("procedureText");
const successMsg = document.getElementById("successMsg");

 
// SHOW BOOKING SECTION  

function openBooking(place) {
    bookingSection.style.display = "block";
    methodsBox.style.display = "block";
    proceduresBox.style.display = "none";
    document.getElementById("selectedAttraction").textContent = "Attraction: " + place;
}


// CHOOSE PAYMENT METHOD  
function showMethods(place) {
    openBooking(place);
}

function showProcedures(method) {
    proceduresBox.style.display = "block";
    document.getElementById("selectedMethod").textContent = "Payment Method: " + method;

    const instructions = {
        "Bank": "Enter your bank slip number or scanned receipt:",
        "Credit Card": "Enter your card reference or transaction ID:",
        "Mobile Money": "Enter Mobile Money transaction code:",
        "PayPal": "Enter your PayPal transaction ID:"
    };

    procedureText.textContent = instructions[method] || "";
}

//  SUBMIT BOOKING FORM  
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    successMsg.textContent = "✔ Booking submitted successfully! You will receive confirmation soon.";
    this.reset();
});