let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectMonth = document.getElementById("month");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
              "November", "December"];

let event = ["can_jan_1.html"];

let monthHeader = document.getElementById("monthHeader");
showCalendar(currentMonth);
dropDown();

function next() {
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth);
}

function previous() {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth);
}

function jump() {
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth);
}

function dropDown() {
    for (i = 0; i < months.length; i++) {
      var opt = document.createElement("option");
      document.getElementById("month").innerHTML += '<option value="' + i + '">' + months[i] + '</option>';
    }
}

function showCalendar(month) {

    // let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(currentYear, month, 32).getDate();
    if (daysInMonth === 28) {
      daysInMonth = 29;
    }

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthHeader.innerHTML = months[month];
    // selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                var link = document.createElement("a");

                link.setAttribute("href", "can_" + (month+1) + "_" + date + ".html");
                link.text = date;


                cell.appendChild(link);
                row.appendChild(cell);

                if (date === today.getDate() && month === today.getMonth()) {
                    cell.classList.add("bg-warning");
                } // color today's date

                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}
