import { store } from "./store";

it("test redux", () => {
  expect(store.getState()).toStrictEqual({ items: [] });
  store.dispatch({ type: "add", text: "123" });
  expect(store.getState()).toStrictEqual({
    items: [{ id: "1", text: "123" }],
  });
  store.dispatch({ type: "add", text: "32" });
  expect(store.getState()).toStrictEqual({
    items: [
      { id: "1", text: "123" },
      { id: "2", text: "32" },
    ],
  });
  store.dispatch({ type: "update", id: "1", text: "32" });
  expect(store.getState()).toStrictEqual({
    items: [
      { id: "1", text: "32" },
      { id: "2", text: "32" },
    ],
  });
  store.dispatch({ type: "delete", id: "1" });
  expect(store.getState()).toStrictEqual({
    items: [{ id: "2", text: "32" }],
  });
});
