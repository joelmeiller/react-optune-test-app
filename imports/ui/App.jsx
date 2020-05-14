// React
import React from 'react'

// Components
import { AppTemplate } from './components/templates/AppTemplate'

// Pages
import { EventPage } from './pages/EventPage'

export const App = () => (
  <AppTemplate title="Welcome to the OpTune test project">
    <EventPage />
  </AppTemplate>
)
