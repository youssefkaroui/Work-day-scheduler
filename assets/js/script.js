
$ (document).ready(function  () {


  var timeOfTheDay= dayjs().format("HH")
  var currentDayEl = $('#currentDay');
   var currentday=dayjs().format('dddd, MMM DD, YYYY');
   console.log(currentday);
   console.log(timeOfTheDay);
   currentDayEl.text("Today is " +currentday);
  var todos =[]
   // checks the current hour and changes the timeblock backgroung color accordingly

   function checkTime (){
     
     for (var i=9; i<=17; i++){
       var currentHour= parseInt(timeOfTheDay);
       var timeBlock=$("#hour-"+i)
       if (currentHour>i) {
         $(timeBlock).addClass("past");
       } else if (currentHour === i){
         $(timeBlock).addClass("present");
       }  else {
         $(timeBlock).addClass("future");
       }
     }
     
   }
  // saves the dodos
  $(".saveBtn").on("click", function(){
      console.log("save button was clicked");
      var index = $(".saveBtn").index(this);
       console.log(index)
      todos[index] = $(this).sibling().find(".taskItem").text();
      localStorage.setItem("tasks", JSON.stringify(todos));
  });



   checkTime()
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
 
  
});
