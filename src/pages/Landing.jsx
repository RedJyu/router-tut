import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const searchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
// loader must return something!!
export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get(`${searchURL}${searchTerm}`);
  console.log(response);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return <h1>Landing</h1>;
};
export default Landing;
