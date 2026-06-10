//task1
let students = [
    { id: 1, name: "Amit", department: "CSE", mark: 92 },
    { id: 2, name: "Sneha", department: "ECE", mark: 78 },
    { id: 3, name: "Vijay", department: "EEE", mark: 45 },
    { id: 4, name: "Pooja", department: "IT", mark: 83 },
    { id: 5, name: "Rahul", department: "MECH", mark: 62 }
];

console.log("Student Names");
for (let student of students) {
    console.log(student.name);
}

let totalMarks = 0;
console.log("Students Scored Above 80");
for (let student of students) {
    totalMarks += student.mark;
    if (student.mark > 80) {
        console.log(student.name + " (" + student.mark + ")");
    }
}
console.log("Total Marks of all students: " + totalMarks);


function getGrade(mark) {
    if (mark >= 90) return "A";
    else if (mark >= 75) return "B";
    else if (mark >= 50) return "C";
    else return "Fail";
}

function printStudentDetails(studentArray) {
    console.log("Complete Student Report ");
    for (let student of studentArray) {
        let grade = getGrade(student.mark);
        console.log("ID: " + student.id + " | Name: " + student.name + " | Dept: " + student.department + " | Mark: " + student.mark + " | Grade: " + grade);
    }
}

printStudentDetails(students);





//task2
let employees = [
    { id: 101, name: "Rajesh", salary: 45000, department: "DEV" },
    { id: 102, name: "Meena", salary: 28000, department: "HR" },
    { id: 103, name: "Arun", department: "QA", salary: 32000 }
];


console.log("Employee Names");
for (let emp of employees) {
    console.log(emp.name);
}

let totalExpense = 0;
console.log("Employees earning above ₹30,000");
for (let emp of employees) {
    totalExpense += emp.salary;
    if (emp.salary > 30000) {
        console.log(emp.name + " - ₹" + emp.salary);
    }
}
console.log("Total Company Salary Expense: ₹" + totalExpense);

function getDeptDescription(dept) {
    switch (dept) {
        case "DEV":return "Software Development Engineering Division";
        case "HR":return "Human Resources and Talent Acquisition";
        case "QA":return "Quality Assurance and Testing Operations";
    }
}

function generatePayrollReport(employeeList, callback) {
    console.log("Payroll Processing Activity");
    for (let emp of employeeList) {
        let deptInfo = getDeptDescription(emp.department);
        callback(emp, deptInfo);
    }
}

generatePayrollReport(employees, function(emp, deptDescription) {
    console.log("Payslip generated for: " + emp.name + " | Dept Focus: " + deptDescription + " | Net Disbursed: ₹" + emp.salary);
});



//task3
let menu = [
    { id: 1, foodName: "Paneer Butter Masala", price: 280, category: "North Indian" },
    { id: 2, foodName: "Masala Dosa", price: 90, category: "South Indian" },
    { id: 3, foodName: "Veg Burger", price: 150, category: "Fast Food" },
    { id: 4, foodName: "Chicken Biryani", price: 320, category: "North Indian" }
];

//Display food names
console.log("Menu Items");
for (let item of menu) {
    console.log(item.foodName);
}

let totalMenuValue = 0;
console.log("Premium Dishes (Above ₹200)");
for (let item of menu) {
    totalMenuValue += item.price;
    if (item.price > 200) {
        console.log(item.foodName + "-₹" + item.price);
    }
}
console.log("Total Menu Asset Value: ₹" + totalMenuValue);

function getCategoryDescription(cat) {
    switch (cat) {
        case "North Indian":return "traditional curries and gravies";
        case "South Indian":return "Light";
        case "Fast Food":return "Quick service ";
    }
}

function processOrder(foodItem, quantity, callback) {
    let subtotal = foodItem.price * quantity;
    let description = getCategoryDescription(foodItem.category);
    callback(foodItem.foodName, subtotal, description);
}

processOrder(menu[0], 2, function(name, total, desc) {
    console.log("[Order Confirmed] " + name + " x 2 units prepared.");
    console.log("Category Description: " + desc);
    console.log("Total Payable Bill: ₹" + total);
});




//task4
let movies = [
    { movieName: "Pushpa", ticketPrice: 200, availableSeats: 50, language: "Telugu" },
    { movieName: "Vikram", ticketPrice: 180, availableSeats: 0, language: "Tamil" },
    { movieName: "julye", ticketPrice: 150, availableSeats: 12, language: "malayalam" }
];

console.log("--- Movie Catalog");
let totalSeats = 0;
for (let movie of movies) {
    console.log(movie.movieName + " (" + movie.language + ")");
    totalSeats += movie.availableSeats;
}
console.log("Total Available Seats Across All Screens: " + totalSeats);

function getLanguageDescription(lang) {
    switch (lang) {
        case "Telugu":return "Tollywood Regional Cinematic Release";
        case "Tamil":return "Kollywood Regional Cinematic Release";
        case "malayalam":return "Mollywood National Mainstream Release";
    }
}

