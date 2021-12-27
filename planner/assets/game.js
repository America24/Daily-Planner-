$("currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var timeOfDay = function() {
    var currentTime = moment().hour();
}

function colorTimeBlock (hour, time) {
    $(`#${hour}`).children(".description").addClass(time)
}


function displaySchedule() {
    for (let i = 9; i < 18; i++) {
        let currentTask = JSON.parse(localStorage.getItem(i))
        $(`#${i}`).children("description").text(currentTask)
    }
}

$(".saveBtn").click(function(){
    var hour = $(this).parent().attr("id");
    var text = $(this).parent().children("textarea").val();
    var task = $(this).siblings("textarea").val()
    localStorage.setItem(hour,JSON.stringify(task))

    })

    saveEvents(hour, text);

updateHourly()
displaySchedule()