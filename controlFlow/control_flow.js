let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);


let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);


let role = "Employee";
let Dietary_Service_Auth;
let One_On_One_Auth

switch(role){
    case "Employee":
        Dietary_Service_Auth = true;
        One_On_One_Auth = false;
        break;
    case "Enrolled Member":
        Dietary_Service_Auth = true;
        One_On_One_Auth = true;
        break;
    case "Non-Subscriber":
        Dietary_Service_Auth = false;
        One_On_One_Auth = false;
        break;
}
console.log("Dietary Services are " +(Dietary_Service_Auth ? "Avalible" : "Not Avalible"));
console.log("One on One dietician services are " + (One_On_One_Auth ? "Avalible" : "Not Avalible"));
