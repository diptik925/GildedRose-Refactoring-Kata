import { ItemType } from './item/ItemType';
import { AgedBrieItem } from './item/AgedBrieItem';
import { BackstagePasses } from './item/BackstagePassesItem';
import { RegularItem } from './item/RegularItem';
import { SulfurasItem } from './item/SulfurasItem';
import { ConjuredItem } from './item/ConjuredItem';

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

export class GildedRose {
  items: Array<ItemType>;

  constructor(items = [] as Array<Item>) {
    this.items = [];
    for(const item of items){
      let newItem;
      switch(item.name){
        case 'Aged Brie':
          newItem = new AgedBrieItem(item);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          newItem = new SulfurasItem(item);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          newItem = new BackstagePasses(item);
          break;
        case 'Conjured Mana Cake':
          newItem = new ConjuredItem(item);
          break;
        default:
          newItem = new RegularItem(item);
        }
      this.items.push(newItem);
    }
  }

  updateQuality() {
    for (const item of this.items) {
      item.udpateQuality();
      item.updateSellIn();
    }

    return this.items;
  }
}
