import { expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {
  it("Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement: 2 -> 0", () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  it("La qualité d'un produit ne peut jamais être négative : -1 -> 0", () => {
    const item = new Item("+5 Dexterity Vest", 0, -1);
    expect(item.quality).not.below(0);
  });
});
