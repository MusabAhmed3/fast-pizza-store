import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import { getTotalCartQuantity } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      {totalCartQuantity ? <CartOverview /> : null}
    </div>
  );
}

export default AppLayout;
