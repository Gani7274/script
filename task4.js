//task1//
let age = 25; 

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 & age <= 19) {
    console.log("Teenager");
} else if (age >= 20 & age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}



//task2//
let oldSalary = 25000;
let hikePercentage = 0;

if (oldSalary < 20000) {
    hikePercentage = 0.20; 
} else if (oldSalary >= 20000 && oldSalary <= 50000) {
    hikePercentage = 0.10; 
} else if (oldSalary > 50000) {
    hikePercentage = 0.05; 
}

let hikeAmount = oldSalary * hikePercentage;
let newSalary = oldSalary + hikeAmount;

console.log("Old Salary : " + oldSalary);
console.log("New Salary : " + newSalary);



//task3//
let units = 150;
let totalBill = 0;

if (units <= 100) {
    totalBill = units * 5;
} else if (units <= 200) {
    totalBill = units * 7;
} else {
    totalBill = units * 10;
}

console.log("Total Bill: ₹" + totalBill);




//task4//
let balance = 10000;
let withdrawalAmount = 3500;

if (withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Funds");
}



//task5//
let username = "admin";
let password = "12345";

if (username === "admin" & password === "12345") {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");
}



//task6//
let rechargeAmount = 349;

if (rechargeAmount >= 499) {
    console.log("Netflix Offer");
} else if (rechargeAmount >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}



//task7//
let signalColor = "Yellow";

switch (signalColor.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Color");
}



//task8//
let totalWorkingDays = 200;
let presentDays = 160;

let attendancePercentage = (presentDays / totalWorkingDays) * 100;

if (attendancePercentage >= 75) {
    console.log("Attendance: " + attendancePercentage + "% - Eligible");
} else {
    console.log("Attendance: " + attendancePercentage + "% - Not Eligible");
}



//task9//
let ticketPrice = 500;
let numberOfTickets = 3;

let totalAmount = ticketPrice * numberOfTickets;
let gst = totalAmount * 0.05;
let finalAmount = totalAmount + gst;

console.log("Total Amount : ₹" + totalAmount);
console.log("GST 5%       : ₹" + gst);
console.log("Final Amount : ₹" + finalAmount);



//task10//
let foodCost = 2500;
let discount = 0;

if (foodCost > 2000) {
    discount = foodCost * 0.10;
}

let finalBill = foodCost - discount;
console.log("Final Bill: ₹" + finalBill);



//task11//
let candidateAge = 20;
let candidateHeight = 158;
let candidateWeight = 60;

if (candidateAge >= 18) {
    if (candidateHeight >= 160) {
        if (candidateWeight >= 55) {
            console.log("Selected for Police Recruitment!");
        } else {
            console.log("Rejected: Weight is below 55kg");
        }
    } else {
        console.log("Rejected: Height is below 160cm");
    }
} else {
    console.log("Rejected: Age is below 18");
}



//task12//
let m1 = 85, m2 = 92, m3 = 78, m4 = 88, m5 = 90;

let totalMarks = m1 + m2 + m3 + m4 + m5;
let percentage = (totalMarks / 500) * 100;

let grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Total: " + totalMarks + ", Percentage: " + percentage + "%, Grade: " + grade);



//task13//
let checkTime = 15; 

if (checkTime >= 6 & checkTime < 14) {
    console.log("Morning Shift");
} else if (checkTime >= 14 & checkTime < 22) {
    console.log("Afternoon Shift");
} else if ((checkTime >= 22 & checkTime <= 24) || (checkTime >= 0 & checkTime < 6)) {
    console.log("Night Shift");
} else {
    console.log("Invalid Time Value");
}



//task14//
let loanAge = 25;
let loanSalary = 30000;
let loanExperience = 3;

if (loanAge >= 21 & loanSalary >= 25000 & loanExperience >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


//task15//
let cabDistance = 8;
let cabFare = 0;

if (cabDistance <= 5) {
    cabFare = cabDistance * 20;
} else {
    cabFare = (5 * 20) + ((cabDistance - 5) * 15);
}

console.log("Total Fare: ₹" + cabFare);



//task16//
let tableNumber = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


//task17//
let passwordLength = 8;

if (passwordLength < 6) {
    console.log("Weak");
} else if (passwordLength >= 6 & passwordLength <= 10) {
    console.log("Medium");
} else {
    console.log("Strong");
}


//task18//
let empExperience = 4;
let empSalary = 40000;
let bonusPercent = 0;

if (empExperience >= 0 & empExperience <= 2) {
    bonusPercent = 0.05;
} else if (empExperience >= 3 && empExperience <= 5) {
    bonusPercent = 0.10;
} else if (empExperience >= 6) {
    bonusPercent = 0.20;
}

let finalBonus = empSalary * bonusPercent;
console.log("Bonus Amount: ₹" + finalBonus);



//task19//
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}
console.log("Happy New Year");



//task20//
let isDegreeCompleted = true;
let communicationStyle = "Good";
let technicalScore = 75;

if (isDegreeCompleted) {
    if (communicationStyle = "Good") {
        if (technicalScore >= 70) {
            console.log("Congratulations! You are selected.");
        } else {
            console.log("Rejected: Technical score is below 70");
        }
    } else {
        console.log("Rejected: Communication skill is not Good");
    }
} else {
    console.log("Rejected: Degree is incomplete");
}