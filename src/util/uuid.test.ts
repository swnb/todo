import { queryUUID } from "./uuid";

it("test uuid", () => {
  for (let i = 1; i < 100; i++) {
    expect(queryUUID()).toBe(`${i}`);
  }
});
