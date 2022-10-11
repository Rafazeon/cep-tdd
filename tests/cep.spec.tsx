import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Cep from "../components/cep";

describe("Cep Component", () => {
    test("Cep não pode ser null", () => {
      render(<Cep />);

      const inputField = screen.findByTestId('cep');
      expect(inputField).not.toBeNull()
    })

    test("Cep deve retornar um endereço válido", async() => {
      render(<Cep />);

      const inputField = await screen.findByTestId('cep');
      userEvent.unhover(inputField);
      await waitFor(() => expect(screen.queryByText('Florianópolis')));
    })
});