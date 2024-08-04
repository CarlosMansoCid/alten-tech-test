import { fireEvent, render, screen, act } from "@testing-library/react";
import { CharacterContextProvider } from "../../character/contexts/charactersContextProvider";
import FavoriteCounterContainer from "../containers/favorite-counter.container";
import { RouterProvider } from "react-router-dom";
import { router } from "../../../router/router";
import { I18nProvider } from "../../../providers";

describe("<FavoriteCounterContainer/>", () => {
  beforeEach(() => {
    render(
      //@ts-expect-error router
      <RouterProvider router={router}>
        <I18nProvider>
          <CharacterContextProvider>
            <FavoriteCounterContainer />
          </CharacterContextProvider>
        </I18nProvider>
      </RouterProvider>
    );
  });

  it("Must render the component", () => {
    expect(
      screen.getByTestId("favorites-counter-container")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("favorite-heart-icon-outlined")
    ).toBeInTheDocument();
    const counterLabel = screen.getByTestId("favorites-counter-label");
    expect(counterLabel).toBeInTheDocument();
    expect(counterLabel).toHaveTextContent("0");
    expect(window.location.pathname).toBe("/");
    expect(screen.queryByTestId("title")).not.toBeInTheDocument();
  });

  it("Dont should change the view on counter 0", async () => {
    expect(window.location.pathname).toBe("/");
    const button = screen.getByTestId("favorites-counter-container");

    await act(async () => {
      fireEvent.click(button);
    });
    expect(window.location.pathname).toBe("/");
    expect(screen.queryByTestId("title")).not.toBeInTheDocument();
  });
});
