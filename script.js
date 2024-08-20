const fictionalData = [
  { score: 90, percentage: 90 },
  { score: 80, percentage: 80 },
  { score: 75, percentage: 70 },
  { score: 65, percentage: 65 },
  { score: 60, percentage: 50 },
  { score: 50, percentage: 40 },
  { score: 40, percentage: 30 },
  { score: 30, percentage: 20 },
  { score: 20, percentage: 10 },
  { score: 10, percentage: 5 },
  { score: 0, percentage: 0 },
];
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item, index) => {
      document.querySelectorAll(".container .icon img")[index].src = item.icon;
      document.querySelectorAll(".icon p")[index].textContent = item.category;
      document.querySelectorAll(".container-100 span")[index].textContent =
        item.score;
      document.querySelector(`#score${index + 1}`).value = item.score;
    });
  })
  .catch((error) => console.error("Erro ao carregar o JSON:", error));
function calculate() {
  let scores = [
    parseFloat(document.querySelector("#score1").value) || 0,
    parseFloat(document.querySelector("#score2").value) || 0,
    parseFloat(document.querySelector("#score3").value) || 0,
    parseFloat(document.querySelector("#score4").value) || 0,
  ];

  let scoreArrays = scores.map(fazerMedia);

  function fazerMedia(num) {
    return num / 4;
  }

  let somaTotal = 0;
  for (let i = 0; i < scoreArrays.length; i++) {
    somaTotal += scoreArrays[i];
  }
  let result = document.querySelector("#result");
  result.innerText = somaTotal.toFixed(0);
  let percentSpan = document.querySelector("#percent");
  let percentage = calculatePercentage(somaTotal);
  percentSpan.textContent = `${percentage}%`;

  function calculatePercentage(score) {
    let percentage = 0;
    for (let i = 0; i < fictionalData.length; i++) {
      if (score >= fictionalData[i].score) {
        percentage = fictionalData[i].percentage;
        break;
      }
    }
    return percentage;
  }
}