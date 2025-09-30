import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default Home;
