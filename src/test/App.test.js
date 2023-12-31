import { render, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

test("renders the App component as expected", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
