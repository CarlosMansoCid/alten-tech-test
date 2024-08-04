import { render, screen } from "@testing-library/react";
import CharacterCard from "../components/character-card.component";
import { characterListMock } from "../mock/characterList.mock";
import { MemoryRouter as Router } from "react-router-dom";

describe("<CharacterCard/>", () => {
  beforeEach(() => {
    render(<CharacterCard character={characterListMock[0]} />, {
      wrapper: Router,
    });
  });
  it("The component must be rendered", () => {
    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    const characterName = screen.getByRole("heading");
    expect(characterName).toBeInTheDocument();
    expect(characterName).toHaveTextContent(characterListMock[0].name);
  });
});
