import { fireEvent, getByText, render } from "@testing-library/react";
import ErrorOnFetchElement from "../components/error-on-fetch-element.component";
import I18nProvider from "../../../providers/i18n.provider";
import * as commonLocale from "../../../locales/ES/common.json";

describe("Test for Error on fetch component", () => {
  const resetErrorBoundary = jest.fn();

  it("The component should be mounted and display the rigth message", () => {
    const element = render(
      <ErrorOnFetchElement resetErrorBoundary={resetErrorBoundary} />,
      { wrapper: I18nProvider }
    );
    expect(element).toBeDefined();
    const message = element.getByTestId("error-on-fetch-message");
    expect(getByText(message, commonLocale.errors.query)).toBeTruthy();
  });

  it("The function must be called on click", async () => {
    const element = render(
      <ErrorOnFetchElement resetErrorBoundary={resetErrorBoundary} />,
      { wrapper: I18nProvider }
    );
    fireEvent.click(element.getByTestId("error-on-fetch-button"));
    expect(resetErrorBoundary).toHaveBeenCalled();
  });
});
