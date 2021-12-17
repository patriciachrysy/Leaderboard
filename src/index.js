import './style.css';
import addNewScore from './scoreActions.js';

let scores = [
  {
    playerName: 'Laure',
    playerScore: 14,
  },
  {
    playerName: 'Andre',
    playerScore: 250,
  },
  {
    playerName: 'Stella',
    playerScore: 400,
  },
];

const displayScore = (score) => {
  const scoreNode = document.createElement('li');
  const nameText = document.createElement('b');
  const scoreText = document.createElement('span');

  nameText.innerText = `${score.playerName}:`;
  scoreText.innerText = score.playerScore;

  scoreNode.appendChild(nameText);
  scoreNode.appendChild(scoreText);

  return scoreNode;
};

const manageForm = () => {
  const scoreForm = document.querySelector('#score-form');
  const submitButton = document.querySelector('#add-score');
  const playerNameField = document.querySelector('#player');
  const playerScoreField = document.querySelector('#score');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const playerName = playerNameField.value;
    const playerScore = playerScoreField.value;
    if (playerName.trim().length > 0 && playerScore) {
      scores = addNewScore(playerName, playerScore, scores);
      scoreForm.reset();
    }
  });
};

const listAllScores = () => {
  const scoreDiv = document.querySelector('.score-list');
  scoreDiv.innerHTML = '';
  const scoreList = document.createElement('ul');

  if (scores.length > 0) {
    scores.map((score) => scoreList.appendChild(displayScore(score)));
    scoreDiv.appendChild(scoreList);
  } else {
    scoreDiv.innerText = 'Add a new score to view it here';
  }
};

window.onload = () => {
  manageForm();

  const refreshButton = document.querySelector('#refresh-button');

  refreshButton.addEventListener('click', () => {
    listAllScores();
  });
};