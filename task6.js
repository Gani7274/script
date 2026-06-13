//task1
const employee = {
    name: "Amit",
    salary: 50000,
    experience: 6
};

let bonusPercentage = 0;

if (employee.experience >= 5) {
    bonusPercentage = 0.20;
} else if (employee.experience >= 2) {
    bonusPercentage = 0.10;
} else {
    bonusPercentage = 0.05;
}

const bonusAmount = employee.salary * bonusPercentage;
const finalSalary = employee.salary + bonusAmount;

console.log(`Employee: ${employee.name}`);
const formattedFinalSalary = finalSalary.toLocaleString('en-IN');
console.log(`Final Salary (with bonus): ₹${formattedFinalSalary}`);




//task2
const student = {
    name: "Sneha",
    age: 18,
    percentage: 75
};

if (student.age >= 17) {
    if (student.percentage >= 60) {
        console.log(`Admission Approved for ${student.name}.`);
    } else {
        console.log(`Admission Rejected for ${student.name}: Percentage is below 60%.`);
    }
} else {
    console.log(`Admission Rejected for ${student.name}: Age is below 17.`);
}



//task3
const selection = 3;

switch (selection) {
    case 1:
        console.log("Order Confirmed: Pizza");
        break;
    case 2:
        console.log("Order Confirmed: Burger");
        break;
    case 3:
        console.log("Order Confirmed: Shawarma");
        break;
    case 4:
        console.log("Order Confirmed: Fried Rice");
        break;
    default:
        console.log("Invalid.Choose a number between 1 and 4.");
}

//task4
const students = ["Rahul", "Priya", "Vikram", "Anjali", "Rohan", "Siddharth", "Kiran", "Meera", "Arjun", "Aditi"];

let totalStudents = 0;

console.log("Student List:");
for (const student of students) {
    console.log(`- ${student}`);
    totalStudents++;
}

console.log(`Total Students Tracked: ${totalStudents}`);



//task5
let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

console.log("Products in Cart:");
cart.forEach(item => console.log(`- ${item.product}: ₹${item.price}`));

const totalValue = cart.reduce((sum, item) => sum + item.price, 0);
console.log(`Total Cart Value: ₹${totalValue}`);

const mostExpensive = cart.reduce((max, item) => item.price > max.price ? item : max, cart[0]);
console.log(`Most Expensive Item: ${mostExpensive.product} (₹${mostExpensive.price})`);



//task6
let balance = 10000;

function checkBalance() {
    console.log(`Current Balance: ₹${balance}`);
}

function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Successfully deposited: ₹${amount}`);
    } else {
        console.log("Invalid deposit amount.");
    }
    checkBalance();
}

function withdraw(amount) {
    if (amount > balance) {
        console.log("Declined: Insufficient Balance.");
    } else if (amount <= 0) {
        console.log("Invalid withdrawal amount.");
    } else {
        balance -= amount;
        console.log(`Successfully withdrew: ₹${amount}`);
    }
    checkBalance();
}

deposit(2500);
withdraw(4000);


//task7
const customerAge = 25;
let ticketPrice = 0;

if (customerAge < 5) {
    ticketPrice = 0;
} else if (customerAge >= 5 && customerAge <= 18) {
    ticketPrice = 100;
} else if (customerAge > 18 && customerAge <= 60) {
    ticketPrice = 200;
} else {
    ticketPrice = 120;
}

if (ticketPrice === 0) {
    console.log("Your Ticket is Free!");
} else {
    console.log(`Ticket Booked! Please pay: ₹${ticketPrice}`);
}


//task8
const originalAmount = 6500;
let discountPercentage = 0;

if (originalAmount > 5000) {
    discountPercentage = 20;
} else if (originalAmount > 3000) {
    discountPercentage = 10;
} else if (originalAmount > 1000) {
    discountPercentage = 5;
}

const discountAmount = originalAmount * (discountPercentage / 100);
const finalAmount = originalAmount - discountAmount;

console.log(`Original Amount: ₹${originalAmount}`);
console.log(`Discount (${discountPercentage}%): -₹${discountAmount}`);
console.log(`Final Amount to Pay: ₹${finalAmount}`);


//task9
let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

inventory.push("Wheat", "Butter");
inventory.shift();
inventory.pop();
const hasMilk = inventory.includes("Milk");

console.log("Final Inventory:", inventory);
console.log(`Does Milk exist in inventory? ${hasMilk ? "Yes" : "No"}`);


//task9
const patient = {
    patientName: "John Doe",
    age: 45,
    disease: "Fever",
    doctor: "Dr. Smith"
};

console.log("--- Loop Output");
for (const key in patient) {
    console.log(`${key}: ${patient[key]}`);
}

console.log("--- Destructured Output");
const { patientName, age, disease, doctor } = patient;
console.log(`Name: ${patientName}`);
console.log(`Age: ${age}`);
console.log(`Condition: ${disease}`);
console.log(`Professional doctor: ${doctor}`);


//task11
function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");

    callback();
}

placeOrder(sendSMS);


//task12
function* cashbackOfferGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

const offerTracker = cashbackOfferGenerator();

console.log(offerTracker.next().value);
console.log(offerTracker.next().value);
console.log(offerTracker.next().value);
console.log(offerTracker.next().value);


//task13
const database = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];


console.log("Employee Names:");
database.forEach(emp => console.log(`- ${emp.name}`));

const totalExpense = database.reduce((acc, emp) => acc + emp.salary, 0);
console.log(`\nTotal Salary Expense: ₹${totalExpense}`);

const highestEarner = database.reduce((max, emp) => emp.salary > max.salary ? emp : max, database[0]);
console.log(`Highest Salary: ${highestEarner.name} (₹${highestEarner.salary})`);


//task14
let availableSeats = 50;

function bookSeats(numberOfSeats) {
    console.log(`Attempting to book ${numberOfSeats} seat(s)...`);
    
    if (numberOfSeats <= 0) {
        console.log("Invalid number of seats request.");
        return;
    }

    if (numberOfSeats <= availableSeats) {
        availableSeats -= numberOfSeats;
        console.log(`Booking Confirmed! ${numberOfSeats} seats reserved.`);
        console.log(`Remaining Seats : ${availableSeats}`);
    } else {
        console.log(`Booking Rejected! Only ${availableSeats} seats available.`);
    }
}

bookSeats(5);
bookSeats(47); 


//task15//
const priceList = {
    Mobile: 20000,
    Laptop: 55000,
    Headphone: 3000,
    Smartwatch: 5000
};

const customerSelection = ["Mobile", "Smartwatch"];

console.log("--- Invoice Details");
console.log("Selected Products:");

let rawTotal = 0;
customerSelection.forEach(item => {
    if (priceList[item]) {
        console.log(`- ${item}: ₹${priceList[item]}`);
        rawTotal += priceList[item];
    }
});

const gstAmount = rawTotal * 0.18;
const finalBill = rawTotal + gstAmount;

console.log(`Total Amount: ₹${rawTotal}`);
console.log(`GST 18%: ₹${gstAmount}`);
console.log(`Final Bill: ₹${finalBill}`);