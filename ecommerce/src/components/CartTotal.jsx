import { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={'CART'} text2={' TOTAL'} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-md ">
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {' '}
            {currency}{' '}
            {getCartAmount() === 0 ? 0 : getCartAmount()}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
