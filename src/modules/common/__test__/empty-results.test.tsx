import { render, screen } from "@testing-library/react";
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
  const message = screen.getByTestId("no-results-text");
  expect(message).toBeInTheDocument();
  expect(message).toHaveTextContent(commonLocale.noResults.title);
});
