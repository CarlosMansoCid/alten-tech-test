import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "vitest";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";

afterEach(() => cleanup());
