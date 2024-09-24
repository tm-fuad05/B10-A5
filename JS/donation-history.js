document.getElementById("history-btn").addEventListener("click", function () {
  const historyBtn = document.getElementById("history-btn");

  historyBtn.classList.remove("bg-secondary", "text-para");
  historyBtn.classList.add("bg-primary", "text-black");

  const donationBtn = document.getElementById("donation-btn");

  donationBtn.classList.remove("bg-primary");
  donationBtn.classList.add("bg-secondary", "text-para");

  const donationPage = document.getElementById("donation-page");

  donationPage.classList.add("hidden", true);

  const historyFigure = document.getElementById("history-page");
  historyFigure.classList.remove("hidden");
});
document.getElementById("donation-btn").addEventListener("click", function () {
  const historyBtn = document.getElementById("history-btn");

  historyBtn.classList.add("bg-secondary", "text-para");
  historyBtn.classList.remove("text-black");

  const donationBtn = document.getElementById("donation-btn");

  donationBtn.className = "bg-primary px-4 py-2 rounded-md font-bold";

  const donationPage = document.getElementById("donation-page");

  donationPage.classList.remove("hidden", true);

  const historyFigure = document.getElementById("history-page");
  historyFigure.classList.add("hidden", true);
});
