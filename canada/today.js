$(document).ready(function(){
var dd = parseInt(document.getElementById("dd").innerHTML);
var mm = parseInt(document.getElementById("mm").innerHTML);
var today = new Date();
var today_dd = today.getDate();
var today_mm = today.getMonth()+1;
let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var today = 'can_' + today_mm + '_' + today_dd + '.html';
var yesterday = 'can_' + mm + '_' + (dd-1) + '.html';
var next_day = 'can_' + mm + '_' + (dd+1) + '.html';
if (dd == 1) {
  if (mm == 1){
    yesterday = 'can_12_31.html';
  }else{
    yesterday = 'can_' + (mm-1) + '_' + months[mm-2] + '.html';
  }
}
else if (dd == months[mm-1]){
  if (mm == 12){
    next_day = 'can_1_1.html';
  }else{
    next_day = 'can_' + (mm+1) + '_1.html';
  }
}

var today_url = today;
var yesterday_url = yesterday;
var next_day_url = next_day;
$("a#today").attr("href", today_url)
$("a#yesterday").attr("href", yesterday_url)
$("a#next_day").attr("href", next_day_url)
});
