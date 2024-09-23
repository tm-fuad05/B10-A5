// card-1
document.getElementById("donate-1").addEventListener("click", function () {
  const addMoney = getInputFieldValueById("input-1");

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
});

// card-2
document.getElementById("donate-2").addEventListener("click", function () {
  const addMoney2 = getInputFieldValueById("input-2");

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
});

// card-3
document.getElementById("donate-3").addEventListener("click", function () {
  const addMoney = getInputFieldValueById("input-3");

  if (isNaN(addMoney)) {
    alert("Please input a number");
    return;
  }

  const deposit = getTotalValueById("total-3");
  const updatedDeposit = deposit + addMoney;

  const bankBalance = getTotalValueById("bank-balance");

  if (addMoney > bankBalance) {
    alert("You don't have enough money");
    return;
  }

  const updatedBankBalance = bankBalance - addMoney;

  document.getElementById("bank-balance").innerText = updatedBankBalance;

  document.getElementById("total-3").innerText = updatedDeposit;
});
