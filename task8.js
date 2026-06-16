//task1
const employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];

const highEarners = employees.filter(emp => emp.salary > 40000);
console.log("High Earners:", highEarners);

const firstVipEmployee = employees.find(emp => emp.salary > 60000);
console.log("VIP Employee:", firstVipEmployee);

const totalExpense = employees.reduce((accumulator, current) => accumulator + current.salary, 0);
console.log(`Total Salary: ₹${totalExpense.toLocaleString('en-IN')}`);


const employeeNames = employees.map(emp => emp.name);
console.log("Employee Directory:", employeeNames);


//taask2
function processAdmission(studentProfile) {
    const { name, age, percentage } = studentProfile;

    if (age < 18 && percentage < 60) {
        return { name, status: "Rejected", reason: "Minimum age 18+ qualification marks (60)." };
    } else if (age < 18) {
        return { name, status: "Rejected", reason: "Authorized 18." };
    } else if (percentage < 60) {
        return { name, status: "Rejected", reason: "The mandatory 60 mark." };
    }

    return { name, status: "Approved", message: "Congratulations!" };
}

const candidate = { name: "Gowtham", age: 19, percentage: 74 };
console.log(processAdmission(candidate));


//task3
const activeCart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

const totalBill = activeCart.reduce((total, lineItem) => total + (lineItem.price * lineItem.qty), 0);
console.log(`Final: ₹${totalBill.toLocaleString('en-IN')}`);


const premiumProduct = activeCart.reduce((maxItem, currentItem) => currentItem.price > maxItem.price ? currentItem : maxItem, activeCart[0]);
console.log(`Valued Product: ${premiumProduct.product} (Base Price: ₹${premiumProduct.price})`);

console.log("Titles:");
activeCart.forEach(item => console.log(`Item SKU: ${item.product}`));

//task4
function enforceTrafficSystem(signalColor, crosswalkViolated = false) {
    let actionableInstruction = "";
    let fineLevied = 0;

    switch (signalColor.trim().toLowerCase()) {
        case "red":
            actionableInstruction = "vehicle position";
            if (crosswalkViolated) fineLevied = 2000; 
            break;
        case "yellow":
            actionableInstruction = "stop";
            if (crosswalkViolated) fineLevied = 500;
            break;
        case "green":
            actionableInstruction = "Maintain active.";
            break;
        default:
            actionableInstruction = "Drive withcare.";
            fineLevied = 0;
    }

    console.log(`[Signal Status: ${signalColor.toUpperCase()}]`);
    console.log(`Instruction: ${actionableInstruction}`);
    if (fineLevied > 0) {
        console.log(`Penalties: ₹${fineLevied}`);
    }
}

enforceTrafficSystem("red", true);

//task5
const studentBody = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

const PASS_BENCHMARK = 50;


const passedList = studentBody.filter(student => student.mark >= PASS_BENCHMARK);
console.log("Passing Registry:", passedList);


const failedList = studentBody.filter(student => student.mark < PASS_BENCHMARK);
console.log("Performance Registry:", failedList);

const categorizedGrades = studentBody.map(student => {
    let tier = "F";
    if (student.mark >= 90) tier = "A+";
    else if (student.mark >= 75) tier = "A";
    else if (student.mark >= 50) tier = "B";

    return {
        name: student.name,
        score: student.mark,
        gradeTier: tier
    };
});

console.log("Grade Sheets:", categorizedGrades);

//task6
function placeOrder(customerName, ...orderedItems) {
    console.log('--Amazon Fresh Order');
    console.log('Customer Profile: ${customerName}');
    
    if (orderedItems.length === 0) {
        console.log("Manifest structure");
        return;
    }

    console.log("Routing Units");
    orderedItems.forEach((sku, index) => console.log(` [Index Item ${index + 1}]: ${sku}`));
    
    console.log(`Total Item Distribution: ${orderedItems.length}`);
}

placeOrder("Vikram Malhotra", "Gourmet Sourdough Bread", "Organic Avocados", "Cold Brew Pods", "Salted Butter");

//task7
const createSecureWallet = (startingCapital = 10000) => {
    let systemBalance = startingCapital;

    return {
        deposit(amount) {
            if (amount <= 0) return "positive value.";
            systemBalance += amount;
            return systemBalance;
        },
        withdraw(amount) {
            if (amount <= 0) return "positive value.";
            if (amount > systemBalance) return "limits";
            systemBalance -= amount;
            return systemBalance;
        },
        checkBalance() {
            return systemBalance;
        }
    };
};

const myAccount = createSecureWallet(10000);
console.log(`Vault Ledger: ₹${myAccount.checkBalance()}`);
console.log(`Registry Balance: ₹${myAccount.deposit(5000)}`);
console.log(`Execution Remaining: ₹${myAccount.withdraw(3500)}`);


