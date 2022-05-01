export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
export class DefaultItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
    this.name = name;
    this.sellIn = sellIn;
    if (this.quality < 0) {
      this.quality = 0;
    } else {
      if (this.quality > 50) {
        this.quality = 50;
      }
    }
  }
  updateQuality() {
    if (this.sellIn > 0) {
      this.quality += -1;
    } else {
      this.quality += -2;
    }
    this.sellIn += -1;
  }
}
export class AgedBrie extends DefaultItem {
  constructor(sellIn: number, quality: number) {
    super("Aged Brie", sellIn, quality);
  }
  updateQuality() {
    if (this.quality < 50) this.quality += 1;
    this.sellIn += -1;
  }
}
export class Sulfuras extends DefaultItem {
  constructor() {
    super("Sulfuras", 0, 0);
    this.quality = 80;
  }
  updateQuality() {}
}
export class BackstagePasses extends DefaultItem {
  constructor(sellIn: number, quality: number) {
    super("Backstage passes", sellIn, quality);
  }
  updateQuality() {
    if (this.sellIn === 0) {
      this.quality = 0;
    } else {
      if (this.sellIn > 0 && this.sellIn <= 5) {
        this.quality += 3;
      } else {
        if (this.sellIn > 5 && this.sellIn <= 10) {
          this.quality += 2;
        } else {
          this.quality += 1;
        }
      }
    }
  }
}
export class Conjured extends DefaultItem {
  constructor(sellIn: number, quality: number) {
    super("Conjured", sellIn, quality);
  }
  updateQuality() {
    this.quality = this.quality - 2 > 0 ? this.quality - 2 : 0;
    this.sellIn += -1;
  }
}
export class GildedRose {
  items: Array<DefaultItem | AgedBrie | Sulfuras | BackstagePasses>;

  constructor(
    items = [] as Array<DefaultItem | AgedBrie | Sulfuras | BackstagePasses>
  ) {
    this.items = items;
  }

  updateQuality() {
    this.items.map((item) => {
      item.updateQuality();
    });

    return this.items;
  }
}
