const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");


// An onchange event handler to detect when the value selected in the <select> menu is changed.

select.addEventListener("change", () => {
  const choice = select.value;

  // ADD CONDITIONAL HERE

  /*

  write a conditional statement inside the onchange handler function,

  Look at the selected month (stored in the choice variable. This will be the <select> element value after the value changes, so "January" for example.)

  Set a variable called days to be equal to the number of days in the selected month. To do this you'll have to look up the number of days in each month of the year. You can ignore leap years for the purposes of this example.
  
  */

  createCalendar(days, choice);
});


// A function called createCalendar() that draws the calendar and displays the correct month in the h1 element.

function createCalendar(days, choice) {
  list.innerHTML = "";
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, "January");
