// Function to generate a random number between 1 and 9
function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

// Function to simulate the spinning effect and stop one by one
function spinSlots() {
    const slot1 = document.getElementById("slot1");
    const slot2 = document.getElementById("slot2");
    const slot3 = document.getElementById("slot3");
    const result = document.getElementById("result");

    result.textContent = "Spinning...";
    result.style.color = "black";

    let spins = 10; // Number of quick changes before stopping
    let slot1Value, slot2Value, slot3Value;

    // Function to animate a slot stopping
    function spinSlot(slot, delay, callback) {
        let count = 0;
        let interval = setInterval(() => {
            slot.textContent = getRandomNumber(); // Change the number rapidly
            count++;
            if (count >= spins) {
                clearInterval(interval);
                let finalNumber = getRandomNumber();
                slot.textContent = finalNumber;
                callback(finalNumber); // Call the callback with the final number
            }
        }, 100); // Speed of change
    }

    // Spin each slot one after the other
    spinSlot(slot1, 0, (num) => {
        slot1Value = num;
        spinSlot(slot2, 500, (num) => {
            slot2Value = num;
            spinSlot(slot3, 1000, (num) => {
                slot3Value = num;
                
                // Check if the player won
                if (slot1Value === 7 && slot2Value === 7 && slot3Value === 7) {
                    result.textContent = "You win! Three 7's!";
                    result.style.color = "green";
                } else {
                    result.textContent = "Try again!";
                    result.style.color = "red";
                }
            });
        });
    });
}

// Attach event listener to spin button
document.getElementById("spinButton").addEventListener("click", spinSlots);