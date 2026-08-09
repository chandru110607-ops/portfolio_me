let count = 0;


// Display counter
function updateCount() {

    document.getElementById("count").innerHTML = count;

}


// Increase counter
function increaseCount() {

    count++;

    updateCount();

}


// Decrease counter
function decreaseCount() {

    count--;

    updateCount();

}


// Reset counter
function resetCount() {

    count = 0;

    updateCount();

}


// Save counter
function saveCount() {

    localStorage.setItem("count", count);

    alert("Counter Saved!");

}


// Load counter
function loadCount() {

    let saved = localStorage.getItem("count");

    if (saved !== null) {

        count = Number(saved);

    }

    updateCount();

}


// Initial display
updateCount();