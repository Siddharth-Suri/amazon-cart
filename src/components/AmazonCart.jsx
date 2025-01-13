import { sumCartItems } from "../store/ItemCartSum";
import { constSelector, useRecoilState, useRecoilValue } from "recoil";
import { cartItems } from "../store/ItemCartState";
import { Items } from "../store/ItemsForCartState";
import { Buttons } from "./Buttons";
import { object } from "zod";
export function MainCart() {
    const [currentCart, setCurrentCart] = useRecoilState(cartItems);
    const sumCurrentCart = useRecoilValue(sumCartItems);
    const currentItems = useRecoilValue(Items);
    return (
        <div className=" h-full w-full bg-gray-500 ">
            <div className="justify-between font-mono md:flex">
                <div className=" font-bold text-2xl w-full  bg-white  border-gray-600 p-5 m-5 border-4">
                    Shopping Cart
                    <div>
                        {Object.entries(currentCart).map(([key, product]) => (
                            <div
                                key={key}
                                className="justify-between border-b-2 p-2 m-3 font-normal text-base align-center items-center sm:flex "
                            >
                                <img
                                    className="w-32 h-32"
                                    src={product.image}
                                ></img>
                                <div>{product.name}</div>

                                <div>₹ {product.price}</div>
                                <div>Qt: {product.quantity}</div>
                                {/* {console.log(setCurrentCart)} */}
                                <Buttons props={product} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="font-bold text-2xl w-80 border-4 border-gray-600 shadow-md bg-white p-8 m-6">
                    <div className="p-0 m-5 items-center text-center">
                        Order Summary
                    </div>
                    <div>
                        <div className="font-normal font-mono text-lg m-2 p-2">
                            Items: {currentItems}
                        </div>
                        <div className="font-normal font-mono text-lg m-2 p-2">
                            Total: ₹ {sumCurrentCart}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
