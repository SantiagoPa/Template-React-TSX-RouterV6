
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/";

import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from "../data/products";
import "../styles/custom-styles.css";


export const ShoppingPage = () => {
  
  const {shoppingCart, onProductCountChange }  = useShoppingCart();

  return (
    <div className="flex-1 m-4">
      <h1 className="text-5xl">Shopping page</h1>
      <hr />
      <div className=" flex flex-row gap-x-5 gap-y-5 flex-wrap mt-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            value={ shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage
              className="p-4"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-white" />
            <ProductButtons className="text-white custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {
          Object.entries( shoppingCart ).map( ([key, product]) => (
            <ProductCard
              style={{ width: "150px" }}
              product={product}
              className="bg-dark"
              key={key}
              onChange={ onProductCountChange }
              value={ product.count }
            >
              <ProductImage
                className="p-4"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className="text-white text-sm"/>
              <ProductButtons className="text-white custom-buttons flex justify-center" />
            </ProductCard>
          ))
        }
      </div>
    </div>
  );
};
