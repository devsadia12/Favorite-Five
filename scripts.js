const buttons = document.querySelectorAll(".select-btn");
const selectedList = document.getElementById("selected-list");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
     const playerName = button.parentElement.previousElementSibling.textContent.trim();

     if (selectedList.children.length >= 5) {
      alert("You can only select 5 players!");
      return;
    }
    const li = document.createElement("li");
    li.innerText = playerName;
    selectedList.appendChild(li);
    button.disabled = true;
    button.classList.add("bg-gray-400");
  });
});


const calculateBtn = document.querySelector("button.bg-orange-500");
const playerCostInput = document.querySelector('input[name="p-cost"]');
const expensesText = document.querySelector("p span");  

calculateBtn.addEventListener("click", () => {
  const playerCount = selectedList.children.length;
  const perPlayerCost = parseFloat(playerCostInput.value);
   if (isNaN(perPlayerCost)) {
    alert("Enter a valid per player cost");
    return;
  }

  const total = playerCount * perPlayerCost;
  expensesText.textContent = `$${total}`;
});

const totalCalcBtn = document.querySelectorAll("button.bg-orange-500")[1];

totalCalcBtn.addEventListener("click", () => {
  const playerExpenseText = document.querySelector("p span"); // Player Expenses
  const playerExpense = parseFloat(playerExpenseText.textContent.replace("$", "")) || 0;

  const managerInput = document.querySelector('input[name="m-cost"]');
  const coachInput = document.querySelector('input[name="c-cost"]');

  const managerCost = parseFloat(managerInput.value) || 0;
  const coachCost = parseFloat(coachInput.value) || 0;

  const total = playerExpense + managerCost + coachCost;

  const totalOutput = document.querySelector("p span.font-bold.text-orange-400");
  totalOutput.textContent = `$${total}`;
});

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  selectedList.innerHTML = "";
  playerCostInput.value = "";
  managerInput.value = "";
  coachInput.value = "";
  playerExpenseText.textContent = "$00";
  totalOutput.textContent = "$00";

  buttons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("bg-gray-400");
    btn.textContent = "Select";
  });
});


