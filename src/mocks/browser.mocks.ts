const localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key: keyof typeof store) {
      return store[key] || null;
    },
    setItem: function (key: keyof typeof store, value: keyof typeof store) {
      store[key] = value;
    },
    removeItem: function (key: keyof typeof store) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});
