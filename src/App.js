import "./App.css";
import products from "./api/products.json";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="container">
      <h1>Sunglass Shop</h1>
      <div className="toolbar">
        <FilterBy />
        <SortBy />
      </div>
      <Products products={products} />
    </div>
  );
};

export default App;
