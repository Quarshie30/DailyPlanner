// script.js

$(document).ready(function () {
    // Function to display the current day
    function displayCurrentDay() {
        var currentDate = dayjs().format("dddd, MMMM D");
        $("#currentDay").text("Today is " + currentDate);
    }
