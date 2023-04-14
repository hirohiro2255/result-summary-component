const button = document.querySelector('.button');
const score = document.querySelector('#score');
const reactionHeader = document.querySelector('#reaction-score');
const memoryHeader = document.querySelector('#memory-score');
const verbalHeader = document.querySelector('#verbal-score');
const visualHeader = document.querySelector('#visual-score');
const resultStatus = document.querySelector('#result-status');
const resultDetail = document.querySelector('#result-detail');

button.addEventListener('click', () => {
  const reactionScore = Math.floor(Math.random() * 100) + 1;
  const memoryScore = Math.floor(Math.random() * 100) + 1;
  const verbalScore = Math.floor(Math.random() * 100) + 1;
  const visualScore = Math.floor(Math.random() * 100) + 1;

  reactionHeader.textContent = reactionScore;
  memoryHeader.textContent = memoryScore;
  verbalHeader.textContent = verbalScore;
  visualHeader.textContent = visualScore;
  const result = Math.floor(
    (reactionScore + memoryScore + verbalScore + visualScore) / 4
  );
  score.textContent = result;
  if (result <= 20) {
    resultStatus.textContent = 'Meh!';
  } else if (result <= 40) {
    resultStatus.textContent = 'Okay..';
  } else if (result <= 60) {
    resultStatus.textContent = 'Nice';
  } else if (result <= 80) {
    resultStatus.textContent = 'Great';
  } else {
    resultStatus.textContent = 'Super!';
  }
  resultDetail.textContent = `Your performance exceed ${Math.floor(
    Math.random() * 100
  )}% of the people conducting the test here!`;
});
