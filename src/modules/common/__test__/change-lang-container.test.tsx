import { fireEvent, render, screen } from "@testing-library/react";
import { I18nProvider } from "../../../providers";
import ChangeLangContainer from "../containers/change-lang.container";
import { act } from "react";

describe("<ChangeLangContainer/>", () => {
  beforeEach(() => {
    localStorage.setItem("i18nextLng", "es");

    render(
      <I18nProvider>
        <ChangeLangContainer />
      </I18nProvider>
    );
  });
  it("Must render the icon and the selected languaje", () => {
    expect(screen.getByTestId("global-icon")).toBeInTheDocument();
    expect(screen.getByTestId("selected-language-label")).toHaveTextContent(
      "ES"
    );
  });
  it("Must display the Lang Tag items, only 1", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toBeDefined();
    expect(listItems).toHaveLength(1);
  });
  it("Must change the languaje on user interaction", async () => {
    const listItems = screen.getAllByRole("listitem");
    expect(screen.getByTestId("selected-language-label")).toHaveTextContent(
      "ES"
    );
    await act(async () => {
      fireEvent.click(listItems[0]);
    });
    expect(screen.getByTestId("selected-language-label")).toHaveTextContent(
      "EN"
    );
    expect(screen.getByText("Spanish")).toBeInTheDocument();
  });
});
