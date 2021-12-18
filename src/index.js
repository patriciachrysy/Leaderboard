import './style.css';
import addNewScore from './scoreActions.js';
import { fetchScores } from './apiActions.js';

let scores = [];

const displayScore = (score) => {
  const scoreNode = document.createElement('li');
  const nameText = document.createElement('b');
  const scoreText = document.createElement('span');

  nameText.innerText = `${score.user}:`;
  scoreText.innerText = score.score;

  scoreNode.appendChild(nameText);
  scoreNode.appendChild(scoreText);

  return scoreNode;
};

const manageForm = () => {
  const scoreForm = document.querySelector('#score-form');
  const submitButton = document.querySelector('#add-score');
  const playerNameField = document.querySelector('#player');
  const playerScoreField = document.querySelector('#score');
  const messageSection = document.querySelector('#message');

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const playerName = playerNameField.value;
    const playerScore = playerScoreField.value;
    if (playerName.trim().length > 0 && playerScore) {
      const message = await addNewScore(playerName, playerScore);
      scoreForm.reset();
      messageSection.innerText = '';
      if (message) {
        messageSection.classList.add('success');
        messageSection.innerText = message;
      } else {
        messageSection.classList.add('error');
        messageSection.innerText = 'Error while storing your score';
      }
    }
  });
};

const listAllScores = async () => {
  const scoreDiv = document.querySelector('.score-list');
  scoreDiv.innerHTML = '';
  const scoreList = document.createElement('ul');
  scores = await fetchScores();
  if (scores.length > 0) {
    scores.map((score) => scoreList.appendChild(displayScore(score)));
    scoreDiv.appendChild(scoreList);
  } else {
    scoreDiv.innerText = 'Add a new score to view it here';
  }
};

window.onload = () => {
  manageForm();
  listAllScores();

  const refreshButton = document.querySelector('#refresh-button');

  refreshButton.addEventListener('click', () => {
    listAllScores();
  });
};