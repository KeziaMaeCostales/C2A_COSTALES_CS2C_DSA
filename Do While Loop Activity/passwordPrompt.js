// Hardcoded correct password
const correctPassword = "correctPassword";
let enteredPassword;

// Use a do-while loop to keep asking for the password until it matches the correct one
do {
    enteredPassword = ("Enter your password:"); // Prompt for the password

    if (enteredPassword !== correctPassword) {
        console.log("Incorrect, try again."); // Inform the user if the password is incorrect
    }
} while (enteredPassword !== correctPassword); // Continue until the correct password is entered

// Log a success message when the correct password is entered
console.log("Access granted.");
