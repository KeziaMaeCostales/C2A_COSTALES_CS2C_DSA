// This program will assign a grade based on the user's score.

// Set a score directly for testing
let score = 85; // Change this value to test different scores

// Check if the score is a valid number
if (isNaN(score)) {
    console.log("Please enter a valid number.");
} else {
    // Variable to hold the grade
    let grade;

    // Check the score and assign a grade using if-else statements
    if (score >= 90) {
        grade = "Excellent";
    } else if (score >= 80) {
        grade = "Good";
    } else if (score >= 70) {
        grade = "Fair";
    } else {
        grade = "Needs Improvement";
    }

    // Log the corresponding grade to the console
    console.log("Your grade is: " + grade);
}

