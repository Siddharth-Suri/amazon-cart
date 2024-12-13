import { useSetRecoilState } from "recoil";
import { cartItems } from "../store/ItemCartState";
import React from "react";
export const ShopCard= React.memo(({props})=>{
    const [SetCurrentCart]=useSetRecoilState(cartItems)
    return (
      <div className="items-center text-center ">
        <div className=" m-3 border-3 p-3 ">
          <div className="p-5 m-1 h-36 flex items-center justify-center">
            <img className="w-40 h-40 cursor-pointer" src={props.image}></img>
            {console.log(props.image)}
          </div>
          <div className="p-2">{props.name}</div>
          <div className="p-2">₹{props.price}</div>
          <div className=" rounded-full	bg-blue-500 p-3 border-2 m-3 cursor-pointer hover:bg-blue-900 shadow-xl	"
                onClick={}>
            Add to cart
          </div>
        </div>
      </div>
    );
})