// Function to generate a random number between 1 and 9
function spin() {
    return Math.floor(Math.random() * 9) + 1;
}

// Function to handle the spin button click
document.getElementById("spinButton").addEventListener("click", function() {
    // Get random numbers for each slot
    let slot1 = spin();
    let slot2 = spin();
    let slot3 = spin();

    // Display the results on the page
    document.getElementById("slot1").textContent = slot1;
    document.getElementById("slot2").textContent = slot2;
    document.getElementById("slot3").textContent = slot3;

    // Check if the player won
    if (slot1 === 7 && slot2 === 7 && slot3 === 7) {
        document.getElementById("result").textContent = "You win! Three 7's!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = "Try again!";
        document.getElementById("result").style.color = "red";
    }
});