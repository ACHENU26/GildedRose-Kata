import { expect } from "chai";
import { ItemQualityNotNull, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", () => {
  it("Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement.", () => {
    const gildedRose = new GildedRose([
      new ItemQualityNotNull("+5 Dexterity Vest", 0, 2),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  it("La qualité d'un produit ne peut jamais être négative.", () => {
    const item = new ItemQualityNotNull("+5 Dexterity Vest", 0, -1);
    expect(item.quality).not.below(0);
  });
  it("'Aged Brie' augmente sa qualité (quality) plus le temps passe.", () => {
    const gildedRose = new GildedRose([
      new ItemQualityNotNull("Aged Brie", 2, 1),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });
  it("La qualité d'un produit n'est jamais de plus de 50.", () => {
    const gildedRose = new GildedRose([
      new ItemQualityNotNull("+5 Dexterity Vest", 0, 50),
    ]);
    const actualUpdatedItem = gildedRose.updateQuality()[0];
    expect(actualUpdatedItem.quality).to.equal(50);
  });
});
