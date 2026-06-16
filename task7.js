// //task1
// const signalColor = "Yellow"; 

// switch (signalColor.toLowerCase()) {
//     case "red":
//         console.log("Stop!");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("Go! Move safely");
//         break;
//     default:
//         console.log("Stay!");
// }


// //task2
// const totalEmployees = 30;

// for (let i = 1; i <= totalEmployees; i++) {
//     console.log('Employee Present');
// }


// //task3
// let accountBalance = 10000;
// const withdrawalAmount = 500;

// while (accountBalance > 0) {
//     accountBalance -= withdrawalAmount;
//     console.log('Withdrew ₹${withdrawalAmount}.Balance: ₹${accountBalance}');
// }

// //task4
// const applicant = {
//     name: "Aman",
//     age: 19,
//     percentage: 65,
//     hasPassedEntrance: true
// };

// if (applicant.age >= 18) {
//     if (applicant.percentage >= 70) {
//         if (applicant.hasPassedEntrance) {
//             console.log(`Admission Approved for ${applicant.name}!`);
//         } else {
//             console.log('Admission Rejected:{applicant.name} failed exam.');
//         }
//     } else {
//         console.log('Admission Rejected:{applicant.name} score {applicant.percentage} below 70% ');
//     }
// } else {
//     console.log('Admission Rejected: {applicant.name} minimum age requires 18.');
// }

// //task5
// function confirmDelivery(customerName, foodItem, deliveryAddress) {
//     console.log('--- Delivery Confirmation');
//     console.log('Thank you,{kiran}! Your order{onion pizza}confirmed.');
//     console.log('dispatched shortly to: {17 miles street,2-229,California}');
// }

// confirmDelivery("Kiran", "Onion Pizza", "17 miles street,2-229,California");


// //task6
// // function calculateSalary(basePay, allowances) {
// //     return basePay + allowances;
// // }

// // function calculateBonus(grossSalary) {
// //     const bonusPercentage = 0.10;
// //     return grossSalary * bonusPercentage;
// // }

// // const salary = calculateSalary(45000, 12000);
// // const bonus = calculateBonus(salary);

// // console.log('Gross Salary:{salary}');
// // console.log('Bonus: {bonus}');
// // console.log('total Compensation: {salary + bonus}');



// //task7
// function applyDiscount(cartAmount, callback) {
//     console.log('Processing cart total:{cartAmount}');
//     const discount = cartAmount > 2000 ? cartAmount * 0.15 : 0; 
//     const finalTotal = cartAmount - discount;
    
//     callback(discount, finalTotal);
// }

// function generateInvoice(discount, totalPayable) {
//     console.log('Invoice Generated:');
//     console.log('Total Discount: {discount}');
//     console.log('Final Amount Payable:{totalPayable}');
// }

// applyDiscount(2500, generateInvoice);


// //task8
// function* offerGenerator() {
//     yield "10% OFF";
//     yield "20% OFF";
//     yield "Free Delivery";
//     yield "Buy 1 Get 1";
// }

// const promoPipeline = offerGenerator();

// console.log(promoPipeline.next().value); 
// console.log(promoPipeline.next().value); 
// console.log(promoPipeline.next().value); 
// console.log(promoPipeline.next().value); 


// //task9
// const scienceStudents = ["Amit", "Priya", "Rahul"];
// const commerceStudents = ["Neha", "Vikram", "Sneha"];


// const studentDatabase = [...scienceStudents, ...commerceStudents];

// console.log("Student Database:", studentDatabase);


// //task10
// function calculateTotalMarks(studentName, ...marks) {
//     const total = marks.reduce((sum, currentMark) => sum + currentMark, 0);
//     console.log('Student: {studentName} | Total Score: {total}');
//     return total;
// }

// calculateTotalMarks("Arjun", 85, 90, 78, 92, 88);


// //task11
// const employeeProfile = {
//     empName: "Kavitha Raj",
//     department: "Engineering",
//     salary: 85000,
//     experience: "4 Years"
// };

