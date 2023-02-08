import { render, screen } from "@testing-library/react";
import { Header } from "./header";
describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then, the title <h1> should be in the document", () => {
      render(<Header></Header>);

      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
