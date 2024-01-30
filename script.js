$(document).ready(function () {
    // Function to display the current day at the top of the calendar
    function displayCurrentDay() {
        var currentDate = dayjs().format("dddd, MMMM D");
        $("#currentDay").text("Today is " + currentDate);
    }

   