export default (player, score, scores) => {
  const newScore = {
    playerName: player,
    playerScore: score,
  };

  scores.push(newScore);
  return scores;
};
