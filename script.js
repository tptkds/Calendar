const display = document.querySelector(".display");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);
const nowDay = date.getDay();

function getNowDate() {
  displayDate(year, month, firstDay, lastDay, nowDay);
}


function displayDate(y, m, fd, ld, nd) {
  let n = 0;
  for (let i = 0; i < 6; i++) {
    // 6번째 라인까지 나타낸다, 첫번째라인과 마지막라인은 저번달 및 다음달의 날짜를 같이 표시한다.
    const ul = document.createElement("ul");
    if (i == 0) {
      //첫번째 ul인 경우
      const prevMonth_lastDay = new Date(y, m, 0);
      if (fd.getDay() == 0) {
        // 첫째주가 일요일부터 시작할 때 => 저번달의 마지막주 7일치를 첫번째 ul에 표시해야 한다.
        for (let j = prevMonth_lastDay - 6; j <= prevMonth_lastDay; j++) {
          const li = document.createElement("li");
          li.innerText = j;
          li.className = 'notNow';
          ul.appendChild(li);
        }
      } else {
        // 첫째주가 월요일(1) 이상으로 시작할 때 => 저번달의 일부분만 ul에 표시해야 한다.
        for (
          // 저번달 마지막주 첫번째 ul에 추가
          let j = prevMonth_lastDay.getDate() - fd.getDay() + 1;
          j <= prevMonth_lastDay.getDate();
          j++
        ) {
          const li = document.createElement("li");
          li.innerText = j;
          li.className = 'notNow';
          ul.appendChild(li);
        }
        for (let j = fd.getDay(); j < 7; j++) {
          n += 1;
          const li = document.createElement("li");
          li.innerText = n;
          ul.appendChild(li);
        }
      }
    } else {
      for (let j = 0; j < 7; j++) {
        n += 1;
        const li = document.createElement("li");
        li.innerText = n;
        ul.appendChild(li);

        if (n == ld.getDate()) {
          // n이 마지막날에 도달했다면 => 이제부터는 다음달 날짜가 표시된다.
          if (i == 4) {
            //5번째라인에서 마지막날에 도달했다면 남은 5번째라인의 빈공간 및 6번째라인을 다음달 날짜로 채운다.
            let nextD = 0; //다음달 날짜시작
            for (let k = j + 1; k < 7; k++) {
              nextD++;
              const li = document.createElement("li");
              li.className = 'notNow';
              li.innerText = nextD;
              ul.appendChild(li);
            }
            const ul = document.createElement("ul"); //6번째 ul
            for (let k = 0; k < 7; k++) {
              nextD++;
              const li = document.createElement("li");
              li.className = 'notNow';
              li.innerText = nextD;
              ul.appendChild(li);
            }
          } else {
            //6번쨰라인에서 마지막날에 도달했다면 남은 6번째라인의 빈공간을 다음달 날짜로 채운다.
            let nextD = 0; //다음달 날짜시작
            for (let k = j + 1; k < 7; k++) {
              nextD++;
              const li = document.createElement("li");
              li.className = 'notNow';
              li.innerText = nextD;
              ul.appendChild(li);
            }
          }
          break;
        }
      }
    }
    display.appendChild(ul);
    if (n == ld.getDate()) break;
  }
}

function getPrevDate() {

}

getNowDate();
