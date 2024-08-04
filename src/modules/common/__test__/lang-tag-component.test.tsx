import { render, screen } from "@testing-library/react";
import LangTag from "../components/lang-tag.component";
import { I18nProvider } from "../../../providers";
import * as commonLocaleEs from "../../../locales/ES/common.json";
import { vi } from "vitest";

describe("Lang tag component test suite", () => {
  it("Component must by rendered with the lang pased by prop", () => {
    const fn = vi.fn();
    render(<LangTag lang={{ lang: "es", code: "es" }} action={fn} />, {
      wrapper: I18nProvider,
    });
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toHaveTextContent(
      commonLocaleEs.langs.es
    );
    expect(screen.getByRole("img")).toBeDefined();
  });
});
