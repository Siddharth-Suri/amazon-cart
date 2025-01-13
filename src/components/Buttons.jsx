import {
    addQuantity,
    itemCountAdd,
    itemCountSub,
    subQuantity,
    updateSumCartAdd,
    updateSumCartSub,
} from "./cartUtilities";
import { cartItems } from "../store/ItemCartState";
import { useRecoilState } from "recoil";
import { sumCartItems } from "../store/ItemCartSum";
import { Items } from "../store/ItemsForCartState";
export function Buttons({ props }, setCurrentCart) {
    // console.log(setCurrentCart);
    const [currentItemCount, setCurrentItemCount] = useRecoilState(Items); //number of items
    const [currentSum, setCurrentSumCart] = useRecoilState(sumCartItems);
    console.log(props);
    const [currentForButton, setCurrentForButton] = useRecoilState(cartItems);
    return (
        <div className="flex items-center align-middle gap-2">
            <div
                className="bg-slate-400 p-1 pl-2 pr-2 border-2 border-gray-300 w-auto cursor-pointer hover:bg-slate-500"
                onClick={() => {
                    addQuantity(props, setCurrentForButton);
                    updateSumCartAdd(props.price, setCurrentSumCart);
                    itemCountAdd(setCurrentItemCount);
                }}
            >
                +
            </div>
            <div
                className="bg-slate-400  p-1 pl-2 pr-2 border-2 border-gray-300 w-auto cursor-pointer hover:bg-slate-500"
                onClick={() => {
                    itemCountSub(setCurrentItemCount);
                    updateSumCartSub(props.price, setCurrentSumCart);
                    subQuantity(props, setCurrentForButton);
                }}
            >
                -
            </div>
        </div>
    );
}
