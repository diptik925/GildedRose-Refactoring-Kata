import { ItemType } from "./ItemType";

export class SulfurasItem extends ItemType {
    udpateQuality() {
        return this.item.quality;
    }

    updateSellIn() {
        return this.item.sellIn;
    }
}