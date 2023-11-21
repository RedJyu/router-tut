import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  Cocktail,
  HomeLayout,
  Landing,
  Newsletter,
  Error,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: (
      <div>
        <About />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
