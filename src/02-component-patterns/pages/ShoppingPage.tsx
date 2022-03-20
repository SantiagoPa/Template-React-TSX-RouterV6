import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/";

import { products } from "../data/products";


const product = products[0];

export const ShoppingPage = () => {
  return (
    <div className="flex-1 m-4">
      <h1 className="text-5xl">Shopping page</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
