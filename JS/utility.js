function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTotalValueById(id) {
  const total = document.getElementById(id).innerText;
  const totalNumber = parseFloat(total);
  return totalNumber;
}
