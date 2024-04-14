import { Product } from "../interfaces/Product";

type Props = {
  product: Product[];
};
const Products = ({ product }: Props) => {
  console.log(product);

  return <div>Product</div>;
};

export default Products;
