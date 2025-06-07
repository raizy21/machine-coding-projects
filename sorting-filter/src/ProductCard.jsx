const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate} ★</p>
      <p>{product.category}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductCard;
