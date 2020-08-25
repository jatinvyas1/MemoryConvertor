import "./styles.css";
//solving question

let prevType1 = "";
let prevType2 = "";
let prevId1;
let prevId2;
const display = () => {
  let elementToDisplayOp;
  let from = document.getElementById("from");
  let to = document.getElementById("to");
  let fromValue = from.value;
  let toValue = to.value;

  let type1 = document.getElementById("type1");
  type1 = type1.options[type1.selectedIndex].id;
  let type2 = document.getElementById("type2");
  type2 = type2.options[type2.selectedIndex].id;
  let ans;
  if (
    type1 === prevId1 &&
    type2 === prevId2 &&
    fromValue === prevType1 &&
    toValue === prevType2
  ) {
    ans = fromValue;
  } else {
    ans = calculateAns(fromValue, toValue, type1, type2);
  }

  if (fromValue === "") {
    elementToDisplayOp = from;
    prevType1 = ans;
    prevType2 = toValue;

    // console.log("1");
    // console.log(prevType1);
    // console.log(prevType2);
  } else if (toValue === "") {
    elementToDisplayOp = to;
    prevType2 = ans;
    prevType1 = fromValue;
    // console.log("2");
    // console.log(prevType1);
    // console.log(prevType2);
  } else {
    if (prevType1 === fromValue) {
      elementToDisplayOp = from;
      prevType2 = toValue;
      prevType1 = ans;
      // console.log("3");
      // console.log(prevType1);
      // console.log(prevType2);
    } else {
      elementToDisplayOp = to;
      prevType2 = ans;
      prevType1 = fromValue;
      // console.log("4");
      // console.log(prevType1);
      // console.log(prevType2);
    }
  }

  elementToDisplayOp.value = ans;
};

document.getElementById("convert").addEventListener("click", display, false);
// populating dropdowns
let types = [
  "Bytes",
  "KiloBytes",
  "MegaBytes",
  "GigaBytes",
  "TeraBytes",
  "PetaBytes"
];
let type1 = document.getElementById("type1");
let type2 = document.getElementById("type2");

function populate(type) {
  for (let i in types) {
    let op = types[i];
    let element = document.createElement("option");
    element.textContent = op;
    element.value = op;
    element.id = i;
    type.appendChild(element);
  }
}

populate(type1);
populate(type2);

function calculateAns(value1, value2, id1, id2) {
  // console.log("In Calculate");
  // console.log(id1);
  // console.log(id2);
  // console.log(prevType1);
  let ans, cal;
  if (prevType1 === "" && value1 !== "") {
    cal = value1;
  } else if (prevType2 === "" && value2 !== "") {
    cal = value2;
  } else if (value1 === prevType1 && prevType1 !== "") {
    cal = value2;
  } else {
    cal = value1;
  }
  // console.log(cal);

  if (cal === value2) {
    ans = cal * 1024 ** (id2 - id1);
  }
  if (cal === value1) {
    ans = cal * 1024 ** (id1 - id2);
  }

  return +ans.toFixed(2);
}
