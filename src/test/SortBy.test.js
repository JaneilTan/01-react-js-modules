import { render, cleanup } from "@testing-library/react";
import SortBy from "../components/SortBy";

afterEach(cleanup);

test("renders the SortBy component as expected", () => {
  const { asFragment } = render(<SortBy />);
  expect(asFragment()).toMatchSnapshot();
});
