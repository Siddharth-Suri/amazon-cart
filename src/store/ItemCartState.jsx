import React from React
import { RecoilRoot } from 'recoil';
import { atom } from 'recoil';


export const cartItems = atom({
    key:'cartItems',
    default:{}
})