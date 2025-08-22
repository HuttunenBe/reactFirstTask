import { getProducts } from "../services/api";
import type { Product } from "../types/product";
import { useEffect, useState } from "react";

const Products = () => {
const [products, setProducts] = useState<Product[]>([]);
const [searchTerm, setSearchTerm] = useState<string>(""); 

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);
  console.log("Products", products);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)

  )

return (
  <div>
    <h1>Products</h1>
    <input
    type="search"
    placeholder="Please search"
    value={searchTerm}
    onChange = {(e) => setSearchTerm (e.target.value)}
    ></input>
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>ID {product.id}</p>
          <p>Price {product.price}</p>
          <p>Description {product.description}</p>
          <p>Category {product.category}</p>
          <img src={product.image} />
          <p>Rating {product.rating.rate}</p>
          <p> Count {product.rating.count}</p>
        </div>
      ))}

      <div>Products will be here</div>
    </div>
  </div>
);
}

export default Products;
