import HomeView from "./components/Home/HomeView";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<HomeView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
