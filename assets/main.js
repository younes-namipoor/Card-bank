const div1 = document.querySelectorAll(".div1>input");
const div2 = document.querySelectorAll(".div2>input");
const div3 = document.querySelector(".div3>input");
const time1 = document.querySelector(".time>span");
let m = 9;
let s = 59;
const cardN = document.querySelectorAll(".card-2>div>span");
const cardN1 = document.querySelector(".n2");
const cardN2 = document.querySelector(".n3");
const cardN3 = document.querySelector(".n4");
const div4 = document.querySelector(".div4>input");
const cardN4 = document.querySelector(".n5");
const div5 = document.getElementById("fifth");
const div7 = document.querySelector(".div7");
const ul = document.querySelector(".div4>ul");
const ul1 = document.querySelector(".div4");

div4.addEventListener("keyup", () => {
  let n2 = div4.value;
  cardN1.innerHTML = n2;
});

div1.forEach((val, i) => {
  val.addEventListener("keyup", (e) => {
    if (i == 0) {
      n1 = val.value;
      cardN[0].innerHTML = n1;
    } else if (i == 1) {
      n2 = val.value;
      cardN[1].innerHTML = n2;
    } else if (i == 2) {
      n3 = val.value;
      cardN[2].innerHTML = n3;
    } else if (i == 3) {
      n4 = val.value;
      cardN[3].innerHTML = n4;
    }

    if (val.value.length > 3) {
      if (i != 3) {
        val.nextElementSibling.focus();
      } else {
        div2[0].focus();
      }
    }

    if (e.keyCode == 8 && i != 0) {
      if (val.value.length == 0) {
        val.previousElementSibling.focus();
      }
    }
  });
});
div2.forEach((val, i) => {
  val.addEventListener("keyup", (e) => {
    if (i == 0) {
      n1 = val.value;
      cardN2.innerHTML = n1;
    } else if (i == 1) {
      n2 = val.value;
      cardN3.innerHTML = n2;
    }
    if (val.value.length > 1) {
      if (i != 1) {
        val.nextElementSibling.focus();
      } else {
        div3.focus();
      }
    }
    if (e.keyCode == 8) {
      if (val.value.length == 0 && i != 0) {
        val.previousElementSibling.focus();
      } else if (val.value.length == 0 && i == 0) {
        div1[3].focus();
      }
    }
  });
});

div3.addEventListener("keyup", (e) => {
  n1 = div3.value;
  cardN4.innerHTML = n1;
  if (div3.value.length > 5) {
    div3.value = div3.value.slice(0, 5);
  }
  if (e.keyCode == 8) {
    if (div3.value.length == 0) {
      div2[1].focus();
    }
  }
});

div1.forEach((val) => {
  val.addEventListener("blur", () => {
    if (val.value.length >= 4) {
      val.value = val.value.slice(0, 4);
    }
  });
});
div2.forEach((val) => {
  val.addEventListener("blur", () => {
    if (val.value.length > 2) {
      val.value = val.value.slice(0, 2);
    }
  });
});

setInterval(() => {
  if (s != 0) {
    s--;
  } else {
    if (m != 0) {
      m--;
      s = 59;
    } else {
      location.reload();
    }
  }
  time1.innerHTML = m + ":" + s;
}, 1000);

div7.addEventListener("click", () => {
  if (div5.checked) {
    if (div4.value != "") {
      localStorage.setItem("name", div4.value);
    }
    if (div1[0].value.length == 4) {
      localStorage.setItem("card-1", div1[0].value);
      localStorage.setItem("card-2", div1[1].value);
      localStorage.setItem("card-3", div1[2].value);
      localStorage.setItem("card-4", div1[3].value);
      localStorage.setItem("card-5", div2[0].value);
      localStorage.setItem("card-6", div2[1].value);
    }
  }
});
let txt = localStorage.getItem("name");
let txt1 = localStorage.getItem("card-1");
let txt2 = localStorage.getItem("card-2");
let txt3 = localStorage.getItem("card-3");
let txt4 = localStorage.getItem("card-4");
let txt5 = localStorage.getItem("card-5");
let txt6 = localStorage.getItem("card-6");
let li = document.createElement("li");
li.innerHTML = txt;
ul.appendChild(li);
const mLi = document.querySelector(".div4>ul>li");
div4.addEventListener("mouseenter", () => {
  ul.style.display = "block";
});
window.addEventListener("mousedown", () => {
  ul.style.display = "none";
});

mLi.addEventListener("mousedown", () => {
  let x = mLi.innerHTML;
  div4.value = x;
  div1[0].value = txt1;
  cardN[0].innerHTML = txt1;
  div1[1].value = txt2;
  cardN[1].innerHTML = txt2;
  div1[2].value = txt3;
  cardN[2].innerHTML = txt3;
  div1[3].value = txt4;
  cardN[3].innerHTML = txt3;
  div2[0].value = txt5;
  cardN2.innerHTML = txt5;
  div2[1].value = txt6;
  cardN3.innerHTML = txt6;
  cardN1.innerHTML = txt;
});
