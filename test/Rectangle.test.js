const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("return true with equal sides and false with non-equal sides", () => {
    const test = new Rectangle(4, 4);
    assert.strictEqual(test.isSquare(), true);
    const test2 = new Rectangle(2, 3);
    assert.strictEqual(test2.isSquare(), false);
  });

  it("return the area surface", () => {
    const test3 = new Rectangle(10, 3);
    assert.strictEqual(test3.getArea(), 30);
  });

  it("return the rectangle perimeter", () => {
    const test4 = new Rectangle(6, 7);
    assert.strictEqual(test4.getPerimeter(), 26);
  });
});
