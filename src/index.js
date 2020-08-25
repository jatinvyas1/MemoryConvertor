import "./styles.css";

const display = () => {
  let bytes = document.getElementById("inBytes").value;
  let ans = +(bytes / (1024 * 1024 * 1024)).toFixed(2);
  document.getElementById("inGB").value = ans;
};

document.getElementById("convert").addEventListener("click", display, false);