function bookTicket(movie, requestedSeats, callback) {
    console.log("--- Checking Seat Matrix for " + movie.movieName);
    if (movie.availableSeats >= requestedSeats) {
        movie.availableSeats -= requestedSeats; 
        let description = getLanguageDescription(movie.language);
        callback(true, movie, requestedSeats, description);
    } else {
        callback(false, movie, requestedSeats, "");
    }
}

// Booking possible
bookTicket(movies[0], 3, function(success, movie, seats, langDesc) {
    if (success) {
        console.log("Booking Confirmed! Seats Secured: " + seats);
        console.log("Industry Classification: " + langDesc);
        console.log("Total Paid: ₹" + (movie.ticketPrice * seats));
    } else {
        console.log("Booking Failed: Insufficient seats available.");
    }
});

// Booking failed due to 0 seats
bookTicket(movies[1], 1, function(success, movie, seats, langDesc) {
    if (!success) {
        console.log("Booking Status: Denied. " + movie.movieName + " is completely Housefull!");
    }
});



//task5
let patients = [
    { patientId: 501, patientName: "Suresh Kumar", age: 65, disease: "Diabetes" },
    { patientId: 502, patientName: "Anjali Sharma", age: 34, disease: "Migraine" },
    { patientId: 503, patientName: "Harish Rao", age: 72, disease: "Hypertension" }
];

console.log("--- Patient Directory");
for (let p of patients) {
    console.log(p.patientName);
}
console.log("Total Patients: " + patients.length);

console.log("--- Senior Citizens (Age > 60)");
for (let p of patients) {
    if (p.age > 60) {
        console.log(p.patientName + " | Age: " + p.age);
    }
}

function getMedicalDepartment(disease) {
    switch (disease) {
        case "Diabetes":return "Endocrinology General Ward";
        case "Hypertension":return "Cardiology Screening Center";
        case "Migraine":return "Neurology OPD Outpatient Block";
    }
}

function scheduleAppointment(patient, callback) {
    let dept = getMedicalDepartment(patient.disease);
    callback(patient, dept);
}

scheduleAppointment(patients[0], function(patient, dept) {
    console.log("[Token Generated] Appointment Fixed for ID #" + patient.patientId + " (" + patient.patientName + ")");
    console.log("Routing Destination: Please report  " + dept);
});



//task6
let library = [
    { bookId: 20, bookName: "Fire", author: "James", price: 350, category: "Biography" },
    { bookId: 22, bookName: "Java", author: "Rock", price: 950, category: "Technical" },
    { bookId: 23, bookName: "Bad", author: "Walter", price: 299, category: "Fiction" }
];

console.log("--- Library Asset Log ");
let totalLibraryValue = 0;
for (let book of library) {
    console.log('"' + book.bookName + '" by ' + book.author);
    totalLibraryValue += book.price;
}
console.log("Total Catalog Worth: ₹" + totalLibraryValue);

console.log("--- Premium Editions (Above ₹500)");
for (let book of library) {
    if (book.price > 500) {
        console.log(book.bookName + " - ₹" + book.price);
    }
}

function getCategoryShelf(category) {
    switch (category) {
        case "Biography":return " Inspirational History Stack";
        case "Technical":return " Engineering & Computing Reference Stack";
        case "Fiction":return "Global Literature Narrative Stack";
    }
}

function issueBook(id) {
    let foundBook = null;
    for (let book of library) {
        if (book.bookId = id) {
            foundBook = book;
            break;
    }
}
    if (foundBook !== null) {
        let shelfLocation = getCategoryShelf(foundBook.category);
        console.log("--- Dispatching");
        console.log("Successfully Issued: " + foundBook.bookName);
        console.log("Pickup Coordinates: Locate at " + shelfLocation);
    } else {
        console.log("Transaction Revoked: Not Found.");
    }
}

issueBook(2);



//task7
let inventory = [
    { productId: 1, productName: "Wireless Mouse", price: 800, stock: 45 },
    { productId: 2, productName: "Mechanical Keyboard", price: 2500, stock: 8 },
    { productId: 3, productName: "HDMI Cable", price: 350, stock: 3 },
    { productId: 4, productName: "Gaming Monitor", price: 15000, stock: 12 }
];

let totalInventoryVal = 0;
console.log("--- Active Stock Level Metrics");
for (let prod of inventory) {
    let totalStockValue = prod.price * prod.stock;
    totalInventoryVal += totalStockValue;
    

    let statusFlag = prod.stock > 10 ? "Optimal Stock" : "Restock Needed";
    console.log(prod.productName + " | Units Available: " + prod.stock + " | Operational Alert: " + statusFlag);
}
console.log(" Available: ₹" + totalInventoryVal);

console.log("--- Warning (Stock < 10)");
for (let prod of inventory) {
    if (prod.stock < 10) {
        console.log("ALERT: " + prod.productName + " running Only " + prod.stock + " left.");
    }
}

function compileInventoryReport(itemsList, reportCallback) {
    console.log("---WAREHOUSE");
    for (let item of itemsList) {
        reportCallback(item);
    }
}

