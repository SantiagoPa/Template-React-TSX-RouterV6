import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div className="flex-1 m-4">
        <h1 className="text-5xl">Shopping page</h1>
        <hr />
        <div className=" flex flex-row gap-x-5 gap-y-5 flex-wrap mt-2">
            <ProductCard  product={product}>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard  product={product}>
                <ProductImage />
                <ProductTitle title="Caffe Mug - Add"/>
                <ProductButtons />
            </ProductCard>  
        </div>
    </div>
  )
}
