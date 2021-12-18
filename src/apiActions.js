const endPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'FSPfllmr64Jubp1b2SJQ';

export const fetchScores = async () => {
  const response = await fetch(`${endPoint + gameId}/scores`);
  const scores = await response.json();
  return scores.result;
};

export const storeScore = async (score) => {
  const response = await fetch(`${endPoint + gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify(score),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const message = await response.json();
  return message.result;
};