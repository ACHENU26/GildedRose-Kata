import { expect } from "chai";
import {
  DefaultItem,
  GildedRose,
  AgedBrie,
  Sulfuras,
  BackstagePasses,
} from "../app/gilded-rose";

describe("Gilded Rose", function () {
  describe("Item par défault", () => {
    it("Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement: 2 -> 0", () => {
      const gildedRose = new GildedRose([
        new DefaultItem("+5 Dexterity Vest", 0, 2),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
    it("La qualité d'un produit ne peut jamais être négative : -1 -> 0", () => {
      const item = new DefaultItem("+5 Dexterity Vest", 0, -1);
      expect(item.quality).not.below(0);
    });
    it("La qualité d'un produit n'est jamais de plus de 50", () => {
      const gildedRose = new GildedRose([
        new DefaultItem("+5 Dexterity Vest", 0, 55),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).not.above(50);
    });
    describe("Multiple items", () => {
      const listItems = [
        new DefaultItem("rosemary", 4, 9),
        new DefaultItem("thyme", 3, 5),
      ];

      it("Devrait dégrader toutes les valeurs de 'Quality' lors de la mise à jour", () => {
        const gildedRose = new GildedRose(listItems);
        const items = gildedRose.updateQuality(); // 1er jours de passé
        expect(items[0].quality).to.equal(8);
        expect(items[1].quality).to.equal(4);
      });
      it("Devrait dégrader toutes les valeurs 'SellIn' lors de la mise à jour", () => {
        const gildedRose = new GildedRose(listItems);
        const items = gildedRose.updateQuality(); // 2eme jours de passé
        expect(items[0].sellIn).to.equal(2);
        expect(items[1].sellIn).to.equal(1);
      });
    });
  });
  describe("Aged Brie", () => {
    it("Aged Brie augmente sa qualité plus le temps passe : 1 -> 2", () => {
      const gildedRose = new GildedRose([new AgedBrie(2, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(2);
    });
    it("La qualité d'un Aged Brie n'est jamais de plus de 50", () => {
      const gildedRose = new GildedRose([new AgedBrie(0, 70)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).not.above(50);
    });
  });
  describe("Sulfuras", () => {
    it("Sulfuras, étant un objet légendaire, n'a pas de date de péremption", () => {
      const gildedRose = new GildedRose([new Sulfuras()]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).equal(0);
    });
    it("Sulfuras, étant un objet légendaire, ne perd jamais en qualité (doit retourner 80)", () => {
      const gildedRose = new GildedRose([new Sulfuras()]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).equal(80);
    });
  });
  describe("Backstage passes", () => {
    it("Si SellIn est égal à 0, Quality doit être égale à 0", () => {
      const gildedRose = new GildedRose([new BackstagePasses(0, 11)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });
    it("Si SellIn est inférieur à 5, Quality devrait augmenter de 11 à 14 lors de la mise à jour", () => {
      const gildedRose = new GildedRose([new BackstagePasses(3, 11)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(14);
    });
    it("Si SellIn est égal à 5, Quality devrait augmenter de 15 à 18 lors de la mise à jour", () => {
      const gildedRose = new GildedRose([new BackstagePasses(5, 15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(18);
    });
    it("Si SellIn est inférieur à 10 et supérieur à 5, Quality devrait augmenter de 11 à 13 lors de la mise à jour", () => {
      const gildedRose = new GildedRose([new BackstagePasses(7, 11)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(13);
    });
  });
});
