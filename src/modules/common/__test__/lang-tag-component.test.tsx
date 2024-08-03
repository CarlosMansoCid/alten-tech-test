import { getByText, render } from "@testing-library/react";
import LangTag from "../components/lang-tag.component";
import { I18nProvider } from "../../../providers";
import * as commonLocaleEs from "../../../locales/ES/common.json";

describe("Lang tag component test suite", () => {
  it("Component must by rendered with the lang pased by prop", () => {
    const fn = jest.fn();
    const element = render(
      <LangTag lang={{ lang: "es", code: "es" }} action={fn} />,
      { wrapper: I18nProvider }
    );
    expect(element).toBeDefined();
    expect(
      getByText(element.getByTestId("lang-label"), commonLocaleEs.langs.es)
    ).toBeTruthy();
    expect(element.getAllByTestId("es-flag")).toBeDefined();
  });
});
