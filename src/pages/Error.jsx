import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='404' />
          <h3>not found</h3>
          <Link to='/'>go back</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>error</div>
    </Wrapper>
  );
};
export default Error;
