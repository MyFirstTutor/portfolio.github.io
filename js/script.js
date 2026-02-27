"use strict";

// 1. FinTech Logic: Smart Meter
const calcBill = () => {
    const units = document.getElementById("units").value;
    const out = document.getElementById("bill-out");
    const rate = 7;

    // Bound Check
    if (units < 1 || units > 5000) {
        out.textContent = "Error: Enter units between 1 and 5000.";
        return;
    }

    // Calculation in Parentheses
    const total = (units * rate);
    out.textContent = "Estimated Bill: ₹" + total;
};

// 2. EdTech Logic: Attendance
const markAtt = () => {
    const roll = document.getElementById("roll").value;
    const out = document.getElementById("att-out");

    // Bound Check
    if (roll < 101 || roll > 199) {
        out.textContent = "Error: Invalid Roll Number.";
        return;
    }

    out.textContent = "Success: Roll " + roll + " logged.";
};

// 3. Secured Form Validation
const validateForm = () => {
    const name = document.getElementById("client_name").value;
    const budget = document.getElementById("budget").value;
    const msg = document.getElementById("form-msg");

    if (name.length < 3 || budget < 5000) {
        msg.textContent = "Error: Please provide valid details.";
        return;
    }

    msg.textContent = "Proposal Sent Successfully!";
};
