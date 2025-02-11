import React, { useMemo } from "react";
import { CartIcon } from "../assets/CartIcon";
import { Routes , useNavigate } from "react-router-dom"
export const TopBar = React.memo(()=> {

    const Navigate = useNavigate()
    function NavigateToCart(){
        Navigate('/cart')
        
    }
    function NavigateToHome(){
        Navigate('/')
        
    }
    return (
      <div>
        <div className=" text-white	flex items-center justify-between  bg-gray-800 h-28 ">
          <div
            className="text-2xl font-bold pl-5 border-transparent cursor-pointer"
            onClick={NavigateToHome}
          >
            Amazon.in
          </div>
          <div className="flex space-x-5 cursor-pointer">
            <div className="">Hello User</div>

            <div
              className="pt-0.5 pr-5 cursor-pointer"
              onClick={NavigateToCart}
            >
              <CartIcon></CartIcon>
            </div>
          </div>
        </div>
      </div>
    );
})
