import {storeScore} from './apiActions.js';

export default async (player, score) => {
  const newScore = {
    user: player,
    score: score,
  };

  let message = await storeScore(newScore);
  return message;
};
