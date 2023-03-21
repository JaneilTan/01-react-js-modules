import { render, cleanup } from "@testing-library/react";
import FilterBy from "../components/FilterBy";

afterEach(cleanup);

test("renders the FilterBy component as expected", () => {
  const { asFragment } = render(<FilterBy />);
  expect(asFragment()).toMatchSnapshot();
});
