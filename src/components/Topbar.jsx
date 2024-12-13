import { CartIcon } from "../assets/CartIcon";
import { Routes , useNavigate } from "react-router-dom"
export function TopBar() {

    const Navigate = useNavigate()
    function NavigateToCart(){
        Navigate('/cart')
        
    }
    function NavigateToHome(){
        Navigate('/')
        
    }
    return (
        <div>
        <div className="flex items-center justify-between  bg-gray-700 h-28 ">
            <div className="text-2xl font-bold pl-5 border-transparent cursor-pointer" onClick={NavigateToHome}>Amazon.in</div>
            <div className="flex space-x-5 cursor-pointer">
            <div className="">Hello User</div>

            
            <div className="pt-0.5 pr-5 cursor-pointer" onClick={NavigateToCart}>
                
                <CartIcon></CartIcon>
            </div>
            
            </div>
        </div>
        </div>
    );
}
