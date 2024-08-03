import { cleanup, fireEvent, render } from "@testing-library/react";
import FavoriteComponent from "../components/favorite.component";

describe("Favorite component test suite", () => {
  afterEach(() => cleanup());
  it("Must render the component with red heart icon", () => {
    const element = render(<FavoriteComponent isFavorite={true} />);
    expect(element.getByTestId("favorite-heart-icon-red")).toBeDefined();
  });
  it("Must render the component with outlined heart icon", () => {
    const element = render(<FavoriteComponent isFavorite={false} />);
    expect(element.getByTestId("favorite-heart-icon-outlined")).toBeDefined();
  });
  it("Must call a prop fn on click", () => {
    const fn = jest.fn();
    const element = render(<FavoriteComponent isFavorite={true} action={fn} />);
    const button = element.getByTestId("favorite-heart-button");
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
});
