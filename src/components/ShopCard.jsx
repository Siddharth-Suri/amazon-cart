import { useRecoilState,useRecoilValue,useSetRecoilState } from "recoil";
import { cartItems } from "../store/ItemCartState";
import { Navigate, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { sumCartItems } from "../store/ItemCartSum";
import { Items } from "../store/ItemsForCartState";

export const ShopCard= React.memo(({props})=>{
    const Navigate = useNavigate();
    const [currentItemCount,setCurrentItemCount] = useRecoilState(Items)
    const [currentSum, setCurrentSumCart] = useRecoilState(sumCartItems);
    function NavigateToCart() {
      Navigate("/cart");
    }
    function updateSumCart(sum){
        {setCurrentSumCart((prevCart)=>prevCart+sum)}  
    }
    

    const [visibility,setVisibility]=useState(false)
    const [currentCart,setCurrentCart] = useRecoilState(cartItems);   
    console.log(visibility); 
    
    return (
      <div className="items-center text-center ">
        <div className=" m-3 border-3 p-3 ">
          <div className="p-5 m-1 h-36 flex items-center justify-center">
            <img className="w-40 h-40 cursor-pointer" src={props.image}></img>
            {console.log(props.image)}
          </div>
          <div className="p-2">{props.name}</div>
          <div className="p-2">₹{props.price}</div>
          
          <div
            className=" rounded-full	bg-blue-500 p-3 border-2 m-3 cursor-pointer hover:bg-blue-900 shadow-xl	"
            onClick={() => {
              setVisibility(true);
              updateSumCart(props.price)
              setCurrentItemCount((prevCart)=>prevCart+1)
              setCurrentCart((prevCart) => {
                if (prevCart[props.id]) {
                  return {
                    ...prevCart,
                    [props.id]: {
                      ...prevCart[props.id],
                      quantity: prevCart[props.id].quantity + 1,
                    },
                  };
                } else {
                  return {
                    
                    ...prevCart,
                    [props.id]: {
                      name: props.name,
                      price: props.price,
                      image: props.image,
                      quantity: 1,
                    },
                  };
                }
              });
            }}
          >
            Add to cart
          </div>

          {visibility ? (
            <div
              className=" rounded-full bg-yellow-500 p-3 border-2 m-3 cursor-pointer hover:bg-yellow-900 shadow-xl"
              onClick={NavigateToCart}
            >
              Go to cart
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
})