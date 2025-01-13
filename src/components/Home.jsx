import { ShopCard } from "./ShopCard";
import { ProductObject } from "./Products";

export function HomeLandingPage() {
    return (
        <div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {ProductObject.map((product) => (
                    <ShopCard
                        key={product.id}
                        props={{
                            id: product.id,
                            name: product.name,
                            image: product.image,
                            price: product.price,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
