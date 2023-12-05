import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  Cocktail,
  HomeLayout,
  Landing,
  Newsletter,
  Error,
  SinglePageError,
} from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletter } from './pages/Newsletter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: '/cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
        action: newsletter,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
