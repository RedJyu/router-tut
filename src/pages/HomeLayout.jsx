import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  // context can be used to transfer everything like state etc
  const value = 'some value';
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='isLoading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};
export default HomeLayout;
