import { fireEvent, render, screen } from "@testing-library/react";
import { I18nProvider } from "../../../providers";
import SearchForm from "../components/search-form.component";
import * as characterLocale from "../../../locales/ES/character.json";
import { act } from "react";
import { CharacterContextProvider } from "../../character/contexts/charactersContextProvider";

describe("<SearchForm/>", () => {
  beforeEach(() => {
    render(
      <CharacterContextProvider>
        <I18nProvider>
          <SearchForm />
        </I18nProvider>
      </CharacterContextProvider>
    );
  });
  it("Component must display all elements", () => {
    const searchInput = screen.getByRole("searchbox");
    const icon = screen.getByRole("img");
    expect(searchInput).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
  it("Component must have the right placeholder", () => {
    const searchBox = screen.getByRole("searchbox");
    expect(searchBox).toHaveProperty("placeholder");
    expect(searchBox.getAttribute("placeholder")).toBe(
      characterLocale.searchInput.placeholder
    );
  });
  it("Component must work on user input", () => {
    const searchInput = screen.getByRole("searchbox");

    act(() => {
      fireEvent.change(searchInput, { target: { value: "Hulk" } });
    });

    expect(searchInput.getAttribute("value")).toBe("Hulk");
  });
});
