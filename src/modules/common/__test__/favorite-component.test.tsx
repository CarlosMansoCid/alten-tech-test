import { fireEvent, render, screen } from "@testing-library/react";
import FavoriteComponent from "../components/favorite.component";
import { vi } from "vitest";

describe("Favorite component test suite", () => {
  it("Must render the component with red heart icon", () => {
    render(<FavoriteComponent isFavorite={true} />);
    expect(screen.getByTestId("favorite-heart-icon-red")).toBeInTheDocument();
  });

  it("Must render the component with outlined heart icon", () => {
    render(<FavoriteComponent isFavorite={false} />);
    expect(
      screen.getByTestId("favorite-heart-icon-outlined")
    ).toBeInTheDocument();
  });
  it("Must call a prop fn on click", () => {
    const fn = vi.fn();
    render(<FavoriteComponent isFavorite={true} action={fn} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
});
