//your JS code here. If required.
window.onload = function () {
  const colorSelect = document.getElementById("colorSelect");
  const button = document.querySelector("input[type=button]");

  button.addEventListener("click", function () {
    const selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {
      colorSelect.remove(selectedIndex);
    } else {
      alert("No color selected!");
    }

    // Optional: show message if no colors left
    if (colorSelect.options.length === 0) {
      alert("No colors left in the dropdown!");
    }
  });
};
