import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import { onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
  
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{
      counter,
      increaseBy, 
      product
    }}>
      <div 
        style={ style }
        className={`${styles.productCard} ${className ? className : ''}` }>
        {children}
        {/* <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
      </div>
    </Provider>
  );
};
