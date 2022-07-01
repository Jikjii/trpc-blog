import {createReactQueryHooks} from '@trpc/react'
import { AppRouter } from '../server/route/app.router'

// add appRouter as generic
export const trpc = createReactQueryHooks<AppRouter>()