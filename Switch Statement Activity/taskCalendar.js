// Prompt the user to enter a day of the week
let day = prompt("Enter a day of the week:");

// Initialize a variable to hold the task
let task;

// Use a switch statement to map each day to a specific task
switch (day) {
    case "Monday":
        task = "Finish your assignments.";
        break;
    case "Tuesday":
        task = "Attend your meetings.";
        break;
    case "Wednesday":
        task = "Work on your project.";
        break;
    case "Thursday":
        task = "Study for your exam.";
        break;
    case "Friday":
        task = "Prepare for the weekend.";
        break;
    case "Saturday":
        task = "Relax and enjoy your free time.";
        break;
    case "Sunday":
        task = "Plan for the upcoming week.";
        break;
    default:
        task = "Invalid day! Please enter a valid day of the week.";
}

// Log the task for that day to the console
console.log("Your task for " + day + " is: " + task);
