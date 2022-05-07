import type { NextPage } from "next";
import { FC, useState } from "react";
import { trpc } from "../lib/trpc";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import { InferQueryOutput } from "./api/trpc/[trpc]";

type pokemonType = InferQueryOutput<"get-pokemon-by-id">;

const Home: NextPage = () => {
  const [{ firstId, secondId }, setOptions] = useState(() =>
    getOptionsForVote()
  );

  const firstPokemonQuery = trpc.useQuery([
    "get-pokemon-by-id",
    { id: firstId },
  ]);
  const secondPokemonQuery = trpc.useQuery([
    "get-pokemon-by-id",
    { id: secondId },
  ]);

  const voteForPokemon = (pokemonId: number) => {
    console.log(pokemonId);
  };

  if (firstPokemonQuery.isLoading || secondPokemonQuery.isLoading)
    return <div>Loading...</div>;

  return (
    <div className="h-screen w-screen flex flex-col justify-center">
      <div className="text2xl text-center">Which Pokemon is the roundest?</div>
      <div className="max-w-2xl mt-4 mx-auto p-8 border rounded flex justify-between items-center gap-2">
        {!firstPokemonQuery.isLoading &&
          firstPokemonQuery.data &&
          !secondPokemonQuery.isLoading &&
          secondPokemonQuery.data && (
            <>
              <PokemonCard
                pokemon={firstPokemonQuery.data}
                vote={() => voteForPokemon(firstId)}
              />
              <p>vs</p>
              <PokemonCard
                pokemon={secondPokemonQuery.data}
                vote={() => voteForPokemon(secondId)}
              />
            </>
          )}
      </div>
    </div>
  );
};

const PokemonCard: FC<{ pokemon: pokemonType; vote: () => void }> = (props) => {
  return (
    <div className="w-64 h-80 object-fill flex flex-col items-center">
      <img
        src={props.pokemon.sprites.front_default as string}
        className="w-full"
      />
      <p className="text-center text-xl capitalize">{props.pokemon.name}</p>
      <button
        className="p-1 px-2 rounded bg-red-900 mt-1 w-fit"
        onClick={props.vote}
      >
        Rounder
      </button>
    </div>
  );
};

export default Home;
