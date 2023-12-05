import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const searchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
// loader must return something!!
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  const response = await axios.get(`${searchURL}${searchTerm}`);
  // console.log(response);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
