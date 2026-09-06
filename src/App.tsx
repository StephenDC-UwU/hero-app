import './App.css'
import { FavoriteHeroProvider } from './heroes/context/FavoriteHeroContext';
import { AppRouter } from './router/app.router'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FavoriteHeroProvider>
          <AppRouter />
          <ReactQueryDevtools initialIsOpen={false} />
        </FavoriteHeroProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
