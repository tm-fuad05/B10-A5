document.getElementById("history-btn").addEventListener("click", function () {
  const historyBtn = document.getElementById("history-btn");

  historyBtn.classList.remove("border", "border-stroke", "text-para");
  historyBtn.classList.add("bg-primary", "text-black");

  const donationBtn = document.getElementById("donation-btn");

  donationBtn.classList.remove("bg-primary");
  donationBtn.classList.add("text-para", "border", "border-stroke");

  const donationPage = document.getElementById("donation-page");

  donationPage.classList.add("hidden", true);

  const historyFigure = document.getElementById("history-page");
  historyFigure.classList.remove("hidden");
});
document.getElementById("donation-btn").addEventListener("click", function () {
  const historyBtn = document.getElementById("history-btn");

  historyBtn.classList.add("border", "border-stroke", "text-para");
  historyBtn.classList.remove("bg-primary", "text-black");

  const donationBtn = document.getElementById("donation-btn");

  donationBtn.classList.add("bg-primary");
  donationBtn.classList.remove("text-para", "border", "border-stroke");

  const donationPage = document.getElementById("donation-page");

  donationPage.classList.remove("hidden", true);

  const historyFigure = document.getElementById("history-page");
  historyFigure.classList.add("hidden", true);
});
