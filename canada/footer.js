var mm = parseInt(document.getElementById("mm").innerHTML)-1;
let month_name = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
var footer_url = "https://www.bac-lac.gc.ca/eng/onthisday/Pages/"+month_name[mm]+".aspx";
$("a#source").attr("href", footer_url)
