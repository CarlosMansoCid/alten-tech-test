import { cleanup, fireEvent, render } from "@testing-library/react";
import LangsList from "../components/langs-list.component";
import { I18nProvider } from "../../../providers";
import { langList } from "../../../settings/langResources";

describe("Lang list component test suite", () => {
  afterEach(() => cleanup());

  const fn = jest.fn((lang: string) => lang);

  it("The component should be mounted", () => {
    const element = render(<LangsList langs={langList} action={fn} />, {
      wrapper: I18nProvider,
    });
    expect(element).toBeDefined();
  });

  it("The component must have 2 childrens and act on click with the params", () => {
    const element = render(<LangsList langs={langList} action={fn} />, {
      wrapper: I18nProvider,
    });
    const childrensElements = element.getAllByTestId("lang-flag-container");
    expect(childrensElements).toHaveLength(2);

    fireEvent.click(childrensElements[0]);
    expect(fn).toHaveBeenCalledWith(langList[0].lang);
    fireEvent.click(childrensElements[1]);
    expect(fn).toHaveBeenCalledWith(langList[1].lang);
  });
});
