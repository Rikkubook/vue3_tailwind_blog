import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import './index.css'
import routes from '~pages'


export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  },
)