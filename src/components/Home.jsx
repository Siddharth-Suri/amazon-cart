import { ShopCard } from "./ShopCard";

export function HomeLandingPage (){
    return (
      <div>
        <div className="flex grid grid-cols-3 gap-3 ">
          <ShopCard></ShopCard>
          <ShopCard></ShopCard>
          <ShopCard></ShopCard>
          <ShopCard></ShopCard>
          <ShopCard></ShopCard>
        </div>
      </div>
    );
}