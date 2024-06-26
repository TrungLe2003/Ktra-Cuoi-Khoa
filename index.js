const listImgDice = [
  "./img/bau.png",
  "./img/ca.png",
  "./img/cua.png",
  "./img/ga.png",
  "./img/huou.png",
  "./img/tom.png",
];
const dice1 = document.getElementById("dice1");
dice1.src = listImgDice[0];
const dice2 = document.getElementById("dice2");
dice2.src = listImgDice[0];
const dice3 = document.getElementById("dice3");
dice3.src = listImgDice[0];
const img1 = document.getElementById("img1");
function rollDice() {
  let i = 0;
  const interval = setInterval(() => {
    const randomIndex1 = Math.floor(Math.random() * listImgDice.length);
    dice1.src = listImgDice[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * listImgDice.length);
    dice2.src = listImgDice[randomIndex2];
    const randomIndex3 = Math.floor(Math.random() * listImgDice.length);
    dice3.src = listImgDice[randomIndex3];
    i++;
    if (i >= 100) {
      clearInterval(interval);
    }
  }, 50);
}

const numbers = [0, 0, 0, 0, 0, 0, 0];
document.querySelectorAll(".choose").forEach((choose, index) => {
  choose.addEventListener("click", function () {
    const totalVotes = numbers.reduce((acc, curr) => acc + curr, 0);
    if (totalVotes < 3) {
      numbers[index]++;
      if (numbers[index] > 3) {
        numbers[index] = 0;
      }
      document.getElementById(`number${index + 1}`).textContent =
        numbers[index];
    } else {
      alert("Điểm cược không được lớn hơn 3");
    }
  });
});
function resetVotes() {
  numbers.fill(0);
  document.querySelectorAll(".vote").forEach((vote, index) => {
    vote.textContent = 0;
  });
}
