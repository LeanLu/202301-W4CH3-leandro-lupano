import { render, screen } from "@testing-library/react";
import { Character } from "../models/Character";
import { Card } from "./card";

describe("Given Card component", () => {
  describe("When it is render", () => {
    test("Then, the <h2> name should be in the document", () => {
      render(
        <Card
          status={true}
          characterName={"Pepe"}
          family={"Perez"}
          age={20}
          picture={"algo"}
        ></Card>
      );
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
