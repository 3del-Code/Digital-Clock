let week_days = ["sun", "mon", "tus", "wed", "thu", "fri", "sat"];
let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function clock() {
  let today = new Date();
  let date = today.getDate();
  let mon = today.getMonth();
  let year = today.getFullYear();
  let day = today.getDay();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  // adding leading zeros to them
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let d_n = h < 11 ? "AM" : "PM"; // AM or PM

  // ok, let's write them into document
  document.getElementById("hrs").innerHTML = h;
  document.getElementById("mins").innerHTML = m;
  document.getElementById("secs").innerHTML = s;
  document.getElementById("d-n").innerHTML = d_n;

  document.getElementById("day").innerHTML = date;
  document.getElementById("month").innerHTML = month[mon];
  document.getElementById("year").innerHTML = year;

  document.getElementById(`${week_days[day]}`).style.color = "#fff";
}

// start the clock
let inter = setInterval(clock, 1000);
