import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Cep from "../components/cep";

describe("Cep Component", () => {
    test("Cep deve conter 8 caracteres", () => {
      render(<Cep />);
  
      const cepLength = screen.getByTestId("cep");
  
      expect(cepLength).toEqual(8);
    });
})