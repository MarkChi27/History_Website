$(document).ready(function(){
var prev = document.getElementById("prev").innerHTML;
var next = document.getElementById("next").innerHTML;
var prev_url = prev + '.html';
var next_url = next + '.html';

$("a#prev").attr("href", prev_url)
$("a#next").attr("href", next_url)
});
