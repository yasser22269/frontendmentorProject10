const btnDaily = document.getElementById("Daily");
const btnWeekly = document.getElementById("Weekly");
const btnMonthly = document.getElementById("Monthly");


const Daily = document.getElementsByClassName("d");
const Weekly = document.getElementsByClassName("w");
const Monthly = document.getElementsByClassName("m");

for (var i=0;i<Daily.length;i+=1){
  Daily[i].style.display = 'none';
}
for (var i=0;i<Monthly.length;i+=1){
  Monthly[i].style.display = 'none';
}
for (var i=0;i<Weekly.length;i+=1){
  Weekly[i].style.display = 'block';
}
btnWeekly.classList.add("active");
btnMonthly.classList.remove("active");
btnMonthly.classList.remove("active");
function btnDaily1() {
    for (var i=0;i<Weekly.length;i+=1){
        Weekly[i].style.display = 'none';
      }
      for (var i=0;i<Monthly.length;i+=1){
        Monthly[i].style.display = 'none';
      }
      for (var i=0;i<Daily.length;i+=1){
        Daily[i].style.display = 'block';
      }
   btnDaily.classList.add("active");
   btnMonthly.classList.remove("active");
   btnWeekly.classList.remove("active");
};
function btnWeekly1() {
    for (var i=0;i<Daily.length;i+=1){
        Daily[i].style.display = 'none';
      }
      for (var i=0;i<Monthly.length;i+=1){
        Monthly[i].style.display = 'none';
      }
      for (var i=0;i<Weekly.length;i+=1){
        Weekly[i].style.display = 'block';
      }

   btnWeekly.classList.add("active");
   btnMonthly.classList.remove("active");
   btnMonthly.classList.remove("active");
};

function btnMonthly1(){
    for (var i=0;i<Daily.length;i+=1){
        Daily[i].style.display = 'none';
      }
      for (var i=0;i<Weekly.length;i+=1){
        Weekly[i].style.display = 'none';
      }
      for (var i=0;i<Monthly.length;i+=1){
        Monthly[i].style.display = 'block';
      }
 
    btnMonthly.classList.add("active");
    btnWeekly.classList.remove("active");
    btnDaily.classList.remove("active");
 };