const MAX_NUMBER = 5465;

const getRandomPokemonId: (skipId?: number) => number = (skipId) => {
  const randomId = Math.floor(Math.random() * MAX_NUMBER) + 1;
  if (skipId) {
    if (randomId !== skipId) return randomId;
    return getRandomPokemonId(skipId);
  }
  return randomId;
};

export const getOptionsForVote = () => {
  const firstId = getRandomPokemonId();
  const secondId = getRandomPokemonId(firstId);

  return [firstId, secondId];
};