// const { empName, department, salary, experience } = employeeProfile;

// console.log(`Name: ${empName}`);
// console.log(`Dept: ${department}`);
// console.log(`Salary: ₹${salary.toLocaleString('en-IN')}`);


// //task12
// const products = [
//     { name: "Camera", price: 3500, category: "Electronics" },
//     { name: "Phone", price: 22000, category: "Electronics" },
//     { name: "Leather Belt", price: 1200, category: "Accessories" },
//     { name: "Keyboard", price: 6500, category: "Electronics" }
// ];

// const premiumProducts = products.filter(product => product.price > 5000);

// console.log("Premium Products (> ₹5000):", premiumProducts);


// //task13
// const onlinePurchases = [
//     { customer: "Deepak", amount: 12000 },
//     { customer: "Anjali", amount: 45000 },
//     { customer: "Siddharth", amount: 82000 },
//     { customer: "Meera", amount: 95000 }
// ];

// const highValueVIP = onlinePurchases.find(order => order.amount > 50000);

// console.log("Premium Customer:", highValueVIP);


// //task14
// const monthlyExpenses = [15000, 42000, 8500, 12000, 64000];

// const totalExpenses = monthlyExpenses.reduce((accumulator, current) => accumulator + current, 0);

// console.log(`TotalExpenses: ₹${totalExpenses.toLocaleString('en-IN')}`);


// //task15
// const lobbyPlayers = [
//     { name: "GamerX", age: 21 },
//     { name: "ShadowFiend", age: 19 },
//     { name: "AlphaWolf", age: 24 }
// ];

// const isLobbyLegallyCompliant = lobbyPlayers.every(player => player.age > 18);

// console.log(`tournament players above 18? ${isLobbyLegallyCompliant ? "Yes" : "No"}`);


// //task16
// const jobApplicants = [
//     { name: "Suresh", skills: ["Java", "SQL"] },
//     { name: "Kiran", skills: ["HTML", "CSS", "React"] },
//     { name: "Divya", skills: ["Python", "Django"] }
// ];

// const matchFound = jobApplicants.some(applicant => applicant.skills.includes("React"));

// console.log(`One candidate requirement? ${matchFound ? "Yes" : "No"}`);


// //task17
// function validateMobileNumber(phoneNumber) {
//     const isValidLength = phoneNumber.length === 10;
    
//     const startsCorrectly = phoneNumber.startsWith("6") || 
//     phoneNumber.startsWith("7") || 
//     phoneNumber.startsWith("8") || 
//     phoneNumber.startsWith("9");

//     if (isValidLength && startsCorrectly) {
//         console.log(`Phone registration : ${phoneNumber}`);
//         return true;
//     } else {
//         console.log(`Invalid Number: ${phoneNumber}. Must contain 10 digits`);
//         return false;
//     }
// }

// validateMobileNumber("9876543210"); 
// validateMobileNumber("5551234567"); 


// //task18
// const rawCourseTitle = "Learn JavaScript Complete Course";

// const urlSlug = rawCourseTitle.toLowerCase().split(" ").join("-");

// console.log('Learn- JavaScript -Complete -Course');

// //task19
// const workspaceStaff = [
//     { name: "Harish", salary: 35000 },
//     { name: "Pooja", salary: 72000 },
//     { name: "John", salary: 50000 }
// ];

// const ascendingSalary = [...workspaceStaff].sort((a, b) => a.salary - b.salary);
// console.log("Lowest to Highest:", ascendingSalary);

// const descendingSalary = [...workspaceStaff].sort((a, b) => b.salary - a.salary);
// console.log("Highest to Lowest:", descendingSalary);


// //task20
// const currentMovies = ["Dead pool", "Wolvirine", "Avatar"];

// const finalizedTickets = currentMovies.map((movieTitle, index) => {
//     return {
//         bookingId: 'TICK-${index + 101}',
//         movie: movieTitle,
//         timestamp: new Date().toLocaleTimeString()
//     };
// });

// console.log("Active Ticket:", finalizedTickets);