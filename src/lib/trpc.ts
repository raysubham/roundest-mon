import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "../backend";

export const trpc = createReactQueryHooks<AppRouter>();
