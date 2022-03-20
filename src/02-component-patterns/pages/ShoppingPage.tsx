import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/";

import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div className="flex-1 m-4">
      <h1 className="text-5xl">Shopping page</h1>
      <hr />
      <div className=" flex flex-row gap-x-5 gap-y-5 flex-wrap mt-2">
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, increaseBy, count, isMaxCountReached }) => (
            <>
              <ProductImage
                className="p-4"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className="text-white" />
              <ProductButtons className="text-white custom-buttons" />

              <button
                className="bg-white px-2 m-2" 
                onClick={ reset } 
              > 
                Reset 
              </button>

              <button className="bg-white px-2 m-2" 
              onClick={()=>increaseBy(-2)}>-2</button>
              {
                !isMaxCountReached && <button className="bg-white px-2 m-2" 
                onClick={()=>increaseBy(+2)}>+2</button>
              }
              <span className="text-white">count: {count}</span>

            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
