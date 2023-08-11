$(function () {

  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();


    localStorage.setItem(timeBlockId, userInput);

    $("#notification").fadeIn().delay(2000).fadeOut();
  });


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

  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
