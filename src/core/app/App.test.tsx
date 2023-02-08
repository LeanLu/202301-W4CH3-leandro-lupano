import { render } from "@testing-library/react";
import { HomePage } from "../../features/home/home";
import { Header } from "../header/header";
import App from "./App";

jest.mock("../header/header");
jest.mock("../../features/home/home");
describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call Header and HomePage components", () => {
      render(<App />);
      expect(Header).toHaveBeenCalled();
      expect(HomePage).toHaveBeenCalled();
    });
  });
});
