$(function () {
  // Click event listener for the "Save" button
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();

    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);

    // Show the notification message
    $("#notification").fadeIn().delay(2000).fadeOut();
  });

  // Code for applying classes and retrieving user input from local storage
  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    var savedUserInput = localStorage.getItem($(this).attr("id"));
    if (savedUserInput) {
      $(this).find(".description").val(savedUserInput);
    }
  });

  // Display the current date in the header
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
