let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

const increment = function () {
  count += 1;
  countEl.innerText = count;
};

const save = function () {
  let countstr = count + "-";

  saveEl.textContent += countstr;
  countEl.textContent = 0;
};
