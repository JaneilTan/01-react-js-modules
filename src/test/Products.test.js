import { render, cleanup } from "@testing-library/react";
import Products from "../components/Products";
import productsList from "../api/products.json";

afterEach(cleanup);

test("renders the Products component as expected", () => {
  const { asFragment } = render(<Products products={productsList} />);
  expect(asFragment()).toMatchSnapshot();
});
