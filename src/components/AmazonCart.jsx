import { sumCartItems } from "../store/ItemCartSum";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartItems } from "../store/ItemCartState";
export function MainCart (){
    const [currentCart,SetCurrentCart]=useRecoilState(cartItems)
    const sumCurrentCart=useRecoilValue(sumCartItems)
    return (
      <div className=" h-full w-full bg-gray-500 ">
        <div className="justify-between md:flex">
          <div className=" font-bold text-2xl w-full  bg-white  border-gray-600 p-5 m-5 border-4">
            Shopping Cart
            <div>
              {Object.entries(currentCart).map(([key, product]) => (
                <div
                  key={product.id}
                  className="justify-between border-b-2 p-2 m-3 text-base align-center items-center sm:flex "
                >
                  <img className="w-32 h-32" src={product.image}></img>
                  <div>{product.name}</div>

                  <div>₹{product.price}</div>
                  <div>Qt: {product.quantity}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="font-bold text-2xl w-80 border-4 border-gray-600 shadow-md bg-white p-8 m-6">
            Order Summary
            <div></div>
            <div>
              <div className="font-normal text-lg m-2 p-2">Items:</div>
              <div className="font-normal text-lg m-2 p-2">
                Order Total:{sumCurrentCart}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}