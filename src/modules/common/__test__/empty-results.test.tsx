import { getByText, render } from "@testing-library/react";
import EmptyResults from "../components/empty-results";
import I18nProvider from "../../../providers/i18n.provider";
import * as commonLocale from "../../../locales/ES/common.json";

it("Must display and render a Empty results message", () => {
  const element = render(
    <I18nProvider>
      <EmptyResults />,
    </I18nProvider>
  );
  expect(element).toBeDefined();
  const message = element.getByTestId("no-results-text");
  expect(message).toBeDefined();
  expect(getByText(message, commonLocale.noResults.title)).toBeTruthy();
});