//task8
const maxTheaterCapacity = 10;
let bookedSeatsRegistry = ["A1", "A2", "B4", "C3"];

function attemptSeatReservation(seatId) {
    const normalizedId = seatId.trim().toUpperCase();

    const isAlreadyBooked = bookedSeatsRegistry.includes(normalizedId);

    if (!isAlreadyBooked) {
        bookedSeatsRegistry.push(normalizedId);
        console.log(`Reservation Successful[${normalizedId}] successfully locked.`);
        return true;
    } else {
        console.log(`Seat token [${normalizedId}] is unavailable.`);
        return false;
    }
}

function printTheaterManifest() {
    console.log("--- Booking ");
    console.log(`Allocation: ${bookedSeatsRegistry.length} / ${maxTheaterCapacity}`);
    console.log(`Nodes List: ${bookedSeatsRegistry.join(" | ")}`);
}

attemptSeatReservation("B4");
attemptSeatReservation("C1"); 
printTheaterManifest();


//task9
function validateAccountSecurityMatrix(username, password, email) {
    const reportsSummaryLog = [];

    if (username.includes(" ")) {
        reportsSummaryLog.push("house blank");
    }

    if (password.length < 8) {
        reportsSummaryLog.push("Password entry");
    }

    if (email.includes("@")) {
        reportsSummaryLog.push("Provided electronic");
    }

    const validationPassed = reportsSummaryLog.length === 0;
    
    return {
        isValidated: validationPassed,
        systemErrorsMap: validationPassed ? ["Validation pass"] : reportsSummaryLog
    };
}

const report = validateAccountSecurityMatrix("Sandeep Kumar", "pwd123", "sandeep.com");
console.log("Validation Analysis", report);

//task10
async function pullEnterpriseInventoryMetadata() {
    const TARGET_ENDPOINT = "https://fakestoreapi.com/products";
    
    try {
        console.log("pipeline request server...");
        const responseDataStream = await fetch(TARGET_ENDPOINT);
        
        if (!responseDataStream.ok) throw new Error(` Channel Code ${responseDataStream.status}`);
        
        const productsList = await responseDataStream.json();
        console.log(`Data payload[${productsList.length}] total\n`);

        let countAboveThresh = 0;
        const EXCHANGE_CONSTANT = 80; 

        console.log("Output");
        productsList.forEach((productItem) => {
            const calculatedInrValue = productItem.price * EXCHANGE_CONSTANT;
            console.log(`Id [${productItem.id}]: ${productItem.title.substring(0, 45)}... | Final Value: ₹${calculatedInrValue.toFixed(2)}`);
            
            if (calculatedInrValue > 1000) {
                countAboveThresh++;
            }
        });

        console.log("---Dashboard");
        console.log(`Rows: ${productsList.length}`);
        console.log(`Total Target Range): ${countAboveThresh}`);

    } catch (criticalSystemExecutionFault) {
        console.error("System Lifecycle", criticalSystemExecutionFault.message);
    }
}

pullEnterpriseInventoryMetadata();

//task11
function extractBirthdateChronologyMetrics(isoDateStringStringInput) {
    const parsedTargetTimelineRef = new Date(isoDateStringStringInput);

    if (isNaN(parsedTargetTimelineRef.getTime())) {
        console.error("syntax wrong:");
        return;
    }

    const weekdaysRosterMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const extractionResultDetails = {
        calendarDateDayNum: parsedTargetTimelineRef.getDate(),
        calendarMonthIndexNum: parsedTargetTimelineRef.getMonth() + 1,
        calendarYearCenturyNum: parsedTargetTimelineRef.getFullYear(),
        weekdaySystemStringLabel: weekdaysRosterMap[parsedTargetTimelineRef.getDay()]
    };

    console.log(`---Profil: ${isoDateStringStringInput}`);
    console.log(`Day: ${extractionResultDetails.calendarDateDayNum}`);
    console.log(`Month: ${extractionResultDetails.calendarMonthIndexNum}`);
    console.log(`Year: ${extractionResultDetails.calendarYearCenturyNum}`);
    console.log(`Weekday: ${extractionResultDetails.weekdaySystemStringLabel}`);
    
    return extractionResultDetails;
}

extractBirthdateChronologyMetrics("1998-11-24");


//task12
function evaluateSubscriptionProfileBenefits(chosenTierPlanSelectionString) {
    const sanitizedTierLabel = chosenTierPlanSelectionString.trim().toLowerCase();

    const systemResolutionResponseText = 
        sanitizedTierLabel === "mobile" ? "Mobile tier" :
        sanitizedTierLabel === "basic" ? "Basic System" :
        sanitizedTierLabel === "standard" ? "Standard Corporate " :
        sanitizedTierLabel === "premium" ? "Premium Ultra Execution" :
        " Selected subscription";

    console.log(`Requested Membership : ${chosenTierPlanSelectionString.toUpperCase()}`);
    console.log(`Verified Authorization: \n ${systemResolutionResponseText}`);
}

