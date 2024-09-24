// card-1
document.getElementById("donate-1").addEventListener("click", function () {
  const addMoney = getInputFieldValueById("input-1");

  document.getElementById("input-1").value = "";

  if (isNaN(addMoney) || addMoney < 0) {
    alert("Invalid Donation amount");
    return;
  }

  const deposit = getTotalValueById("total-1");
  const updatedDeposit = deposit + addMoney;

  const bankBalance = getTotalValueById("bank-balance");

  if (addMoney > bankBalance) {
    alert("You don't have enough money");
    return;
  }

  const updatedBankBalance = bankBalance - addMoney;

  document.getElementById("bank-balance").innerText = updatedBankBalance;

  document.getElementById("total-1").innerText = updatedDeposit;

  const noakhali = document.getElementById("noakhali").innerText;

  const historyItem = document.createElement("div");
  historyItem.className =
    "p-5 border border-secondary rounded-xl flex flex-col gap-2";
  historyItem.innerHTML = `
  
  <h5 class="text-lg font-bold">${addMoney} TK is donated for ${noakhali}</h5>
  <p class="text-para text-sm">${new Date()}</p>
  
  `;
  const hisotyFigure = document.getElementById("history-page");

  hisotyFigure.insertBefore(historyItem, hisotyFigure.firstChild);

  // Show Modal----->>
  const modalContainer = document.getElementById("modal-container");

  modalContainer.classList.remove("hidden");
});

// card-2
document.getElementById("donate-2").addEventListener("click", function () {
  const addMoney2 = getInputFieldValueById("input-2");

  document.getElementById("input-2").value = "";

  if (isNaN(addMoney2) || addMoney2 < 0) {
    alert("Invalid Donation amount");
    return;
  }

  const deposit2 = getTotalValueById("total-2");
  const updatedDeposit2 = deposit2 + addMoney2;

  const bankBalance2 = getTotalValueById("bank-balance");

  if (addMoney2 > bankBalance2) {
    alert("You don't have enough money");
    return;
  }

  const updatedBankBalance2 = bankBalance2 - addMoney2;

  document.getElementById("bank-balance").innerText = updatedBankBalance2;

  document.getElementById("total-2").innerText = updatedDeposit2;

  const feni = document.getElementById("feni").innerText;

  const historyItem = document.createElement("div");
  historyItem.className =
    "p-5 border border-secondary rounded-xl flex flex-col gap-2";
  historyItem.innerHTML = `
  
  <h5 class="text-lg font-bold">${addMoney2} TK is donated for ${feni}</h5>
  <p class="text-para text-sm">${new Date()}</p>
  
  `;
  const hisotyFigure = document.getElementById("history-page");

  hisotyFigure.insertBefore(historyItem, hisotyFigure.firstChild);

  // Show Modal----->>
  const modalContainer = document.getElementById("modal-container");

  modalContainer.classList.remove("hidden");
});

// card-3
document.getElementById("donate-3").addEventListener("click", function () {
  const addMoney3 = getInputFieldValueById("input-3");

  document.getElementById("input-3").value = "";

  if (isNaN(addMoney3) || addMoney3 < 0) {
    alert("Invalid Donation amount");
    return;
  }

  const deposit3 = getTotalValueById("total-3");
  const updatedDeposit3 = deposit3 + addMoney3;

  const bankBalance3 = getTotalValueById("bank-balance");

  if (addMoney3 > bankBalance3) {
    alert("You don't have enough money");
    return;
  }

  const updatedBankBalance3 = bankBalance3 - addMoney3;

  document.getElementById("bank-balance").innerText = updatedBankBalance3;

  document.getElementById("total-3").innerText = updatedDeposit3;

  const movement = document.getElementById("movement").innerText;

  const historyItem = document.createElement("div");
  historyItem.className =
    "p-5 border border-secondary rounded-xl flex flex-col gap-2";
  historyItem.innerHTML = `
  
  <h5 class="text-lg font-bold">${addMoney3} TK is donated for ${movement}</h5>
  <p class="text-para text-sm">${new Date()}</p>
  
  `;
  const hisotyFigure = document.getElementById("history-page");

  hisotyFigure.insertBefore(historyItem, hisotyFigure.firstChild);

  // Show Modal----->>
  const modalContainer = document.getElementById("modal-container");

  modalContainer.classList.remove("hidden");
});

// Hide Modal
document.getElementById("close").addEventListener("click", function () {
  const modalContainer = document.getElementById("modal-container");

  modalContainer.classList.add("hidden", true);
});
