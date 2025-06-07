import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
