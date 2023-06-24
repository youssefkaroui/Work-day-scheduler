
$ (document).ready(function  () {

// global variables 
  var timeOfTheDay= dayjs().format("HH")
  var currentDayEl = $('#currentDay');
   var currentday=dayjs().format('dddd, MMM DD, YYYY');
   console.log(currentday);
   console.log(timeOfTheDay);
   currentDayEl.text("Today is " +currentday);
  var todos =JSON.parse(localStorage.getItem("todos"))|| []
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
  // prints the todos on the time block 
 function printTodos(){
  $.each(todos, function(index){

      var todoEl = $("#time-block-" + index)
      todoEl.text(todos[index])
      // console.log(index)
      // console.log(todoEl);

     
  })
}
// event listener that saves the dodos
$(".saveBtn").on("click", function(){
  // console.log("save button was clicked");
  var index = $(".saveBtn").index(this);
   console.log(index)
  todos[index] = $(this).prev().val();
  console.log(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
});
  
   checkTime();
   printTodos();
  
 
  
});
