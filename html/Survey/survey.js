function submitForm() {
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;

    var gender = [];
    if (document.getElementById("male").checked) {
        gender.push("Male");
    }
    if (document.getElementById("female").checked) {
        gender.push("Female");
    }

    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    // Validate form fields
    if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobileNumber) {
        alert("All fields are required!");
        return;
    }

    // Display values in a popup
    var message = "Submitted Values:\n\n";
    message += "First Name: " + firstName + "\n";
    message += "Last Name: " + lastName + "\n";
    message += "Date of Birth: " + dob + "\n";
    message += "Country: " + country + "\n";
    message += "Gender: " + gender.join(", ") + "\n";
        message += "Profession: " + profession + "\n";
        message += "Email: " + email + "\n";
        message += "Mobile Number: " + mobileNumber + "\n";
    
    alert(message);

    // Reset the form
    resetForm();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}