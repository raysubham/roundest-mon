import { AppRouter, appRouter } from "../../../backend";
import * as trpcNext from "@trpc/server/adapters/next";
import { inferProcedureOutput } from "@trpc/server";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});

export type InferQueryOutput<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;
