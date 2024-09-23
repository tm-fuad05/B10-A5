// card-1
document.getElementById("donate-1").addEventListener("click", function () {
  const addMoney = getInputFieldValueById("input-1");

  document.getElementById("input-1").value = "";

  if (isNaN(addMoney)) {
    alert("Please input a number");
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
  historyItem.className = "p-5 border border-secondary";
  historyItem.innerHTML = `
  
  <h5 class="text-lg font-bold">${addMoney} TK is donated for ${noakhali}</h5>
  <p class="text-para text-sm">${new Date().toLocaleDateString()}</p>
  
  `;
  const hisotyFigure = document.getElementById("history-page");

  hisotyFigure.insertBefore(historyItem, hisotyFigure.firstChild);
});

// card-2
document.getElementById("donate-2").addEventListener("click", function () {
  const addMoney2 = getInputFieldValueById("input-2");

  document.getElementById("input-2").value = "";

  if (isNaN(addMoney2)) {
    alert("Please input a number");
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
  historyItem.className = "p-5 border border-secondary";
  historyItem.innerHTML = `
  
  <h5 class="text-lg font-bold">${addMoney2} TK is donated for ${feni}</h5>
  <p class="text-para text-sm">${new Date().toLocaleDateString()}</p>
  
  `;
  const hisotyFigure = document.getElementById("history-page");

  hisotyFigure.insertBefore(historyItem, hisotyFigure.firstChild);
});

// card-3
document.getElementById("donate-3").addEventListener("click", function () {
  const addMoney3 = getInputFieldValueById("input-3");

  document.getElementById("input-3").value = "";

  if (isNaN(addMoney3)) {
    alert("Please input a number");
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
  historyItem.className = "p-5 border border-secondary";
  historyItem.innerHTML = `
  
  <h5 class="text-lg font-bold">${addMoney3} TK is donated for ${movement}</h5>
  <p class="text-para text-sm">${new Date().toLocaleDateString()}</p>
  
  `;
  const hisotyFigure = document.getElementById("history-page");

  hisotyFigure.insertBefore(historyItem, hisotyFigure.firstChild);
});
