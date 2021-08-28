
var i;
var saveBtn = $(".saveBtn");

var nput;

var container = $(".container"); //jquery var
var cont = document.querySelector(".container"); //js var

//either retrieve&parse array from local storage saved array or defines timeArray on initial request
var timeArray = JSON.parse(localStorage.getItem("savedArray")) || [
  {
    time: 9,
    plan: "",
  },
  
  {
    time: 10,
    plan: "",
  },
  
  {
    time: 11,
    plan: "",
  },
  
  {
    time: 12,
    plan: "",
  },
  
  {
    time: 13,
    plan: "",
  },
  
  {
    time: 14,
    plan: "",
  },
  
  {
    time: 15,
    plan: "",
  },
  
  {
    time: 16,
    plan: "",
  },
  
  {
    time: 17,
    plan: "",
  }

]


//Loops through the timeArray to populate the elements with times and plans
for (i=0; i<timeArray.length; i++) {

  //Add rows to the page
  var divEl = $("<div>");
  divEl.addClass("row");
  container.append(divEl);

  //add col1 to each row, hold the time
  var col1 =$("<div>");
  var time = convertHour(); 
  col1.text(time);
  col1.addClass("col-2");
  col1.addClass("hour");
  col1.attr('value', time)

  //add col2 to each row, hold the day plan
  var col2 =$("<div>");
  col2.addClass("col-10 d-flex ");

  col2.append("<input type='text' class='nput form-control h-100 '  name='inputField'>")
  col2.append("<button class='saveBtn btn-lg '>Save</button>")

  divEl.append(col1, col2);


  nput=$(".nput");

  nput[i].value=(timeArray[i].plan);
  nput[i].dataset.index=i;

 //adds color to the plan determined by past,present,future
  colorLoop();


};





//function to save
$(".saveBtn").on("click",function (event){
  event.stopPropagation();
  const nput = $(this).parent().find(".nput")
  
  timeArray[nput.data("index")].plan=nput.val();
  
  localStorage.setItem("savedArray",JSON.stringify(timeArray));
  
});


//Converts plan body based on past,present,future
function colorLoop(){

  var now = moment().format("H");
    
  if (now==timeArray[i].time){
   
    cont.children[i].children[1].children[0].classList.add("present");

 }else if (now < timeArray[i].time) {
    cont.children[i].children[1].children[0].classList.add("future");
 }else {
    cont.children[i].children[1].children[0].classList.add("past");
 }


}


//Converts 24 hour time to 12 hour time AM/PM
function convertHour (){
  
   return moment(timeArray[i].time, "h").format('LT');
}