compileInventoryReport(inventory, function(productItem) {
    console.log(productItem.productId + " -> Item label: " + productItem.productName + " | Liquid Asset Value: ₹" + (productItem.price * productItem.stock));
});


//task8
let applicants = [
    { name: "Charan", age: 19, percentage: 85, department: "CSE" },
    { name: "Divya", age: 17, percentage: 78, department: "ECE" },
    { name: "Karthik", age: 20, percentage: 55, department: "EEE" },
    { name: "Priya", age: 18, percentage: 92, department: "IT" }
];

console.log("---Profile");
for (let candidate of applicants) {
    console.log(candidate.name);
}

function parseDepartmentName(code) {
    switch (code) {
        case "CSE":return "Department of Computer Science & Engineering";
        case "ECE":return "Department of Electronics & Communication Engineering";
        case "EEE":return "Department of Electrical & Electronics Engineering";
        case "IT":return "Department of Information Technology";
    }
}

function processAdmissions(candidateList, admissionCallback) {
    let totalEligibleCount = 0;
    console.log("--- Eligibility");
    
    for (let applicant of candidateList) {
        if (applicant.age >= 18 && applicant.percentage >= 60) {
            totalEligibleCount++;
            let fullDeptName = parseDepartmentName(applicant.department);
            admissionCallback(true, applicant, fullDeptName);
        } else {
            admissionCallback(false, applicant, "");
        }
    }
    console.log("Cleared for Enrollment: " + totalEligibleCount);
}

processAdmissions(applicants, function(isApproved, candidate, mappedDept) {
    if (isApproved) {
        console.log("ADMITTED: " + candidate.name + " (" + candidate.percentage + "%) approved for enrollment  " + mappedDept);
    } else {
        console.log("REJECTED: " + candidate.name + " failed.");
    }
});



//task9
let passengers = [
    { passengerId: 1, name: "Ganesh", seatNumber: "A1", ticketPrice: 450, busType: "Sleeper" },
    { passengerId: 2, name: "Kavitha", seatNumber: "B3", ticketPrice: 300, busType: "Seater" },
    { passengerId: 3, name: "Indu", seatNumber: "A2", ticketPrice: 450, busType: "Sleeper" }
];

console.log("--- Passenger Manifest");
let aggregateCollection = 0;
for (let pass of passengers) {
    console.log("Passenger: " + pass.name + " Seat No: " + pass.seatNumber);
    aggregateCollection += pass.ticketPrice;
}
console.log("Ticket Collection: ₹" + aggregateCollection);

function identifyCoachCategory(type) {
    switch (type) {
        case "Sleeper":return "Premium Tier";
        case "Seater":return "Push-Back Coach Class";
    }
}

function issueE_Ticket(passengerItem, ticketCallback) {
    let coachInfo = identifyCoachCategory(passengerItem.busType);
    ticketCallback(passengerItem, coachInfo);
}

console.log("--- Boarding Pass");
issueE_Ticket(passengers[0], function(passenger, coachDescription) {
    console.log("E-Ticket Issued | ID: " + passenger.passengerId + " | Name: " + passenger.name);
    console.log("Assigned Zone: " + coachDescription + " | Seat: " + passenger.seatNumber);
});


//task10
let mobileShowroomStock = [
    { brand: "Apple", model: "iPhone 17", price: 79000, stock: 5 },
    { brand: "Samsung", model: "s25", price: 74000, stock: 8 },
    { brand: "OnePlus", model: "Nord CE 4", price: 24000, stock: 15 },
    { brand: "Redmi", model: "13C", price: 9500, stock: 25 }
];

console.log("--- Showroom ");
let macroInventoryValuation = 0;
for (let phone of mobileShowroomStock) {
    console.log(phone.brand + " " + phone.model);
    macroInventoryValuation += (phone.price * phone.stock);
}
console.log("Evaluation Value: ₹" + macroInventoryValuation);

console.log("---Lineup (Price > ₹20,000)");
for (let phone of mobileShowroomStock) {
    if (phone.price > 20000) {
        console.log(phone.brand + " " + phone.model + " | Retail MSRP: ₹" + phone.price);
    }
}

function parseBrandClassification(brandName) {
    switch (brandName) {
        case "Apple":   return "Premium Tier iOS Ecosystem";
        case "Samsung": return "Premium Android Global Core";
        case "OnePlus": return "Mid-Tier Performance";
    }
}

function launchShowroomAuditReport(stockBuffer, auditCallback) {
    console.log("----MID-QUARTER");
    for (let device of stockBuffer) {
        let marketingClassification = parseBrandClassification(device.brand);
        auditCallback(device, marketingClassification);
    }
}

launchShowroomAuditReport(mobileShowroomStock, function(deviceObj, classificationTag) {
    console.log("Model Track: " + deviceObj.brand + " " + deviceObj.model + " |Bracket: " + classificationTag + " | Volume Holding: " + deviceObj.stock + " units");
});