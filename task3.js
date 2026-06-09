//task1//

let basicSalary = 25000;

let hra = basicSalary * 0.20;
let bonus = basicSalary * 0.10;
let totalSalaryBeforeTax = basicSalary + hra + bonus;
let tax = totalSalaryBeforeTax * 0.05;
let finalSalary = totalSalaryBeforeTax - tax;

console.log("Basic Salary : " + basicSalary);
console.log("HRA : " + hra);
console.log("Bonus : " + bonus);
console.log("Tax : " + tax);
console.log("Final Salary : " + finalSalary);



//task2//

let marks = 85;

if (marks >= 90 & marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 80 & marks < 90) {
    console.log("Grade: A");
} else if (marks >= 70 & marks < 80) {
    console.log("Grade: B");
} else if (marks >= 60 & marks < 60) {
    console.log("Grade: C");
} else if (marks >= 0 & marks < 60) {
    console.log("Grade: Fail");
} else {
    console.log("Invalid Marks Entered");
}



//task3//

let inputUsername = "admin";
let inputPassword = "wrongPassword";

let correctUsername = "admin";
let correctPassword = "12345";

if (inputUsername === correctUsername) {
    if (inputPassword === correctPassword) {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}



//task4//

let balance = 5000;
let withdrawalAmount = 2000; 

if (withdrawalAmount > balance) {
    console.log("Insufficient Balance");
} else {
    balance -= withdrawalAmount;
    console.log("Withdrawal Success");
}
console.log("Remaining Balance: " + balance);




//task5//

let purchaseAmount = 6500; 
let discountPercentage = 0;

if (purchaseAmount >= 10000) {
    discountPercentage = 0.20;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 0.10;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 0.05;
} else {
    discountPercentage = 0;
}

let discountAmount = purchaseAmount * discountPercentage;
let finalAmount = purchaseAmount - discountAmount;

console.log("Original Amount : " + purchaseAmount);
console.log("Discount : " + discountAmount);
console.log("Final Amount : " + finalAmount);



//task6//

let hasHelmet = "No"; 
let hasLicense = "No"; 

if (hasHelmet === "No" && hasLicense === "No") {
    console.log("Fine: ₹3000 (Both Missing)");
} else if (hasHelmet === "No") {
    console.log("Fine: ₹1000 (Helmet Missing)");
} else if (hasLicense === "No") {
    console.log("Fine: ₹2000 (License Missing)");
} else {
    console.log("No Fine. Safe journey!");
}



//task7//

let attendance = ["P", "P", "A", "P", "A", "P", "P"];
let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        presentDays++;
    } else if (attendance[i] === "A") {
        absentDays++;
    }
}

console.log("Present Days : " + presentDays);
console.log("Absent Days : " + absentDays);



//task8//

let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}



//task9//

let distance = 12; 
let totalFare = 0;

if (distance <= 5) {
    totalFare = distance * 20;
} else if (distance <= 10) {
    totalFare = (5 * 20) + ((distance - 5) * 15);
} else {
    totalFare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("Total Fare : ₹" + totalFare);



//task10//

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

console.log("--- Employee List ---");
for (let i = 0; i < employees.length; i++) {
    console.log("ID: " + employees[i].id + ", Name: " + employees[i].name + ", Salary: " + employees[i].salary);
}


let highestSalaryEmployee = employees[0];
let lowestSalaryEmployee = employees[0];
let totalExpenditure = 0;

for (let i = 0; i < employees.length; i++) {
    let currentEmp = employees[i];
    
    totalExpenditure += currentEmp.salary;

    if (currentEmp.salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = currentEmp;
    }

    if (currentEmp.salary < lowestSalaryEmployee.salary) {
        lowestSalaryEmployee = currentEmp;
    }
}

console.log("Highest Salary Employee : " + highestSalaryEmployee.name + " (₹" + highestSalaryEmployee.salary + ")");
console.log("Lowest Salary Employee  : " + lowestSalaryEmployee.name + " (₹" + lowestSalaryEmployee.salary + ")");
console.log("Total Employees Count   : " + employees.length);
console.log("Total Salary Expenditure: ₹" + totalExpenditure);




