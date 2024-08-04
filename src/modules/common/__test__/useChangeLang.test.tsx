import { vi } from "vitest";
import useChangeLang from "../hooks/use-change-lang";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe("useChangeLang", () => {
  it("Must try to get the configured lang from local storage", async () => {
    localStorage.setItem("i18nextLng", "es");
    const spyLoStoRemove = vi.spyOn(localStorage, "getItem");

    const { result } = renderHook(() => useChangeLang());

    expect(result.current.selectedLang).toBe("es");

    expect(spyLoStoRemove).toHaveBeenCalled();
  });
  it("Must change the selected lang", async () => {
    localStorage.setItem("i18nextLng", "es");
    const { result } = renderHook(() => useChangeLang());

    await act(async () => result.current.changeLang("en"));
    expect(result.current.selectedLang).toBe("en");
  });
});
