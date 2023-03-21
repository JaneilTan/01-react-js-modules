import { render, cleanup } from "@testing-library/react";
import Product from "../components/Product";

afterEach(cleanup);

const description =
  "The sunglasses Ronnie Mac would wear if Ronnie Mac wore sunglasses.";
const image = "https://files.stripe.com/links/fl_test_HG5Y5oY5y2SlpQMclkQ0rjXm";
const name = "THE RONNIE MAC";

test("renders the Product component as expected", () => {
  const { asFragment } = render(
    <Product image={image} description={description} name={name} />
  );
  expect(asFragment()).toMatchSnapshot();
});
