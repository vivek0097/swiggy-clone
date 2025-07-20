import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
import {removeItem, clearCart } from "../utils/cartSlice";
import { MdDelete } from "react-icons/md";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch =  useDispatch();

  //--clear cart----fun------
  const handleClearCart = () => {
   dispatch(clearCart());
  }

  //---remove items--------
  const handleRemoveItem = (index) => {
    dispatch(removeItem(index))
  }


  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 border-b pb-2">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
         <div className="w-12/12 m-auto p-2 border border-amber-400">
            {/* <ItemList items={cartItems} /> */}

              {cartItems.map((item, index) => (
                <div key={index} className="flex m-2 p-2 border-b-2 border-gray-200">
                    <div className="w-6/12">
                    <div className="text-left">
                    <strong className="block text-lg font-semibold">{item.name}</strong>
                    <span className="block">₹{item.price || item.defaultPrice}</span>
                    </div>
                </div>

                <div className="w-6/12 p-2">
                    <div className="flex justify-end  ">
                  <div className="w-8/12">
                    <img
                        src={item.imgUrl}
                        alt="item"
                        className="w-28 h-24 object-cover rounded-md shadow-md"
                    />
                    </div>
                    <div className="w-4/12  justify-center align-baseline">
                       <button
                        className="px-2 py-1 text-white shadow-lg relative  bottom-2 right-6 rounded-lg cursor-pointer"
                        onClick={() => handleRemoveItem(index)}
                        >
                        <MdDelete size={22} color="red"/>
                        </button>
                        </div>
                    </div>
                  
                </div>
                </div>
                ))}

          <div className="flex justify-between items-center mt-6">
            <p className="font-semibold text-lg">
              Total Items: <span className="text-indigo-600">{cartItems.length}</span>
            </p>
            <button
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
             onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
