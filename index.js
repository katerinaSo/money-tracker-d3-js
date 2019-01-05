const form = document.querySelector("form");
const name = document.querySelector("#name");
const cost = document.querySelector("#cost");
const error = document.querySelector("#error");

form.addEventListener("submit", event => {
  event.preventDefault();
  if (name.value && cost.value) {
    const item = {
      name: name.value,
      cost: parseInt(cost.value)
    };
    db.collection("expenses")
      .add(item)
      .then(res => {
        name.value = "";
        cost.value = "";
        error.textContent = "";
      });
  } else {
    error.textContent =
      "Please, enter name of the item you spent money on and how much you spent as rounded cost to just a number of dollars ";
  }
});