evaluateSubscriptionProfileBenefits("premium");
evaluateSubscriptionProfileBenefits("free tier");

//task13
const clinicalPatientRosterRegistryDatabase = [
    { patientId: 101, patientName: "Akhil", age: 34, diseaseTriageLabel: "Viral Respiratory Congestion", criticalStatusSeverityConditionFlag: true },
    { patientId: 102, patientName: "dhamu", age: 62, diseaseTriageLabel: "Knee Rehab Evaluation", criticalStatusSeverityConditionFlag: false },
    { patientId: 103, patientName: "buchher", age: 45, diseaseTriageLabel: "Advanced Myocardial Infarction", criticalStatusSeverityConditionFlag: true }
];

const activeEmergencyCodeRedList = clinicalPatientRosterRegistryDatabase.filter(patientRowObj => patientRowObj.criticalStatusSeverityConditionFlag === true);
console.log("Emergency Ward", activeEmergencyCodeRedList);


const targetSearchPatientId = 102;
const identifiedPatientRecordNode = clinicalPatientRosterRegistryDatabase.find(patientRowObj => patientRowObj.patientId === targetSearchPatientId);
console.log(`Pass  [ID: ${targetSearchPatientId}]:`, identifiedPatientRecordNode);


const overallActivePatientCensusCount = clinicalPatientRosterRegistryDatabase.length;
console.log(`Operational Hospital ${overallActivePatientCensusCount}`);


//task14
const localWarehouseStockRoster = [
    { skuId: "W1-A", labelTitleName: "Premium Mouse", volumeQuantityUnitsCount: 45 },
    { skuId: "W1-B", labelTitleName: "Desktop ", volumeQuantityUnitsCount: 12 }
];

const outboundLogisticsInTransitStockRoster = [
    { skuId: "ipl", labelTitleName: "Keyboard", volumeQuantityUnitsCount: 28 }
];

const centralizedGlobalInventoryMasterDatabase = [...localWarehouseStockRoster, ...outboundLogisticsInTransitStockRoster];
console.log("Unified Global", centralizedGlobalInventoryMasterDatabase);

const trackingAugmentSkuNodeItem = { skuId: "www", labelTitleName: "USB Multi-Port", volumeQuantityUnitsCount: 85 };
const extendedAugmentedCentralizedGlobalInventoryDatabase = [...centralizedGlobalInventoryMasterDatabase, trackingAugmentSkuNodeItem];

console.log("--- Structural Analysis");
extendedAugmentedCentralizedGlobalInventoryDatabase.forEach((inventoryRecordUnitItemNode) => {

    const { skuId, labelTitleName, volumeQuantityUnitsCount } = inventoryRecordUnitItemNode;
    console.log(` Core Identifier ${skuId}  Map details -- Title Label: ${labelTitleName} |Count Balance: ${volumeQuantityUnitsCount} Units.`);
});

//task15

let activeGroupMembersDirectoryList = ["Arjun", "Deepika", "Kabir"];
console.log("Chatroom Communication Channel", activeGroupMembersDirectoryList);

activeGroupMembersDirectoryList.push("Priyanka");
console.log("Member Addition", activeGroupMembersDirectoryList);


let evictedTrailingParticipantNode = activeGroupMembersDirectoryList.pop();
console.log(`Removed Member: [${evictedTrailingParticipantNode}]. Updated Directory Log:`, activeGroupMembersDirectoryList);

let evictedLeadingParticipantNode = activeGroupMembersDirectoryList.shift();
console.log(`Post Front-Facing Primary [${evictedLeadingParticipantNode}]. Updated Directory Log:`, activeGroupMembersDirectoryList);


activeGroupMembersDirectoryList.unshift("Siddharth");
console.log("Primary Leading", activeGroupMembersDirectoryList);

const targetIndexInsertionPointSlotCoordinate = 1;
const deleteCountOverwritesOverrideCeilingMetricVal = 0;
const targetNewParticipantStringLabelPayload = "Meera";

activeGroupMembersDirectoryList.splice(
    targetIndexInsertionPointSlotCoordinate, 
    deleteCountOverwritesOverrideCeilingMetricVal, 
    targetNewParticipantStringLabelPayload
);

console.log(`--- Final Solidified Chatroom (Index Injection ${targetIndexInsertionPointSlotCoordinate} Action Operations) `);
console.log("Final", activeGroupMembersDirectoryList);
console.log(`Confirmed Membership ${activeGroupMembersDirectoryList.length}`);