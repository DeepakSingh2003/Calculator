let dis = document.getElementById("display");
let firstn = "";

let secn = "";
let operation = "";

function f1(x) {
  firstn += x;
  dis.value += x;
}
function op(x) {
  operation = x;
  secn = firstn;
  firstn = "";
  dis.value = "";
}
function calc() {
  if (firstn == "" || secn == "") {
    return;
  }
  let result = 0;
  switch (operation) {
    case "+":
      result = parseFloat(secn) + parseFloat(firstn);
      break;
    case "-":
      result = parseFloat(secn) - parseFloat(firstn);

      break;
    case "*":
      result = parseFloat(secn) * parseFloat(firstn);

      break;
    case "/":
      result = parseFloat(secn) / parseFloat(firstn);

      break;
    case "%":
      result = (parseFloat(secn) / parseFloat(firstn)) * 100;

      break;
    default:
      break;
  }
  dis.value = result;
  // console.log(result);
}

function clr() {
  dis.value = "";
  firstn = "";
  secn = "";
}
