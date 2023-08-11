$(function () {
  // TODO: Add a listener for click events on the save button.
  $(".saveBtn").on("click", function () {
    // Get the id of the time-block containing the clicked button
    var timeBlockId = $(this).closest(".time-block").attr("id");

    // Get the user input from the corresponding textarea
    var userInput = $(this).siblings(".description").val();

    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  // TODO: Add code to apply the past, present, or future class to each time block.
  var currentHour = dayjs().hour(); // Get the current hour in 24-hour format

  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // TODO: Add code to get user input from localStorage and set textarea values.
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedUserInput = localStorage.getItem(timeBlockId);

    if (savedUserInput) {
      $(this).find(".description").val(savedUserInput);
    }
  });

  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
