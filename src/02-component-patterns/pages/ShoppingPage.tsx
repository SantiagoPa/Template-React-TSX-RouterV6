import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div className="flex-1 m-4">
      <h1 className="text-5xl">Shopping page</h1>
      <hr />
      <div className=" flex flex-row gap-x-5 gap-y-5 flex-wrap mt-2">
        <ProductCard product={product}>
          <ProductCard.Image className="p-4" />
          <ProductCard.Title
            title="Caffe Mug - Props"
            className="text-purple-900"
          />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="p-4" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle className="text-white" />
          <ProductButtons className="text-white custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
