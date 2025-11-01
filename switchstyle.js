const styleLink = document.getElementById("styleSheetLink");
const switchBtn = document.getElementById("switchStyleBtn");

let isDemoStyle = true;

switchBtn.addEventListener("click", () => {
  if (isDemoStyle) {
    styleLink.setAttribute("href", "basestyle.css");
    switchBtn.textContent = "Switch to Demo Style";
  } else {
    styleLink.setAttribute("href", "cssdemo.css");
    switchBtn.textContent = "Switch to Site Style";
  }
  isDemoStyle = !isDemoStyle;
});