export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
