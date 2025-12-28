// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Timer Variables
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let intervalID = null;                          // Interval ID for tracking time
let running = false;                            // Indicates whether the timer is running
let ishidden = false;                           // Indicates whether the UI is hidden

let seconds = 0;                                // Seconds variable
let minutes = 0;                                // Minutes variable 
let hours = 0;                                  // Hours variable
let startTime = 0;                              // Start timestamp for the timer
let elapsedTime = parseInt(localStorage.getItem("elapsedTime")) || 0;   // Previously elapsed time (loaded from localStorage)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Display the current timer value
function renderTime() {
    function pad(n) {
        return String(n).padStart(2, "0");  // Add leading zero for single-digit numbers
    }

    $("#stopwatch").text(`${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`);
}

// Start the timer
function start() {
    if (running) return;    // Do nothing if timer is already running
    running = true;

    startTime = Date.now() - elapsedTime;   // Account for elapsed time if resuming

    intervalID = setInterval(() => {
        elapsedTime = Date.now() - startTime;   // Update elapsed time

        seconds = Math.floor(elapsedTime / 1000) % 60;
        minutes = Math.floor(elapsedTime / 60000) % 60;
        hours = Math.floor(elapsedTime / 3600000);

        localStorage.setItem("elapsedTime", elapsedTime);   // Save elapsed time to localStorage

        renderTime();   // Update display
    }, 100);
}

// Pause the timer
function pause() {
    if (!running) return;
    running = false;
    clearInterval(intervalID);
}

// Reset the timer
function reset() {
    running = false;
    clearInterval(intervalID);

    elapsedTime = 0;
    seconds = minutes = hours = 0;
    renderTime();

    localStorage.removeItem("elapsedTime");  // Remove saved time from localStorage
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Initial calculation after page load
seconds = Math.floor(elapsedTime / 1000) % 60;
minutes = Math.floor(elapsedTime / 60000) % 60;
hours = Math.floor(elapsedTime / 3600000);

renderTime();   // Display initial time

if (elapsedTime > 0) {
    $("#start-pause-btn").text("Resume");   // Show "Resume" if there is saved time
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Event Listeners
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Start/Pause button
$("#start-pause-btn").click(function() {
    if (!running) {
        start();
        $(this).text("Pause");
    } else {
        pause();
        if (seconds === 0 && minutes === 0 && hours === 0) {
            $(this).text("Start");
        } else {
            $(this).text("Resume");
        }
    }
});

// Reset button
$("#reset-btn").click(function() {
    reset();
    $("#start-pause-btn").text("Start");
    
    $(".reset-icon").removeClass("rotate");   // Remove previous animation
    void $(".reset-icon")[0].offsetWidth;     // Force reflow to restart animation
    $(".reset-icon").addClass("rotate");      // Start animation

    setTimeout(() => {
        $(".reset-icon").removeClass("rotate");   // Remove class after animation ends
    }, 600);
});

// Keyboard shortcuts
$(document).keydown(function(e) {
    if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        $("#start-pause-btn").click();
    } else if (e.code === "KeyR") {
        e.preventDefault();
        $("#reset-btn").click();
    } else if (e.code === "KeyH") {
        e.preventDefault();
        $("#ui-hidde-btn").click();
    }
});

// UI Hide/Show button
$("#ui-hidde-btn").click(function() {
    if (!ishidden) {
        ishidden = true;
        $(".button-wrapper").addClass("hidden");
    } else {
        ishidden = false;
        $(".button-wrapper").removeClass("hidden");
    }
});