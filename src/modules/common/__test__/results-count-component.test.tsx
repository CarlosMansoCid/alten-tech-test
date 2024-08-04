import { render, screen } from "@testing-library/react";
import ResultsCount from "../components/results-count.component";
import { I18nProvider } from "../../../providers";
import * as EsLocale from "../../../locales/ES/character.json";

describe("Test suite for results count component", () => {
  it("The component must be mounted", () => {
    render(<ResultsCount count={4} />, {
      wrapper: I18nProvider,
    });
    const element = screen.getByRole("paragraph");

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(`4 ${EsLocale.resultsCount.label}`);
  });

  it("The component should no display on results = 0 or undefined", () => {
    render(<ResultsCount count={0} />, {
      wrapper: I18nProvider,
    });
    const element = screen.queryByRole("paragraph");
    expect(element).not.toBeInTheDocument();
  });
});
