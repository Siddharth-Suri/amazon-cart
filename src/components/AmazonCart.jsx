import { useNavigate } from "react-router";
import { sumCartItems } from "../store/ItemCartSum";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartItems } from "../store/ItemCartState";
export function MainCart (){
    const [currentCart,SetCurrentCart]=useRecoilState(cartItems)
    const [sumCurrentCart]=useRecoilValue(sumCartItems)
    return (
      <div className=" h-screen w-full bg-gray-500 ">
        <div className="flex justify-between">
          <div className=" font-bold text-2xl w-80 bg-white p-5 m-5 border-4">
            Shopping Cart
            <div className=""></div>
          </div>
          <div className="font-bold text-2xl w-80 bg-white p-8 m-6">
            Order Summary
            <div>
              <div className="font-normal text-lg m-2 p-2">Items:</div>
              <div className="font-normal text-lg m-2 p-2">Order Total:{sumCurrentCart}</div>
            </div>
          </div>
        </div>
      </div>
    );
}