// script.js

$(document).ready(function () {
    // Function to display the current day
    function displayCurrentDay() {
        var currentDate = dayjs().format("dddd, MMMM D");
        $("#currentDay").text("Today is " + currentDate);
    }

      // Function to format the hour for display
   function formatHour(hour) {
    return dayjs().hour(hour).format("h A");
}
// Save button event listener 
$(".container").on("click", ".saveBtn", function () {
    var textArea = $(this).siblings(".description");
    var hour = $(this).siblings(".hour").text().trim();
    var eventText = textArea.val();

 // Save the event in local storage
        localStorage.setItem(hour, eventText);
    });

    // Function to load events from local storage
    function loadEvents() {
        $(".time-block").each(function () {
            var hour = $(this).find(".hour").text().trim();
            var eventText = localStorage.getItem(hour);
    
            if (eventText) {
                $(this).find(".description").val(eventText);
            }
        });
    }
// Call functions to initialize the application
displayCurrentDay();
loadEvents();
});