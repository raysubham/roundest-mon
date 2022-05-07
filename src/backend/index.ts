import * as trpc from "@trpc/server";
import { number, z } from "zod";
import { pokemonClient } from "../lib/pokemon";

export const appRouter = trpc.router().query("get-pokemon-by-id", {
  input: z.object({ id: number() }),
  async resolve({ input }) {
    const pokemon = await pokemonClient.getPokemonById(input.id);
    return { name: pokemon.name, sprites: pokemon.sprites };
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;
