export function ShopCard(){
    
    return (
      <div className="items-center text-center">
        <div className=" m-3 border-3 p-3 ">
          <div className="p-5 m-1 h-36 flex items-center justify-center">
            Image
          </div>
          <div className="p-2">Basic keyboard</div>
          <div className="p-2">Price</div>
          <div className="bg-blue-500 p-3 border-4 m-3 cursor-pointer hover:bg-blue-900">Add to cart</div>
        </div>
      </div>
    );
}