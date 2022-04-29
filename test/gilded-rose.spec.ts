import { expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {
  it("Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement.", () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
});
