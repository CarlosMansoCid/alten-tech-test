import { fireEvent, render, screen } from "@testing-library/react";
import ErrorOnFetchElement from "../components/error-on-fetch-element.component";
import I18nProvider from "../../../providers/i18n.provider";
import * as commonLocale from "../../../locales/ES/common.json";
import { describe, expect, it, vi } from "vitest";

describe("Test for Error on fetch component", () => {
  const resetErrorBoundary = vi.fn();

  beforeEach(() => {
    render(<ErrorOnFetchElement resetErrorBoundary={resetErrorBoundary} />, {
      wrapper: I18nProvider,
    });
  });

  it("The component should be mounted and display the rigth message", () => {
    const message = screen.getByRole("heading");
    expect(message).toHaveTextContent(commonLocale.errors.query);
  });

  it("The function must be called on click", async () => {
    fireEvent.click(screen.getByRole("button"));
    expect(resetErrorBoundary).toHaveBeenCalled();
  });
});
