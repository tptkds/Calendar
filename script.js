const year = document.querySelector('.year');
const md = document.querySelector('.md');
const weekday = document.querySelector('.weekday');
const calendar_display = document.querySelector('.calendar_display');
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector('.nextBtn');
const nowBtn = document.querySelector(".nowBtn");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/*const leapYear = [31,29,31,30,31,30,31,31,30,31,30,31];
const notLeapYear = [31,28,31,30,31,30,31,31,30,31,30,31];*/
const week = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dateNow = new Date();
const yearNow = dateNow.getFullYear();
let month = dateNow.getMonth();
console.log(month);

function setDate(y, m, d, wd) { 
  year.innerText = y;

  if(d == "x" && wd == "x") {
    md.innerText = months[m];
    weekday.innerText = "";
  }
  
  else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    md.innerText = months[m] + " " + d + "th";
    weekday.innerText = week[wd];
  }
}

function setCalendar(y, m) {
  let firstDay = new Date(y, m, 1);
  let lastDay = new Date (y, m + 1, 0);
  let lastMonth_lastDay = new Date(y, m, 0);
  let n = 0;
  let nextMonth_n = 0;
    
  for(let i = 0; i < 6; i++) {
    let ul = document.createElement('ul');
    ul.className = 'calendar_display_ul'
    calendar_display.appendChild(ul);

    for(let j = 0; j < 7; j++) {
      let li = document.createElement('li');
      
      if(i == 0 && j < firstDay.getDay() ) {
        li.innerText = new Date(lastMonth_lastDay.getFullYear(), lastMonth_lastDay.getMonth(), lastMonth_lastDay.getDate() - (firstDay.getDay() - j + 1)).getDate();
        li.className = 'notNow';
      }
    
      else if(n == lastDay.getDate()) {
        nextMonth_n++;
        li.innerText = nextMonth_n;
        li.className = 'notNow';
      }

      else {
        n++;
        li.innerText = n;
      }
        
      calendar_display.lastChild.appendChild(li);
    }
  }
}

prevBtn.addEventListener("click", clickPrevBtnHandler);
nextBtn.addEventListener("click", clickNextBtnHandler);
nowBtn.addEventListener("click", clickNowBtnHandler);

function clickPrevBtnHandler() {
  removeUl();
  setCalendar(yearNow, --month);

  let prevDate = new Date(yearNow, month, 1);

  if(prevDate.getFullYear() == dateNow.getFullYear() && prevDate.getMonth() == dateNow.getMonth()) setDate(yearNow, month, dateNow.getDate(),dateNow.getDay());
  else setDate(prevDate.getFullYear(), prevDate.getMonth(), "x", "x");
}

function clickNextBtnHandler() {
  removeUl();
  setCalendar(yearNow, ++month);

  let nextDate = new Date(yearNow, month, 1);

  if(nextDate.getFullYear() == dateNow.getFullYear() && nextDate.getMonth() == dateNow.getMonth()) setDate(yearNow, month, dateNow.getDate(),dateNow.getDay());
  else setDate(nextDate.getFullYear(), nextDate.getMonth(), "x", "x");
}

function clickNowBtnHandler() {
  removeUl();

  month = dateNow.getMonth();
  
  setDate(yearNow, month, dateNow.getDate(),dateNow.getDay());
  setCalendar(yearNow, month);
}

function removeUl() {
  document.querySelectorAll('.calendar_display_ul').forEach(element => element.remove());
}

setDate(yearNow, month, dateNow.getDate(),dateNow.getDay());
setCalendar(yearNow, month);