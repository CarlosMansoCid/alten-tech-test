import { fireEvent, render, screen } from "@testing-library/react";
import LangsList from "../components/langs-list.component";
import { I18nProvider } from "../../../providers";
import { langList } from "../../../settings/langResources";
import { vi } from "vitest";

describe("Lang list component test suite", () => {
  const fn = vi.fn((lang: string) => lang);
  beforeEach(() => {
    render(<LangsList langs={langList} action={fn} />, {
      wrapper: I18nProvider,
    });
  });

  it("The component should be mounted", () => {
    expect(screen.getByTestId("langs-list")).toBeInTheDocument();
  });

  it("The component must have 2 childrens and act on click with the params", () => {
    const childrensElements = screen.getAllByTestId("lang-tag");
    expect(childrensElements).toHaveLength(2);

    fireEvent.click(childrensElements[0]);
    expect(fn).toHaveBeenCalledWith(langList[0].lang);

    fireEvent.click(childrensElements[1]);
    expect(fn).toHaveBeenCalledWith(langList[1].lang);
  });
});
