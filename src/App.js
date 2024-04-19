import { useState } from "react";
import allProducts from "./data (4)";
function App() {
  const [products, setProducts] = useState(allProducts);
  console.log(products);

  //delete product

  const deleteProduct = (id) => {
    const filterProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filterProducts);
  };

  // filter container
  const filterByBrand = (brand) => {
    setProducts(allProducts);
    if (brand == "all") {
      setProducts(allProducts);
    } else {
      const filterBrand = allProducts.filter((product) => {
        return product.brand == brand;
      });
      setProducts(filterBrand);
    }
  };
  //  ================================
  // rating
  const filterByRating = (rating) => {
    if (rating === "all") {
      setProducts(allProducts);
    } else {
      const minRating = parseInt(rating);
      const maxRating = minRating + 0.2;
      const filterRate = allProducts.filter((product) => {
        return product.rating >= minRating && product.rating < maxRating;
      });
      setProducts(filterRate);
    }
  };

  return (
    <div>
      <div className="filter_container">
        <select
          className="input"
          onChange={(e) => filterByBrand(e.target.value)}
        >
          <option value="all">All</option>
          {[
            ...new Set(
              allProducts.map((product) => {
                return product.brand;
              })
            ),
          ].map((brand) => {
            return (
              <option key={Math.random() * new Date()} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>
      </div>
      {/* ============================================ */}
      <div className="rating_container">
        <select
          className="input"
          onChange={(e) => filterByRating(e.target.value)}
        >
          <option value="all">rating</option>
          {[
            ...new Set(
              allProducts.map((product) => {
                return product.rating;
              })
            ),
          ].map((rating) => {
            return (
              <option key={Math.random() * new Date()} value={rating}>
                {rating}
              </option>
            );
          })}
        </select>
      </div>

      <ul className="product_grid">
        {products.map((product) => {
          const {
            id,
            title,
            brand,
            description,
            price,
            discountPercentage,
            thumbnail,
            rating,
          } = product;
          return (
            <li key={id}>
              <img src={thumbnail} alt="" width={400} />
              <div className="card_body">
                <h2>{title}</h2>
                <p>
                  <b>Brand</b>: {brand}
                </p>
                <p>
                  <b>Description</b>: {description}
                </p>
                <p>
                  <b>Price</b>: $ {price}
                </p>
                <p>
                  <b>Discount</b>: {discountPercentage}%
                </p>
                <p>
                  <b>Rating</b>: {rating}
                </p>
              </div>
              <button className="btn" onClick={() => deleteProduct(id)}>
                <a>Delete</a>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
