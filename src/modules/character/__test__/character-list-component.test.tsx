import { render, screen } from "@testing-library/react";
import CharacterCard from "../components/character-card.component";
import { MemoryRouter as Router } from "react-router-dom";
import { characterListMock } from "../mock/characterList.mock";

describe("<CharacterList/>", () => {
  it("The component must render a list of characters cards", () => {
    render(<CharacterCard character={characterListMock[0]} />, {
      wrapper: Router,
    });
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(1);
  });
});
